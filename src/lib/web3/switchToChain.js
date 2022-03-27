import { ethers } from 'ethers'
import isWeb3Supported from '$lib/utils/isWeb3Supported';
import addChainToWallet from '$lib/web3/addChainToWallet'
import chains from '$lib/chains.config';

export default async (chainId) => {
  if (!isWeb3Supported) return;
  
  const chainIdHex = ethers.utils.hexValue(chainId)

  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chainIdHex }],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      const chain = Object.values(chains).find(c => c.chainId === chainId)
      addChainToWallet(chain);
    }
    
    console.error(switchError)
  }
}
