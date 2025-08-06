"use client";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { bsc, mainnet, sepolia } from "wagmi/chains";
import {
  walletConnectWallet,
  binanceWallet,
  okxWallet,
  trustWallet,
  bybitWallet,
  metaMaskWallet,
} from "@rainbow-me/rainbowkit/wallets";

export const config = getDefaultConfig({
  appName: "Utopiara NFT marketplace",
  projectId: "2f8ce20ec191a5151cf56bfe861bc27c",
  chains: [mainnet, bsc, sepolia],
  multiInjectedProviderDiscovery: false,
  wallets: [
    {
      groupName: "Popular",
      wallets: [
        trustWallet,
        walletConnectWallet,
        binanceWallet,
        okxWallet,
        bybitWallet,
        metaMaskWallet,
      ],
    },
  ],
});
