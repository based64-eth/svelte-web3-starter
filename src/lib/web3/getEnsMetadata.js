import ethereumProvider from "$lib/web3/providers/ethereumProvider"
import multicallProvider from "$lib/web3/providers/multicallProvider"

const provider = multicallProvider(ethereumProvider)

export default async (address) => {
  const name = await ethereumProvider.lookupAddress(address)
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
