"use client";
import Image from "next/image";
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const component = useScrollAnimation(".animate-about");
  const imagesComponent = useScrollAnimation(".animate-image", {
    y: 100,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
  });

  return (
    <section id="about" className="relative h-screen w-full" ref={component}>
      <div className="absolute inset-0 bg-primary "></div>
      <div className="relative z-10 mx-auto flex w-[80%] flex-row items-center justify-between text-white">
        <div className="lg:animate-about basis-[30%] max-lg:mt-12 lg:mt-80">
          <h1 className="text-[36px]">
            ABOUT <br></br>
            <span className="ml-16 text-secondary">PROJECT</span>
          </h1>
          <p className="ml-16 text-[16px]">
            Design project for the NFT marketplace is dedicated to creating a
            visually stunning, user-centric platform that serves as a gateway to
            the exciting world of non-fungible tokens(NFT).
          </p>
          <h1 className="ml-16 mt-8 text-[24px] text-secondary">TASK</h1>
          <p className="ml-16 mt-4 text-[16px]">
            Design project for the NFT marketplace is dedicated to creating a
            visually stunning, user-centric platform that serves as a gateway to
            the exciting world of non-fungible tokens(NFT).
          </p>
        </div>
        <div
          className="mt-80 flex basis-[70%] flex-row items-center justify-between space-x-2 max-lg:hidden"
          // ref={imagesComponent}
        >
          <Image
            src="/images/1.webp"
            alt="building1"
            width={160}
            height={300}
            className="animate-image z-0 scale-[200%] border border-cyan-200 object-cover outline-2  transition-all duration-700 [clip-path:inset(0_25%_0_25%)] hover:z-10 hover:blur-none hover:[clip-path:inset(0_0_0_0)]"
          />
          <Image
            src="/images/2.webp"
            alt="building1"
            width={160}
            height={300}
            className="animate-image z-0 mb-72 scale-[200%] border border-cyan-200 object-cover outline-2  transition-all duration-700 [clip-path:inset(0_25%_0_25%)] hover:z-10 hover:blur-none hover:[clip-path:inset(0_0_0_0)]"
          />
          <Image
            src="/images/6.webp"
            alt="building1"
            width={160}
            height={300}
            className="animate-image z-0 mb-40 scale-[200%] border border-cyan-200 object-cover outline-2  transition-all duration-700 [clip-path:inset(0_25%_0_25%)] hover:z-10 hover:blur-none hover:[clip-path:inset(0_0_0_0)]"
          />
          <Image
            src="/images/4.webp"
            alt="building1"
            width={160}
            height={300}
            className="animate-image z-0 mb-80 scale-[200%] border border-cyan-200 object-cover outline-2  transition-all duration-700 [clip-path:inset(0_25%_0_25%)] hover:z-10 hover:blur-none hover:[clip-path:inset(0_0_0_0)]"
          />
          <Image
            src="/images/3.webp"
            alt="building1"
            width={160}
            height={300}
            className="animate-image z-0 mb-36 scale-[200%] border border-cyan-200 object-cover outline-2  transition-all duration-700 [clip-path:inset(0_25%_0_25%)] hover:z-10 hover:blur-none hover:[clip-path:inset(0_0_0_0)]"
          />
          <Image
            src="/images/5.webp"
            alt="building1"
            width={160}
            height={300}
            className="animate-image z-0 mb-48 scale-[200%] border border-cyan-200 object-cover transition-all duration-700 [clip-path:inset(0_25%_0_25%)] hover:z-10 hover:blur-none hover:[clip-path:inset(0_0_0_0)]"
          />
        </div>
      </div>
    </section>
  );
}
