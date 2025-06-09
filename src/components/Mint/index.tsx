import Image from "next/image";
import React from "react";

export default function Mint() {
  return (
    <div className="mx-auto  w-screen bg-primary py-12">
      <div className="w-[80%]  text-secondary mx-auto flex flex-col justify-start items-start gap-4">
        <h1 className="text-3xl">
          Let&apos;s create a smart contract for your drop.
        </h1>
        <p className="text-sm">
          You&apos;ll need to deploy an ERC-721 contract onto the blockchain
          before you can create a drop.
        </p>
        <div className="flex flex-col w-full items-start justify-start gap-4">
          <h1 className="text-xl">Logo Image</h1>
          <input
            type="file"
            className=" w-full h-40 p-4 rounded-lg text-center border-secondary border-[1px]"
          ></input>
        </div>
        <div className="flex flex-row w-full justify-between items-start gap-8">
          <div className="basis-[80%] flex flex-col items-start gap-2">
            <h2 className="text-lg">Contract name</h2>
            <input
              className="w-full border-secondary outline-none rounded-md border-[1px] px-2 py-1"
              placeholder="My Collection Name"
            ></input>
          </div>
          <div className="basis-[20%] flex flex-col items-start gap-2">
            <h2 className="text-lg">Token sysmbol</h2>
            <input
              className="w-full border-secondary outline-none rounded-md border-[1px] px-2 py-1"
              placeholder="MCN"
            ></input>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-xl">Blockchain</h1>
          <div className="flex flex-row justify-between gap-4 items-start">
            <div className="border-secondary border-[1px] rounded-xl p-4 flex flex-col items-start justify-start gap-4">
              <Image
                src={"./network-logo/ethereum.svg"}
                width={100}
                height={100}
                alt="logo"
                className="w-[32px] h-[32px]"
              />
              <h1 className="text-xl">Ethereum</h1>
              <p className="text-sm rounded-md bg-third px-2">Most popular</p>
              <p className="text-md">Estimated cost to deploy contract:</p>
            </div>
            <div className="border-secondary border-[1px] rounded-xl p-4 flex flex-col items-start justify-start gap-4">
              <Image
                src={"./network-logo/base.svg"}
                width={100}
                height={100}
                alt="logo"
                className="w-[32px] h-[32px]"
              />
              <h1 className="text-xl">Base</h1>
              <p className="text-sm rounded-md bg-third px-2">Cheaper</p>
              <p className="text-md">Estimated cost to deploy contract:</p>
            </div>
            <div className="border-secondary border-[1px] rounded-xl p-4 flex flex-col items-start justify-start gap-4">
              <Image
                src={"./network-logo/sei.svg"}
                width={100}
                height={100}
                alt="logo"
                className="w-[32px] h-[32px]"
              />
              <h1 className="text-xl">Sei</h1>
              <button className="text-sm rounded-md bg-third px-2">
                Change
              </button>
              <p className="text-md">Estimated cost to deploy contract:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
