/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useLayoutEffect, useState } from "react";
import TableRow from "./TableRow";
import { getAvailableNFTLands } from "@/lib/api/nftlands";

interface tableProps {
  viewMode: number;
}

export default function NFTLandTable({ viewMode }: tableProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [NFTLandList, setNFTLandList] = useState<any>([]);
  useLayoutEffect(() => {
    const fetchAvailableNFTLands = async () => {
      try {
        const availableNFTLands = await getAvailableNFTLands();
        setNFTLandList(availableNFTLands.data);
        console.log("availableNFTLands", availableNFTLands);
      } catch (error) {
        console.error("Failed to fetch NFT lands:", error);
      }
    };

    fetchAvailableNFTLands();
  }, []);

  return (
    <div className={` flex w-full flex-col justify-start text-xs`}>
      <div
        className={`${
          viewMode === 1 || viewMode === 2 || viewMode === 3
            ? `hidden`
            : `visible`
        } flex w-full flex-row items-center justify-between text-lg`}
      >
        <div className="basis-[5%] text-center">#</div>
        <div className="basis-[30%] text-center">nft</div>
        <div className="basis-[10%] text-center max-lg:hidden">RARITY</div>
        <div className="basis-[10%] text-center max-lg:hidden">PRICE</div>
        <div className="basis-[10%] text-center">TOP OFFER</div>
        <div className="basis-[10%] text-center max-lg:hidden">TYPE</div>
        <div className="basis-[15%] text-center max-lg:hidden">OWNER</div>
        <div className="basis-[10%] text-center max-lg:hidden">LISTED</div>
      </div>
      <div
        className={`flex ${
          viewMode === 1 || viewMode === 2
            ? "flex-row justify-between gap-2 flex-wrap"
            : "flex-col"
        }`}
      >
        {NFTLandList.map((nftland: any, index: any) => (
          <TableRow
            key={index}
            index={index}
            nft={nftland.name}
            viewMode={viewMode}
            rarity={nftland.rarity}
            price={nftland.price}
            img={nftland.image}
            top_offer="<0.01ETH"
            last_sale={nftland.type}
            owner="16%"
            listed="1%"
            tokenId={nftland.tokenId}
          />
        ))}
      </div>
    </div>
  );
}
