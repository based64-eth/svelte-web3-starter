import walletProvider from "$lib/web3/providers/walletProvider"

export default () => {
  walletProvider
    .send('eth_requestAccounts', [])
    .catch(() => console.log('user rejected request.'))
}
