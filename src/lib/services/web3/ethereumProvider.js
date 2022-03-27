import { ethers } from 'ethers'

export default new ethers.providers.JsonRpcProvider(process.env.ETHEREUM_RPC_URI)
