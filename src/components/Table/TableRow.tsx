import Image from "next/image";
import React, { useState } from "react";

interface CollectionProps {
  index: number;
  collection: string;
  volume: string;
  change: string;
  floor_price: string;
  sales: string;
  unique_owners: string;
  items_listed: string;
}

export default function TableRow({
  index,
  collection,
  volume,
  change,
  floor_price,
  sales,
  unique_owners,
  items_listed,
}: CollectionProps) {
  const [isDetailShowing, setIsDetailShowing] = useState(false);

  return (
    <div className="mt-4 flex relative w-full flex-row items-center justify-between text-xl text-white">
      {isDetailShowing && (
        <div className="absolute -bottom-[200px] w-[450px]  rounded-lg p-2 flex flex-col items-start justify-between text-white bg-third z-10">
          <div className="text-xl">{collection}</div>
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
          <div className="flex flex-row w-full gap-2 justify-between items-start">
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-sm">FLOOR PRICE</h1>
              <p className="text-sm">0.003 ETH</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-sm">FLOOR PRICE</h1>
              <p className="text-sm">0.003 ETH</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-sm">FLOOR PRICE</h1>
              <p className="text-sm">0.003 ETH</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-sm">FLOOR PRICE</h1>
              <p className="text-sm">0.003 ETH</p>
            </div>
          </div>
        </div>
      )}

      <div className="basis-[5%]">{index}</div>
      <div
        className="basis-[35%] cursor-pointer"
        onMouseEnter={() => {
          setIsDetailShowing(true);
        }}
        onMouseLeave={() => {
          setIsDetailShowing(false);
        }}
      >
        {collection}
      </div>
      <div className="basis-[10%] max-lg:hidden">{volume}</div>
      <div className="basis-[10%] max-lg:hidden">{change}</div>
      <div className="basis-[10%]">{floor_price}</div>
      <div className="basis-[10%] max-lg:hidden">{sales}</div>
      <div className="basis-[10%] max-lg:hidden">{unique_owners}</div>
      <div className="basis-[10%] max-lg:hidden">{items_listed}</div>
    </div>
  );
}
