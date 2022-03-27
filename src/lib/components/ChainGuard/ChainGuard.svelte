<script>
	export let requiredChainId;
	export let currentChainId;
</script>

{#if requiredChainId === currentChainId}
	<slot name="content" />
{:else}
	<slot name="guard">
		Switch to {requiredChainId}.
	</slot>
{/if}
