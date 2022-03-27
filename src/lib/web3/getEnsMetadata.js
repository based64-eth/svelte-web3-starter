import rpcProvider from "$lib/web3/providers/rpcProvider"
import multicallProvider from "$lib/web3/providers/multicallProvider"

const provider = multicallProvider(rpcProvider.ETHEREUM)

export default async (address) => {
  const name = await provider.lookupAddress(address)
  const resolver = await provider.getResolver(name)

  const [
    avatar,
    email,
    url,
    discord,
    github,
    reddit,
    telegram,
    twitter
  ] = await Promise.all([
    provider.getAvatar(address),
    resolver.getText('email'),
    resolver.getText('url'),
    resolver.getText('com.discord'),
    resolver.getText('com.github'),
    resolver.getText('com.reddit'),
    resolver.getText('com.telegram'),
    resolver.getText('com.twitter'),
  ])
  
  return {
    name,
    avatar,
    email,
    url,
    discord,
    github,
    reddit,
    telegram,
    twitter,
  }
}
