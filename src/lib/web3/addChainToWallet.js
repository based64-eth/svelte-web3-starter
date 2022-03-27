import { ethers } from 'ethers'
import isWeb3Supported from '$lib/utils/isWeb3Supported';

export default async (chain) => {
  if (!isWeb3Supported) return;

  const chainIdHex = ethers.utils.hexValue(chain.chainId)

  try {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: chainIdHex,
          blockExplorerUrls: chain.explorers.map(e => e.url),
          chainName: chain.name,
          nativeCurrency: chain.nativeCurrency,
          rpcUrls: chain.rpc,
        },
      ],
    });
  } catch (addError) {
    console.error(addError)
  }
}
