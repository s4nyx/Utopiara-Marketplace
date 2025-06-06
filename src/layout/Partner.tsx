"use client";
import Image from "next/image";
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Partner() {
  const component = useScrollAnimation(".animate-partner");
  const imagesComponent = useScrollAnimation(".animate-image", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });

  return (
    <div className="relative min-h-screen w-full py-16" ref={component}>
      <div className="absolute inset-0 bg-primary "></div>
      <div className="relative z-10 mx-auto flex h-full w-[80%] flex-col items-center justify-between">
        <h1 className="lg:animate-partner group absolute z-10 text-center font-bold text-white max-lg:left-0 max-lg:top-12  max-lg:text-2xl lg:left-12 lg:top-64 lg:text-[48px]">
          <span className="text-secondary  group-hover:drop-shadow-[0_0_10px_rgba(1,234,249,0.8)]">
            CREATE
          </span>{" "}
          <span className="text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            AND
          </span>
          <br />{" "}
          <span className="text-secondary group-hover:drop-shadow-[0_0_10px_rgba(1,234,249,0.8)]">
            MINT
          </span>{" "}
          <span className="text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            NFTS
          </span>
        </h1>

        <div className="flex w-full flex-1 flex-col items-center justify-between gap-4">
          {/* First Row */}
          <div className="grid w-full grid-cols-4 gap-8" ref={imagesComponent}>
            <div className="col-span-1"></div>
            <div className="lg:animate-image group col-span-1  aspect-[5/6] overflow-hidden rounded-lg border-[1px] border-secondary">
              <Image
                src="/images/4.webp"
                alt="NFT Collection 1"
                width={250}
                height={300}
                className="h-full w-full transform rounded-lg  object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <div className="col-span-1"></div>
            <div className="lg:animate-image group col-span-1  aspect-[5/6] overflow-hidden rounded-lg border-[1px] border-secondary">
              <Image
                src="/images/5.webp"
                alt="NFT Collection 2"
                width={250}
                height={300}
                className="h-full w-full transform object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid w-full grid-cols-4 gap-8" ref={imagesComponent}>
            <div className="lg:animate-image group col-span-1  aspect-[5/6] overflow-hidden rounded-lg border-[1px] border-secondary">
              <Image
                src="/images/6.webp"
                alt="NFT Collection 3"
                width={300}
                height={400}
                className="h-full w-full transform object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <div className="col-span-1 flex items-center justify-center p-4 max-lg:hidden">
              <p className="animate-partner text-center text-base font-medium leading-relaxed text-white lg:text-lg">
                Empower your creativity by minting and selling your unique NFTs
                on our platform. Be an NFT creator!
              </p>
            </div>
            <div className="lg:animate-image group col-span-1  aspect-[5/6] overflow-hidden rounded-lg border-[1px] border-secondary">
              <Image
                src="/images/2.webp"
                alt="NFT Collection 4"
                width={300}
                height={400}
                className="h-full w-full transform object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <div className="lg:animate-image group col-span-1  aspect-[5/6] overflow-hidden rounded-lg border-[1px] border-secondary">
              <Image
                src="/images/3.webp"
                alt="NFT Collection 5"
                width={300}
                height={400}
                className="h-full w-full transform object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
