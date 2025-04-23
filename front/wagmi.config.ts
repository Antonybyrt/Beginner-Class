import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'

import { config as dotenvConf } from "dotenv";
dotenvConf();

import CounterABI from '../foundry/out/Counter.sol/Counter.json';
import NewTokenABI from '../foundry/out/NewToken.sol/NewToken.json';
import { type Abi } from 'viem';

export default defineConfig({
  out: 'src/contracts/generatedContracts.ts',
  contracts: [
    { name: 'Counter', abi: CounterABI.abi as Abi, address: process.env.NEXT_PUBLIC_COUNTER as `0x${string}`},
    { name: 'NewToken', abi: NewTokenABI.abi as Abi, address: process.env.NEXT_PUBLIC_TOKEN as `0x${string}` },
  ],
  plugins: [react()],
})
