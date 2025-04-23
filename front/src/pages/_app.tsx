"use client";

import "@/styles/globals.css";
import type { Metadata } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import { WagmiProvider } from "wagmi";

import { wagmiConfig } from "../config/wagmiClient";
import { ThirdwebProvider } from "thirdweb/react";
import { AppProps } from "next/app";

export const metadata: Metadata = {
  title: "Architecture blockchain thirdweb",
  description:
    "Starter template for using thirdweb SDK",
};

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThirdwebProvider>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </WagmiProvider>
    </ThirdwebProvider>
  );
}
