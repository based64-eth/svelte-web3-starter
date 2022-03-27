import connectWallet from "$lib/web3/connectWallet"
import createSiweMessage from "$lib/web3/createSiweMessage"
import walletProvider from "$lib/web3/providers/walletProvider"

export default async (
  statement = 'Sign in with Ethereum.', 
  chainId = 1, 
  nonceUri = '/api/auth/nonce',
  verifyUri = '/api/auth/verify',
) => {
  await connectWallet();

  const signer = walletProvider.getSigner();

  const message = await createSiweMessage(
    await signer.getAddress(),
    statement,
    chainId,
    nonceUri,
  );

  const signature = await signer.signMessage(message);

  const res = await fetch(verifyUri, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message, signature }),
    credentials: 'include',
  });

  return await res.json()
}
