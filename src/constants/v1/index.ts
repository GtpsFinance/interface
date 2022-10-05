import { Interface } from '@ethersproject/abi'
import { ChainId } from '@uniswap/sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  
  [ChainId.MUMBAI]: '0x2fcb5d3ab09b5a3aefca6fda5c62074411aea6b3',//TODO: DO NOT SUPPORT V1 ON MUMBAI
  [ChainId.MATIC]: "0x2fcb5d3ab09b5a3aefca6fda5c62074411aea6b3"
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
