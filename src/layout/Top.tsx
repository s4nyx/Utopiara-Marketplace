"use client";

import Carousel from "@/components/Carousel";
import React from "react";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Top() {
  // const component = useScrollAnimation(".animate-top");

  return (
    <section
      id="top"
      className="relative h-screen bg-cover bg-center bg-[url('/webp/background/back_2.webp')] bg-opacity-70 w-full"
    >
      <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-primary via-transparent to-[#0d1b2500]" />
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-primary via-transparent to-[#0d1b2500]" />
      <div className="absolute inset-0 bg-primary/95 "></div>
      <div className="relative z-10 mx-auto flex w-[70%] flex-col items-center justify-between text-white">
        <div className="animate-top mt-32 basis-[30%]">
          <h1 className="font-bold max-lg:text-[36px] text-center  lg:text-[40px]">
            TOP
            <br />
            <span className="ml-8 font-bold text-secondary">COLLECTIONS</span>
          </h1>
        </div>
      </div>
      <Carousel />
    </section>
  );
}
