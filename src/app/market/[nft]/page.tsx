/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import PanelLayout from "./panelLayout";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function MarketPage({ params }: any) {
  const { nft } = await params;
  return (
    <div className="w-full flex lg:flex-row max-lg:flex-col justify-between bg-primary gap-4 items-start p-12">
      <Image
        alt="nft image"
        src={"/images/1.webp"}
        width={1200}
        height={800}
        className="w-[35%] h-[40%] rounded-md"
      />
      <PanelLayout nft={nft} />
    </div>
  );
}
