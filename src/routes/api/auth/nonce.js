import { generateNonce } from 'siwe';

export async function get({ locals }) {
  const nonce = generateNonce();

  locals.session.data = {
    ...locals.session.data,
    nonce
  }

  return {
    status: 200,
    headers: {
      'Content-Type': 'text/plain'
    },
    body: nonce
  }
}
