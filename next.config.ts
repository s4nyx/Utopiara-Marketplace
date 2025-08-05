import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://ipfs.io/ipfs/QmTWrxsC4vs1yFZ7g4BXFyvy1yWVKY2Xa5ak4qaKHhyTQP/2.jpg"
      ),
      new URL(
        "https://ipfs.io/ipfs/QmTWrxsC4vs1yFZ7g4BXFyvy1yWVKY2Xa5ak4qaKHhyTQP/4.jpg"
      ),
      new URL(
        "https://ipfs.io/ipfs/QmTWrxsC4vs1yFZ7g4BXFyvy1yWVKY2Xa5ak4qaKHhyTQP/1.jpg"
      ),
      new URL(
        "https://ipfs.io/ipfs/QmTWrxsC4vs1yFZ7g4BXFyvy1yWVKY2Xa5ak4qaKHhyTQP/3.jpg"
      ),
    ],
  },
};

export default nextConfig;
