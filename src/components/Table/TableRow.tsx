import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface nftProps {
  index: number;
  nft: string;
  rarity: string;
  price: string;
  top_offer: string;
  last_sale: string;
  owner: string;
  listed: string;
}

export default function TableRow({
  index,
  nft,
  rarity,
  price,
  top_offer,
  last_sale,
  owner,
  listed,
}: nftProps) {
  const [isDetailShowing, setIsDetailShowing] = useState(false);

  return (
    <Link
      className={`mt-4 flex relative w-full flex-row items-center transition-colors duration-500 justify-between text-xl text-white ${
        isDetailShowing && "bg-secondary !text-primary rounded-sm"
      }`}
      href={`/market/${nft}`}
    >
      <div
        className={`absolute transition-all duration-500 -bottom-[220px] lg:left-24 w-[450px]  rounded-lg p-2 flex flex-col items-start justify-between  bg-fifth text-secondary z-10  ${
          isDetailShowing ? "block" : "hidden"
        }`}
      >
        <div className="text-xl">{nft}</div>
        <div className="flex flex-row w-full justify-between border-b-[1px] p-1 border-secondary">
          <Image
            src={"/images/1.jpg"}
            alt="image"
            width={200}
            height={100}
            className="h-[100px] w-[135px]"
          />
          <Image
            src={"/images/1.jpg"}
            alt="image"
            width={200}
            height={100}
            className="h-[100px] w-[135px]"
          />
          <Image
            src={"/images/1.jpg"}
            alt="image"
            width={200}
            height={100}
            className="h-[100px] w-[135px]"
          />
        </div>
        <div className="flex flex-row w-full gap-2 justify-between text-xs items-start">
          <div className="flex flex-col items-start gap-2">
            <h1 className="">FLOOR PRICE</h1>
            <p className="">0.003 ETH</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h1 className="">FLOOR PRICE</h1>
            <p className="">0.003 ETH</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h1 className="">FLOOR PRICE</h1>
            <p className="">0.003 ETH</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h1 className="">FLOOR PRICE</h1>
            <p className="">0.003 ETH</p>
          </div>
        </div>
      </div>

      <div className="basis-[5%] text-center">{index}</div>
      <div
        className="basis-[30%] cursor-pointer text-center"
        onMouseEnter={() => {
          setIsDetailShowing(true);
        }}
        onMouseLeave={() => {
          setIsDetailShowing(false);
        }}
      >
        {nft}
      </div>
      <div className="basis-[10%] text-center max-lg:hidden">{rarity}</div>
      <div className="basis-[10%] text-center max-lg:hidden">{price}</div>
      <div className="basis-[10%] text-center">{top_offer}</div>
      <div className="basis-[10%] text-center max-lg:hidden">{last_sale}</div>
      <div className="basis-[15%] text-center max-lg:hidden">{owner}</div>
      <div className="basis-[10%] text-center max-lg:hidden">{listed}</div>
    </Link>
  );
}
