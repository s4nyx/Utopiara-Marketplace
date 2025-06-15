import React from "react";
import TableRow from "./TableRow";

interface tableProps {
  viewMode: number;
}

export default function Table({ viewMode }: tableProps) {
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
        <div className="basis-[10%] text-center max-lg:hidden">LAST SALE</div>
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((index) => (
          <TableRow
            key={index}
            index={index}
            nft={"Utopiara"}
            viewMode={viewMode}
            rarity="16ETH"
            price="9%"
            img={"/images/1.webp"}
            top_offer="<0.01ETH"
            last_sale="372"
            owner="16%"
            listed="1%"
          />
        ))}
      </div>
    </div>
  );
}
