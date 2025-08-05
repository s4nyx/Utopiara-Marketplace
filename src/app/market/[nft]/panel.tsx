"use client";
import { CommunityIcon } from "@/components/svgs/CommunityIcon";
import { CopyIcon } from "@/components/svgs/CopyIcon";
import { LikeIcon } from "@/components/svgs/LikeIcon";
import { MatchIcon } from "@/components/svgs/MatchIcon";
import { NoteIcon } from "@/components/svgs/NoteIcon";
import { PCIcon } from "@/components/svgs/PCIcon";
import { PlusIcon } from "@/components/svgs/PlusIcon";
import { TipIcon } from "@/components/svgs/TipIcon";

import "@rainbow-me/rainbowkit/styles.css";
import { ethers } from "ethers";
import { useAccount } from "wagmi";

import { useConnectModal } from "@rainbow-me/rainbowkit";
import { CONTRACT } from "@/constant/contract";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Panel({ nft }: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { openConnectModal }: any = useConnectModal();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { connector }: any = useAccount();

  const marketplaceContract = CONTRACT["marketplace"];

  const handleBuy = async () => {
    openConnectModal();
    const provider = await connector.getProvider();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ethersProvider = new ethers.BrowserProvider(provider as any);
    const signer = await ethersProvider.getSigner();
    const marketplace = new ethers.Contract(
      marketplaceContract.address,
      marketplaceContract.abi,
      signer
    );
    const tx = await marketplace.buyNFT(nft);
  };

  return (
    <div className="flex text-white flex-col p-4 bg-fifth rounded-md w-full items-start gap-4">
      <h1 className="text-3xl">{nft}</h1>
      <div className="w-full flex flex-row justify-between items-center">
        <p className="text-sm">owned by {"0xsdfs32"}</p>
        <div className="flex flex-row justify-between gap-4 items-center">
          <CopyIcon classname="cursor-pointer fill-text-primary hover:fill-text-secondary" />
          <MatchIcon classname="cursor-pointer fill-text-primary hover:fill-text-secondary" />
          <LikeIcon classname="cursor-pointer fill-text-primary hover:fill-text-secondary disabled:pointer-events-none disabled:opacity-40" />
        </div>
      </div>
      <div className="w-full border-[1px] rounded-lg border-zinc-600 flex flex-col justify-start p-4">
        <div className="border-b-[1px] p-2 border-b-zinc-600 w-full flex lg:flex-row max-lg:flex-col max-lg:gap-4 justify-between">
          <div className="flex flex-col text-sm gap-2">
            <h3 className="text-zinc-500">TOP OFFER</h3>
            <p>
              2.02 <span className="text-zinc-500">WETH</span>
            </p>
          </div>
          <div className="flex flex-col text-sm gap-2">
            <h3 className="text-zinc-500">COLLECTION FLOOR</h3>
            <p>
              2.02 <span className="text-zinc-500">WETH</span>
            </p>
          </div>
          <div className="flex flex-col text-sm gap-2">
            <h3 className="text-zinc-500">RARITY</h3>
            <p>
              2.02 <span className="text-zinc-500">WETH</span>
            </p>
          </div>
          <div className="flex flex-col text-sm gap-2">
            <h3 className="text-zinc-500">LAST SALE</h3>
            <p>
              2.02 <span className="text-zinc-500">WETH</span>
            </p>
          </div>
        </div>
        <div className="px-2 py-4 flex flex-col text-sm items-start gap-4">
          <h3 className="text-zinc-500">BUY FOR</h3>
          <div className="flex lg:flex-row max-lg:flex-col justify-start items-end gap-4">
            <span className="text-3xl text-white">{"2.0954"} ETH</span>
            <span className="text-zinc-500">{"{$5,332.43}"}</span>
            <span className="text-white text-sm ">ENDING IN {"6"} MINUTES</span>
          </div>
          <div className="flex flex-row justify-between w-full items-center gap-2">
            <button
              className="rounded-xl text-primary h-12 w-1/2 bg-secondary"
              onClick={handleBuy}
            >
              Buy now
            </button>

            {/* <ConnectButton label="Buy now" /> */}
            <button className="rounded-xl text-white h-12 w-1/2 bg-none border-zinc-600 border-[1px]">
              Make offer
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border-[1px] rounded-lg border-zinc-600 p-4">
        <section className="w-full z-30  divide-y divide-slate-200 rounded bg-fourth">
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <TipIcon classname="h-6 w-6 shrink-0 stroke-secondary " />
              Traits
              <PlusIcon classname="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45" />{" "}
            </summary>
            <p className="mt-4 text-zinc-400">
              All components can be copied and pasted and easily implemented in
              your tailwind css projects. You can choose which language you want
              to copy the desired component and just hover and click on the
              component you need and paste it on your project.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <CommunityIcon className="h-6 w-6 shrink-0 stroke-secondary " />
              Price history
              <PlusIcon classname="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45" />
            </summary>
            <p className="mt-4 text-zinc-400">
              All components come with proper attributes to ensure full
              accessibility with the WAI-ARIA standards. Web accessibility means
              that websites, tools, and technologies are designed and developed
              so that people with disabilities can use them.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <PCIcon classname="h-6 w-6 shrink-0 stroke-secondary " /> About
              <PlusIcon classname="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45" />
            </summary>
            <p className="mt-4 text-zinc-400">
              Every component is fully responsive and implemented to look great
              at any screen size.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <NoteIcon classname="h-6 w-6 shrink-0 stroke-secondary " />
              Blockchain details
              <PlusIcon classname="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45" />
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
        </section>
      </div>
    </div>
  );
}
