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
}: nftProps) {
  const [isDetailShowing, setIsDetailShowing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      className={`mt-4 flex relative overflow-hidden ${
        viewMode === 1 || viewMode === 2
          ? `flex-col ${
              viewMode === 1
                ? "lg:w-[20%] max-lg:w-[100%]"
                : "lg:w-[15%] max-lg:w-[80%] "
            } rounded-2xl bg-fifth p-2`
          : "flex-row h-[60px] w-full"
      } items-center justify-between text-xl text-white transition-transform duration-300 hover:-translate-y-1`}
      href={`/market/${nft}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
      <Image
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

      {/* Buy Now Button - Inside Link */}
      {(viewMode === 1 || viewMode === 2) && (
        <div
          className={`absolute bottom-0 left-0 right-0 w-full transition-all duration-300 ease-in-out pointer-events-none ${
            isHovered
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <button
            className="w-full bg-[#01eaf9] hover:bg-[#03ddec] text-white font-bold py-3 px-4 rounded-b-2xl transition-colors duration-200 pointer-events-auto cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Add your buy now logic here
              console.log("Buy now clicked for:", nft);
            }}
          >
            Buy Now
          </button>
        </div>
      )}
    </Link>
  );
}
