"use client";
import GetStartedBtn from "@/components/GetStartedBtn/GetStartedBtn";
import React, { useLayoutEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import gsap from "gsap";

export default function HomePage() {
  const component = useScrollAnimation(".animate-home");
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
    <section
      id="home"
      className="relative h-[100vh] w-full bg-primary"
      ref={component}
    >
      <div className="absolute right-0 lg:h-screen max-lg:h-[90vh] max-lg:w-full lg:w-[70%] ">
        <Image
          alt="background_1"
          src="/images/background.png"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          blurDataURL="/images/background_blur.png"
          placeholder="blur"
          priority
        />
        <Image
          ref={app}
          alt="background_2"
          src="/images/background-1.png"
          className="opacity-0"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          blurDataURL="/images/background_blur.png"
          placeholder="blur"
          loading="eager"
        />
        {/* <Image
          alt="background"
          src="/images/background.webp"
          width={1000}
          height={1000}
          className="w-full h-screen"
        /> */}
      </div>
      <div className="absolute right-0 h-screen bg-gradient-to-r from-primary via-transparent to-[#0d1b25c2] max-lg:w-full lg:w-[71%] " />
      <div className="absolute right-0 h-screen bg-gradient-to-t from-primary via-transparent to-[#0d1b2500] max-lg:w-full lg:w-[71%] " />
      <div className="absolute left-8 top-20 h-40 w-40 border-2 border-[#061c33] max-lg:hidden"></div>
      <div className="absolute left-24 top-36 h-32 w-32 border-2 border-[#061c33] max-lg:hidden"></div>
      <div className="absolute left-32 top-16 h-32 w-32 border-2 border-[#061c33] max-lg:hidden"></div>

      <div className="absolute left-36 bottom-40 h-32 w-32 border-2 border-[#061c33] max-lg:hidden"></div>
      <div className="absolute left-52 bottom-56 h-24 w-24 border-2 border-[#061c33] max-lg:hidden"></div>
      <div className="absolute left-60 bottom-36 h-24 w-24 border-2 border-[#061c33] max-lg:hidden"></div>

      <div className="z-30 mx-auto w-[95%] absolute bottom-[20vh] text-white">
        <div className="animate-home rounded-[32px] bg-opacity-70 bg-none max-lg:w-[70%] max-lg:p-4 lg:w-[35%] lg:p-12">
          <h1 className="text-2xl max-lg:text-sm max-lg:mt-40">
            Your guide to the NFT world!
          </h1>
          <h5 className="text-7xl font-bold lg:my-4 max-lg:mb-4">
            <span className="text-secondary max-lg:text-4xl">UTOPIARA</span>
          </h5>
          <GetStartedBtn />
        </div>
      </div>
    </section>
  );
}
