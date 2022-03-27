import { providers } from '@0xsequence/multicall'

export default (provider) => new providers.MulticallProvider(provider)
