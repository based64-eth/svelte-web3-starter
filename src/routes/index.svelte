<script>
  import { session } from '$app/stores'
  import { isAuthenticated, authenticatedAddress } from '$lib/stores/auth'
	import {
    isConnected,
		isDetectingWeb3,
		isWeb3Supported,
		selectedAddress,
		selectedChainId
	} from '$lib/stores/web3';
  import connectWallet from '$lib/web3/connectWallet';
  import signInWithEthereum from '$lib/web3/signInWithEthereum';

  const onClickSignIn = async () => {
    try {
      await signInWithEthereum()
      updateSessionOnClient()
    } catch (e) {
      console.error(e)
    }
  }

  const onClickSignOut = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'DELETE'
      })
      updateSessionOnClient()
    } catch (e) {
      console.error(e)
    }
  }

  // todo: improve this
  // https://github.com/sveltejs/kit/issues/1726#issuecomment-1000456582
  const updateSessionOnClient = () => {
    window.location.reload()
  }
</script>

<div class="p-10">
	<h1 class="font-bold">svelte-web3-starter</h1>
	{#if !$isDetectingWeb3}
		{#if $isWeb3Supported}
      <div>Connected: {$isConnected}</div>
      <div>Selected chain id: {$selectedChainId}</div>
			<div>Selected address: {$selectedAddress}</div>
			<div>{$isAuthenticated ? `Signed in as ${$authenticatedAddress}` : 'Not signed in' }</div>
      <div class="mt-5">Session data:</div>
      <textarea class="text-xs w-full" rows="3">{$session && JSON.stringify($session)}</textarea>
			<div class="mt-5">
				<button 
          on:click={() => connectWallet()} 
          class="{`py-2 px-4 rounded-sm text-white ${$isConnected ? 'bg-zinc-400' : 'bg-zinc-800'}`}"
          disabled={$isConnected}
				>
          {$isConnected ? 'Wallet Connected' : 'Connect Wallet'}
        </button>
				<button
					on:click={onClickSignIn}
					class="{`py-2 px-4 rounded-sm text-white ${!$isConnected || $isAuthenticated ? 'bg-zinc-400' : 'bg-zinc-800'}`}"
          disabled={!$isConnected || $isAuthenticated}
        >
          Sign In
        </button>
				<button
					on:click={onClickSignOut}
					class="{`py-2 px-4 rounded-sm text-white ${!$isAuthenticated ? 'bg-zinc-400' : 'bg-zinc-800'}`}"
          disabled={!$isAuthenticated}
        >
          Sign Out
        </button>
			</div>
		{:else}
			<div>Your browser does not support Web3.</div>
		{/if}
	{:else}
		<div>Detecting whether your browser supports Web3...</div>
	{/if}
</div>
