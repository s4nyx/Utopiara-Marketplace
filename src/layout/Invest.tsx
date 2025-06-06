"use client";

import Image from "next/image";
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Sample NFT image - you can replace this with your own image
const nftImage = "/images/1.webp";

export default function Invest() {
  const component = useScrollAnimation(".animate-invest");
  const titleComponent = useScrollAnimation(".animate-title", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
  });
  const imageComponent = useScrollAnimation(".animate-image", {
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });
  const leftStepsComponent = useScrollAnimation(".animate-step-left", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  });
  const rightStepsComponent = useScrollAnimation(".animate-step-right", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  });

  return (
    <div
      className="relative min-h-screen w-full bg-primary py-16 text-white"
      ref={component}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-primary opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        {/* Title */}
        <h1
          className="animate-title mb-12 text-center text-4xl font-bold tracking-wide max-lg:text-2xl lg:text-5xl"
          ref={titleComponent}
        >
          <span className="text-secondary">HOW IT</span> WORKS:
        </h1>

        {/* Grid Layout: Steps on Left/Right, Image in Center */}
        <div className="flex flex-col   md:grid-cols-3">
          {/* Left Side Steps */}
          <div
            className="flex max-lg:flex-col max-lg:space-y-4 lg:flex-row"
            ref={leftStepsComponent}
          >
            {/* Step 1 */}
            <div className="lg:animate-step-left relative flex h-[200px] items-start gap-4 border-b-[1px] border-l-[1px] border-dashed border-secondary">
              <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-secondary bg-primary p-2 text-xl font-bold text-secondary">
                <div className="w-full rounded-full bg-secondary text-center text-primary">
                  1
                </div>
              </div>
              <div className="ml-12 w-1/2">
                <h3 className="max-lg:xs font-semibold lg:text-xl">
                  CHOOSE A WALLET
                </h3>
                <p className="mt-2 text-gray-300 max-lg:text-sm lg:text-sm">
                  Select and set up a cryptocurrency wallet that supports the
                  blockchain on which the NFTs are issued.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="lg:animate-step-left relative flex h-[200px] items-start gap-4 border-b-[1px] border-l-[1px] border-dashed border-secondary">
              <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-secondary bg-primary p-2 text-xl font-bold text-secondary">
                <div className="w-full rounded-full bg-secondary text-center text-primary">
                  2
                </div>
              </div>
              <div className="ml-12 w-1/2">
                <h3 className="max-lg:xs font-semibold lg:text-xl">
                  CHOOSE A WALLET
                </h3>
                <p className="mt-2 text-gray-300 max-lg:text-sm lg:text-sm">
                  Select and set up a cryptocurrency wallet that supports the
                  blockchain on which the NFTs are issued.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="lg:animate-step-left relative flex h-[200px] items-start gap-4 border-b-[1px] border-l-[1px] border-dashed border-secondary">
              <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-secondary bg-primary p-2 text-xl font-bold text-secondary">
                <div className="w-full rounded-full bg-secondary text-center text-primary">
                  3
                </div>
              </div>
              <div className="ml-12 w-1/2">
                <h3 className="max-lg:xs font-semibold lg:text-xl">
                  CHOOSE A WALLET
                </h3>
                <p className="mt-2 text-gray-300 max-lg:text-sm lg:text-sm">
                  Select and set up a cryptocurrency wallet that supports the
                  blockchain on which the NFTs are issued.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 border-r-[1px] border-dashed border-secondary pt-[32px]">
            {/* Center Image */}
            <div
              className="relative flex flex-row justify-end"
              ref={imageComponent}
            >
              <div className="animate-image absolute -left-28 h-[200px] w-2/3 basis-2/3 max-lg:hidden">
                <Image
                  src={nftImage}
                  alt="NFT Example"
                  layout="fill"
                  objectFit="cover"
                  className="absolute rounded-lg shadow-lg "
                />
              </div>

              {/* Step 4 */}
              <div className="lg:animate-step-left relative flex h-[200px] items-start gap-4 border-b-[1px] border-l-[1px] border-dashed border-secondary lg:basis-1/3">
                <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-secondary bg-primary p-2 text-xl font-bold text-secondary">
                  <div className="w-full rounded-full bg-secondary text-center text-primary">
                    4
                  </div>
                </div>
                <div className="ml-12 w-1/2">
                  <h3 className="max-lg:xs font-semibold lg:text-xl">
                    CHOOSE A WALLET
                  </h3>
                  <p className="mt-2 text-gray-300 max-lg:text-sm lg:text-sm">
                    Select and set up a cryptocurrency wallet that supports the
                    blockchain on which the NFTs are issued.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Steps */}
            <div
              className="flex max-lg:flex-col max-lg:space-y-4 lg:flex-row"
              ref={rightStepsComponent}
            >
              {/* Step 5 */}
              <div className="lg:animate-step-left relative flex h-[200px] items-start gap-4 border-b-[1px] border-l-[1px] border-dashed border-secondary">
                <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-secondary bg-primary p-2 text-xl font-bold text-secondary">
                  <div className="w-full rounded-full bg-secondary text-center text-primary">
                    5
                  </div>
                </div>
                <div className="ml-12 w-1/2">
                  <h3 className="max-lg:xs font-semibold lg:text-xl">
                    CHOOSE A WALLET
                  </h3>
                  <p className="mt-2 text-gray-300 max-lg:text-sm lg:text-sm">
                    Select and set up a cryptocurrency wallet that supports the
                    blockchain on which the NFTs are issued.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="lg:animate-step-left relative flex h-[200px] items-start gap-4 border-b-[1px] border-l-[1px] border-dashed border-secondary">
                <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-secondary bg-primary p-2 text-xl font-bold text-secondary">
                  <div className="w-full rounded-full bg-secondary text-center text-primary">
                    6
                  </div>
                </div>
                <div className="ml-12 w-1/2">
                  <h3 className="max-lg:xs font-semibold lg:text-xl">
                    CHOOSE A WALLET
                  </h3>
                  <p className="mt-2 text-gray-300 max-lg:text-sm lg:text-sm">
                    Select and set up a cryptocurrency wallet that supports the
                    blockchain on which the NFTs are issued.
                  </p>
                </div>
              </div>

              {/* Step 7 */}
              <div className="lg:animate-step-left relative flex h-[200px] items-start gap-4 border-b-[1px] border-l-[1px] border-dashed border-secondary">
                <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-secondary bg-primary p-2 text-xl font-bold text-secondary">
                  <div className="w-full rounded-full bg-secondary text-center text-primary">
                    7
                  </div>
                </div>
                <div className="ml-12 w-1/2">
                  <h3 className="max-lg:xs font-semibold lg:text-xl">
                    CHOOSE A WALLET
                  </h3>
                  <p className="mt-2 text-gray-300 max-lg:text-sm lg:text-sm">
                    Select and set up a cryptocurrency wallet that supports the
                    blockchain on which the NFTs are issued.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
