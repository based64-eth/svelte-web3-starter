<script>
  import detectEthereumProvider from '@metamask/detect-provider';
  import { onMount } from 'svelte';
  import { isDetectingWeb3, isWeb3Supported, selectedAddress, selectedChainId } from '$lib/stores/web3';
  import "../app.css";

  onMount(async () => {    
    const provider = await detectEthereumProvider();    
    
    isDetectingWeb3.set(false);
    isWeb3Supported.set(!!provider);

    if (!provider) return;

    const accounts = await provider.request({method: 'eth_accounts'})
    const chainIdHex = await provider.request({method: 'eth_chainId'})

    updateSelectedAddress(accounts)
    updateChainId(chainIdHex)
    registerWalletListeners(provider);
  })

  const updateSelectedAddress = (accounts) => {
    selectedAddress.set(accounts.length ? accounts[0] : null)
  }

  const updateChainId = (chainIdHex) => {
    selectedChainId.set(parseInt(chainIdHex))
  }

  const registerWalletListeners = (provider) => {
    provider.on('accountsChanged', updateSelectedAddress)
    provider.on('chainChanged', updateChainId)
  }
</script>

<slot />
