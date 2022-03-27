import ethereumProvider from "$lib/services/web3/ethereumProvider"

export default async (address) => {
  const name = await ethereumProvider.lookupAddress(address)
  const resolver = await ethereumProvider.getResolver(name)
  
  return {
    name,
    avatar: await resolver.getAvatar(),
    email: await resolver.getText('email'),
    url: await resolver.getText('url'),
    discord: await resolver.getText('com.discord'),
    github: await resolver.getText('com.github'),
    reddit: await resolver.getText('com.reddit'),
    telegram: await resolver.getText('com.telegram'),
    twitter: await resolver.getText('com.twitter'),
  }
}
