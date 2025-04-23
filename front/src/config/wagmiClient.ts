"use client"
import { createThirdwebClient } from "thirdweb";
import { config as dotenvConf } from "dotenv";
dotenvConf();
import { http, createConfig } from 'wagmi'
import { sepolia } from 'wagmi/chains'

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID as string;

if (!clientId) {
  throw new Error("No client ID provided");
}

export const thirdwebClient = createThirdwebClient({
  clientId: clientId,
});

export const wagmiConfig = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http()
  },
}) 