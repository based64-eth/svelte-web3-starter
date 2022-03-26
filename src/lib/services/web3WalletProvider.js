import { browser } from '$app/env'
import { ethers } from 'ethers'

const supportsEthereum = browser && 'ethereum' in window
const web3WalletProvider = supportsEthereum ? new ethers.providers.Web3Provider(window['ethereum']) : null

export default web3WalletProvider
