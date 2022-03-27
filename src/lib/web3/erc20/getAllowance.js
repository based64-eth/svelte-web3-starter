import {ethers} from 'ethers'
import ERC20 from '$lib/web3/abis/ERC20.json'

export default async ({ token, owner, spender, provider }) => {
  const tokenInstance = new ethers.Contract(token, ERC20, provider);
  const allowance = await tokenInstance.allowance(owner, spender)
  return allowance
}
