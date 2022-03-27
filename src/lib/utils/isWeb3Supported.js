import { browser } from '$app/env'

export default () => {
  return browser && window.ethereum
}
