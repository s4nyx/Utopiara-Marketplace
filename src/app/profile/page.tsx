"use client";
import Profile from "@/components/Profile";

// import "@rainbow-me/rainbowkit/styles.css";
// import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
// import { WagmiProvider } from "wagmi";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { config } from "../../config/wagmi";
// const queryClient = new QueryClient();

export default function UserProfile() {
  return (
    // <WagmiProvider config={config}>
    //   <QueryClientProvider client={queryClient}>
    //     <RainbowKitProvider
    //       modalSize="compact"
    //       theme={darkTheme({
    //         accentColor: "#00E5EA",
    //         accentColorForeground: "#010711",
    //         borderRadius: "medium",
    //       })}
    //     >
    <Profile />
    //     </RainbowKitProvider>
    //   </QueryClientProvider>
    // </WagmiProvider>
  );
}
