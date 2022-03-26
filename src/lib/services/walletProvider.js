import { ethers } from 'ethers'

const supportsEthereum = typeof(window) !== 'undefined' && window.hasOwnProperty('ethereum')
const walletProvider = supportsEthereum ? new ethers.providers.Web3Provider(window['ethereum']) : null

export default walletProvider
