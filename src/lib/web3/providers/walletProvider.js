import { ethers } from 'ethers'
import isWeb3Supported from '$lib/utils/isWeb3Supported'

export default isWeb3Supported() ? new ethers.providers.Web3Provider(window['ethereum']) : null
