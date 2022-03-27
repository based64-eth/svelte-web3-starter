import { ethers } from 'ethers'

const SUPPORTED_CHAINS = ['POLYGON']

const providers = {
  ETHEREUM: new ethers.providers.JsonRpcProvider(process.env.ETHEREUM_RPC_URI)
}

SUPPORTED_CHAINS.forEach(chain => {
  const rpcUri = process.env[`${chain.toUpperCase()}_RPC_URI`]
  if (!rpcUri) return
  providers[chain] = new ethers.providers.JsonRpcProvider(rpcUri)
})

export default providers
