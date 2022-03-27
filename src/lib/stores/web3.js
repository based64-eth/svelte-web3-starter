import { derived, writable } from 'svelte/store'

export const selectedAddress = writable('');
export const selectedChainId = writable(-1);
export const isDetectingWeb3 = writable(true);
export const isWeb3Supported = writable(false);
export const isConnected = derived(selectedAddress, $selectedAddress => !!$selectedAddress);
