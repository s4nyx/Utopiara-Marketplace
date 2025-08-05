/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface nftProps {
  index: number;
  img: string;
  nft: string;
  rarity: string;
  price: string;
  top_offer: string;
  last_sale: string;
  owner: string;
  listed: string;
  viewMode: number;
  tokenId: string;
}

export default function TableRow({
  index,
  nft,
  img,
  rarity,
  price,
  top_offer,
  last_sale,
  viewMode,
  owner,
  listed,
  tokenId,
}: nftProps) {
  const [isDetailShowing, setIsDetailShowing] = useState(false);

  return (
    <Link
      className={`mt-4 flex relative  ${
        viewMode === 1 || viewMode === 2
          ? `flex-col ${
              viewMode === 1
                ? "lg:w-[20%] max-lg:w-[100%]"
                : "lg:w-[15%] max-lg:w-[80%] "
            } rounded-2xl bg-fifth hover:bg-secondary hover:text-primary p-2`
          : "flex-row"
      } items-center transition-colors duration-500 justify-between text-xl text-white ${
        isDetailShowing && "bg-secondary !text-primary rounded-sm"
      }`}
      href={`/market/${tokenId}`}
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

      <div
        className={`basis-[5%] text-center ${
          viewMode === 1 || viewMode === 2 ? "hidden" : "visible"
        }`}
      >
        {index}
      </div>
      <img
        alt="nft"
        src={img}
        width={100}
        height={100}
        className={`w-full  ${
          viewMode === 1 || viewMode === 2
            ? `${viewMode === 1 ? "h-[340px]" : "h-[240px]"} visible`
            : "hidden"
        }`}
      />
      <div
        className={`${
          viewMode === 1 || viewMode === 2 ? "visible" : "hidden"
        } flex flex-row justify-between w-full`}
      >
        <div>{nft}</div>
        <div>{rarity}</div>
      </div>
      <div
        className={`${
          viewMode === 1 || viewMode === 2 ? "visible" : "hidden"
        } flex flex-row justify-between w-full`}
      >
        <div>{price}</div>
        <div>{last_sale}</div>
      </div>
      <div
        className={`${
          viewMode === 1 || viewMode === 2 ? "hidden" : "visible"
        } basis-[30%] cursor-pointer flex justify-center gap-2 text-center`}
        onMouseEnter={() => {
          setIsDetailShowing(true);
        }}
        onMouseLeave={() => {
          setIsDetailShowing(false);
        }}
      >
        <Image
          alt="nft"
          src={img}
          width={100}
          height={100}
          className={`w-8 h-8 ${
            viewMode === 1 || viewMode === 2 ? "hidden" : "visible"
          }`}
        />
        <h4>{nft}</h4>
      </div>
      <div
        className={`${
          viewMode === 1 || viewMode === 2 ? "hidden" : "visible"
        } basis-[10%] text-center max-lg:hidden`}
      >
        {rarity}
      </div>
      <div
        className={`${
          viewMode === 1 || viewMode === 2 ? "hidden" : "visible"
        } basis-[10%] text-center max-lg:hidden`}
      >
        {price}
      </div>
      <div
        className={`${
          viewMode === 1 || viewMode === 2 ? "hidden" : "visible"
        } basis-[10%] text-center`}
      >
        {top_offer}
      </div>
      <div
        className={` ${
          viewMode === 1 || viewMode === 2 ? "hidden" : "visible"
        } basis-[10%] text-center max-lg:hidden`}
      >
        {last_sale}
      </div>
      <div
        className={`${
          viewMode === 1 || viewMode === 2 ? "hidden" : "visible"
        } basis-[15%] text-center max-lg:hidden`}
      >
        {owner}
      </div>
      <div
        className={`${
          viewMode === 1 || viewMode === 2 ? "hidden" : "visible"
        } basis-[10%] text-center max-lg:hidden`}
      >
        {listed}
      </div>
    </Link>
  );
}
