// Customize this config according to the chains your app supports.
//
// DO NOT INCLUDE PRIVATE RPC URLS IN THIS FILE.
//
// Refer to:
// https://chainlist.org/
// https://github.com/ethereum-lists/chains/tree/master/_data/chains

export default {
  ethereum: {
    "name": "Ethereum Mainnet",
    "chain": "ETH",
    "icon": "ethereum",
    "rpc": [
      "https://cloudflare-eth.com"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "infoURL": "https://ethereum.org",
    "shortName": "eth",
    "chainId": 1,
    "networkId": 1,
    "slip44": 60,
    "ens": {
      "registry": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    "explorers": [{
      "name": "etherscan",
      "url": "https://etherscan.io",
      "standard": "EIP3091"
    }]
  },
  polygon: {
    "name": "Polygon Mainnet",
    "chain": "Polygon",
    "rpc": [
      "https://polygon-rpc.com/",
      "https://rpc-mainnet.matic.network",
      "https://matic-mainnet.chainstacklabs.com",
      "https://rpc-mainnet.maticvigil.com",
      "https://rpc-mainnet.matic.quiknode.pro",
      "https://matic-mainnet-full-rpc.bwarelabs.com"
    ],
    "faucets": [],
    "nativeCurrency": {
      "name": "MATIC",
      "symbol": "MATIC",
      "decimals": 18
    },
    "infoURL": "https://polygon.technology/",
    "shortName": "MATIC",
    "chainId": 137,
    "networkId": 137,
    "slip44": 966,
    "explorers": [{
      "name": "polygonscan",
      "url": "https://polygonscan.com",
      "standard": "EIP3091"
    }]
  }
}
