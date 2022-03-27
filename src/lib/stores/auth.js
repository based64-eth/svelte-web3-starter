import { derived } from 'svelte/store'
import { session } from '$app/stores'

export const authenticatedAddress = derived(session, $session => {
  if (!$session || !$session['user']) return ''
  return $session['user'].address;
});

export const isAuthenticated = derived(authenticatedAddress, $authenticatedAddress => !!$authenticatedAddress);
