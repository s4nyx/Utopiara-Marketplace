"use client";
import GetStartedBtn from "@/components/GetStartedBtn/GetStartedBtn";
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HomePage() {
  const component = useScrollAnimation(".animate-home");

  return (
    <section
      id="home"
      className="relative h-[100vh] w-full bg-primary "
      ref={component}
    >
      <div className="absolute right-0 h-screen scale-x-[-1] bg-[url('/images/background.webp')] bg-cover bg-center max-lg:w-full lg:w-[70%] " />
      <div className="absolute right-0 h-screen bg-gradient-to-r from-[#000000] via-transparent to-[#0d1b25c2] max-lg:w-full lg:w-[71%] z-10" />
      <div className="absolute left-8 top-20 h-40 w-40 border-2 border-fourth max-lg:hidden"></div>
      <div className="absolute left-24 top-36 h-32 w-32 border-2 border-fourth max-lg:hidden"></div>
      <div className="absolute left-32 top-16 h-32 w-32 border-2 border-fourth max-lg:hidden"></div>

      {/* <div className="absolute top-0 h-screen w-full bg-gradient-to-b from-[#112331] via-transparent to-[#112331]"></div> */}
      <div className="z-30 mx-auto w-[95%] pt-80 text-white">
        <div className="animate-home rounded-[32px] bg-opacity-70 bg-none max-lg:w-[70%] max-lg:p-4 lg:w-[35%] lg:p-12">
          <h1 className="text-2xl max-lg:text-xs">
            Your guide to the NFT world!
          </h1>
          <h5 className="text-7xl font-bold lg:my-4">
            <span className="text-secondary max-lg:text-3xl">UTOPIARA</span>
          </h5>
          <GetStartedBtn />
        </div>
      </div>
    </section>
  );
}
