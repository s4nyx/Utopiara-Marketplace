import React from "react";

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
  return (
    <div className="mt-4 flex w-full flex-row items-center justify-between text-xl text-white">
      <div className="basis-[5%]">{index}</div>
      <div className="basis-[35%]">{collection}</div>
      <div className="basis-[10%]">{volume}</div>
      <div className="basis-[10%]">{change}</div>
      <div className="basis-[10%]">{floor_price}</div>
      <div className="basis-[10%]">{sales}</div>
      <div className="basis-[10%]">{unique_owners}</div>
      <div className="basis-[10%]">{items_listed}</div>
    </div>
  );
}
