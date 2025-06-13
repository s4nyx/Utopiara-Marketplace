import React from "react";
import TableRow from "./TableRow";

export default function Table() {
  return (
    <div className="flex w-full flex-col justify-start text-xs">
      <div className="flex w-full flex-row items-center justify-between text-lg">
        <div className="basis-[5%] text-center">#</div>
        <div className="basis-[30%] text-center">nft</div>
        <div className="basis-[10%] text-center max-lg:hidden">RARITY</div>
        <div className="basis-[10%] text-center max-lg:hidden">PRICE</div>
        <div className="basis-[10%] text-center">TOP OFFER</div>
        <div className="basis-[10%] text-center max-lg:hidden">LAST SALE</div>
        <div className="basis-[15%] text-center max-lg:hidden">OWNER</div>
        <div className="basis-[10%] text-center max-lg:hidden">LISTED</div>
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((index) => (
        <TableRow
          key={index}
          index={index}
          nft={"Utopiara"}
          rarity="16ETH"
          price="9%"
          top_offer="<0.01ETH"
          last_sale="372"
          owner="16%"
          listed="1%"
        />
      ))}
      <TableRow
        index={6}
        nft={"Utopiara"}
        rarity="16ETH"
        price="9%"
        top_offer="<0.01ETH"
        last_sale="372"
        owner="16%"
        listed="1%"
      />
      <TableRow
        index={7}
        nft={"Utopiara"}
        rarity="20ETH"
        price="19%"
        top_offer="<0.11ETH"
        last_sale="372"
        owner="26%"
        listed="3%"
      />
    </div>
  );
}
