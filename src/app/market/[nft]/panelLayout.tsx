"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { config } from "../../../config/wagmi";
import Panel from "./panel";
const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PanelLayout({ nft }: any) {
  return (
    <div className="w-full">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            modalSize="compact"
            theme={darkTheme({
              accentColor: "#00E5EA",
              accentColorForeground: "#010711",
              borderRadius: "medium",
            })}
          >
            <Panel nft={nft} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}
