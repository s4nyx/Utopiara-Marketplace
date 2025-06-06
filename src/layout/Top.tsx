"use client";

import Carousel from "@/components/Carousel";
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Top() {
  const component = useScrollAnimation(".animate-top");

  return (
    <section id="top" className="relative h-screen w-full" ref={component}>
      <div className="absolute inset-0 bg-primary "></div>
      <div className="relative z-10 mx-auto flex w-[70%] flex-col items-center justify-between text-white">
        <div className="animate-top mt-32 basis-[30%]">
          <h1 className="font-bold max-lg:text-2xl lg:text-[36px]">
            TOP
            <span className="ml-8 font-bold text-secondary">COLLECTIONS</span>
          </h1>
        </div>
      </div>
      <Carousel />
    </section>
  );
}
