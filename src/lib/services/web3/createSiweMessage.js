import { SiweMessage } from 'siwe';

export default async (address, statement, chainId, nonceUri) => {
  const domain = window.location.host;
  const uri = window.location.origin;

  const nonce = await fetch(nonceUri, {
    credentials: 'include'
  })

  const message = new SiweMessage({
    domain,
    address,
    statement,
    uri,
    chainId,
    version: '1',
    nonce: await nonce.text()
  })

  return message.prepareMessage();
}
