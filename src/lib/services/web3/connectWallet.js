import walletProvider from "$lib/services/web3/walletProvider";

export default () => {
  walletProvider
    .send('eth_requestAccounts', [])
    .catch(() => console.log('user rejected request.'))
}
