"use client";
import GetStartedBtn from "@/components/GetStartedBtn/GetStartedBtn";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { BinanceIcon } from "@/components/svgs/BinanceIcon";
import { CoinDeskIcon } from "@/components/svgs/CoinDeskIcon";
import { HuobiIcon } from "@/components/svgs/HuobiIcon";
import { TronIcon } from "@/components/svgs/TronIcon";

export default function Browse() {
  const partners = [
    {
      name: "Binance",
      logo: (
        <BinanceIcon classname="h-12 w-12 transform transition-all duration-300 group-hover:scale-110 lg:h-16 lg:w-16" />
      ),
      hoverColor: "group-hover:text-[#F0B90B]",
    },
    {
      name: "CoinDesk",
      logo: (
        <CoinDeskIcon classname="h-12 w-12 transform transition-all duration-300 group-hover:scale-110 lg:h-16 lg:w-16" />
      ),
      hoverColor: "group-hover:text-[#0A99DA]",
    },
    {
      name: "Huobi",
      logo: (
        <HuobiIcon classname="h-12 w-12 transform transition-all duration-300 group-hover:scale-110 lg:h-16 lg:w-16" />
      ),
      hoverColor: "group-hover:text-[#2FB822]",
    },
    {
      name: "Tron",
      logo: (
        <TronIcon classname="h-12 w-12 transform transition-all duration-300 group-hover:scale-110 lg:h-16 lg:w-16" />
      ),
      hoverColor: "group-hover:text-[#FF4C3B]",
    },
  ];
  const app = useRef<HTMLImageElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(app.current, {
        opacity: 1,
        overwrite: true,
        ease: "power1.out",
        duration: 1,
        yoyo: true,
        repeat: -1,
      });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center py-24 ">
      <div className="absolute left-0 top-0 w-full h-full">
        <Image
          alt="background_1"
          src="/webp/background/back_4.webp"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          blurDataURL="/webp/background/back4_blur.webp"
          placeholder="blur"
          priority
        />
        <Image
          ref={app}
          alt="background_2"
          src="/webp/background/back_10.webp"
          className="opacity-0"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          blurDataURL="/webp/background/back4_blur.webp"
          placeholder="blur"
          loading="eager"
        />
      </div>
      {/* <div className="absolute left-8 top-20 h-40 w-40 border-2 border-fifth"></div>
      <div className="absolute left-24 top-36 h-32 w-32 border-2 border-fifth"></div>
      <div className="absolute left-32 top-16 h-32 w-32 border-2 border-fifth"></div>

      <div className="absolute max-lg:hidden left-1/2 top-20 h-60 w-60 border-2 border-fifth"></div>
      <div className="absolute max-lg:hidden left-[56%] top-48 h-48 w-48 border-2 border-fifth"></div>
      <div className="absolute max-lg:hidden left-[59%] top-16 h-48 w-48 border-2 border-fifth"></div>

      <div className="absolute right-8 top-24 h-40 w-40 border-2 border-fifth"></div>
      <div className="absolute right-24 top-40 h-32 w-32 border-2 border-fifth"></div>
      <div className="absolute right-32 top-20 h-32 w-32 border-2 border-fifth"></div> */}

      <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-primary via-transparent to-[#0d1b2500]" />
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-primary via-transparent to-[#0d1b2500]" />

      <div className="absolute inset-0  bg-primary/80"></div>
      <div className="z-10 mb-16 max-w-2xl text-center">
        <h1 className="font-bold text-white max-lg:text-[36px] md:text-6xl lg:text-5xl">
          <p>BROWSE</p>
          <p className="my-4 text-secondary">EXCLUSIVE NFT</p>
          <p>COLLECTIONS</p>
        </h1>
        <p className="my-6 text-base text-white/80 max-lg:text-sm lg:text-lg">
          Choose us as your NFT marketplace and embark on an exciting journey
          into the world of digital collectibles, where creativity, security,
          and opportunity converge.
        </p>
        <GetStartedBtn />
      </div>
      <div className="w-full py-8 z-10">
        <h2 className="lg:animate-partner mb-12 text-center font-bold text-white max-lg:text-2xl lg:text-[40px]">
          OUR <span className="text-secondary">PARTNERS</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 w-[90%] mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="animate-partner-logo group flex cursor-pointer flex-row items-center gap-4 rounded-xl bg-[#061623]/70 p-6 transition-all duration-300 hover:bg-[#092a42]/50 hover:shadow-lg hover:shadow-secondary/10 lg:flex-col lg:py-8"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/5 p-2 transition-all duration-300 group-hover:bg-white/10 lg:h-24 lg:w-24">
                {partner.logo}
              </div>
              <span className="text-lg font-medium tracking-wider text-white/80 transition-all duration-300 group-hover:text-secondary lg:text-3xl">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
