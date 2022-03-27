import { SiweMessage } from 'siwe';
import walletProvider from '$lib/services/web3/walletProvider'

export default async (address, statement, chainId, nonceUri) => {
  const domain = window.location.host;
  const uri = window.location.origin;
  const signer = walletProvider.getSigner();

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
