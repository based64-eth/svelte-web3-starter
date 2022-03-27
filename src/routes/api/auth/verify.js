import { SiweMessage, ErrorTypes } from 'siwe';
import { authenticatedAddress } from '$lib/stores/auth';

export async function post({ locals, request }) {
  const body = await request.json()

  try {
    if (!body.message) {
      return {
        status: 422,
        body: { 
          message: 'Expected prepareMessage object as body.' 
        }
      };
    }

    let message = new SiweMessage(body.message);
    const fields = await message.validate(body.signature);

    if (fields.nonce !== locals.session.data.nonce) {
      return {
        status: 422,
        body: { 
          message: 'Invalid nonce.' 
        }
      };
    }

    const { address } = fields

    locals.session.data = {
      ...locals.session.data,
      siwe: fields,
      user: {
        address,
      }
    }

    locals.cookies.expires = new Date(fields.expirationTime);
    
    return {
      status: 200,
      body: {
        ok: true,
        address: address,
      }
    }
  } catch (e) {
    locals.session.data = {
      ...locals.session.data,
      siwe: null,
      nonce: null,
    }

    authenticatedAddress.set('')

    console.error(e);

    switch (e) {
      case ErrorTypes.EXPIRED_MESSAGE: {
          return {
            status: 440,
            body: {
              message: e.message
            }
          }
        break;
      }
      case ErrorTypes.INVALID_SIGNATURE: {
          return {
            status: 422,
            body: {
              message: e.message
            }
          }
        break;
      }
      default: {
          return {
            status: 500,
            body: {
              message: e.message
            }
          }
        break;
      }
    }
  }
}
