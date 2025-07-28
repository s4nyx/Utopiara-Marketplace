"use client";
import { CommunityIcon } from "@/components/svgs/CommunityIcon";
import { DollarIcon } from "@/components/svgs/DollarIcon";
import { LightIcon } from "@/components/svgs/LightIcon";
import { Secure } from "@/components/svgs/Secure";
import React from "react";

export default function Choose() {
  const features = [
    {
      title: "INVESTMENT OPPORTUNITIES",
      description:
        "Explore a vast and diverse range of NFT collections, from digital art and music to virtual real estate and in-game assets. Our marketplace offers something for every collector.",
      icon: <DollarIcon classname="size-12 text-secondary" />,
    },
    {
      title: "SECURE TRANSACTIONS",
      description:
        "Experience peace of mind with our robust security measures. Every transaction is protected by advanced encryption and blockchain technology, ensuring safe and transparent trading.",
      icon: <Secure classname="size-12 text-secondary" />,
    },
    {
      title: "COMMUNITY DRIVEN",
      description:
        "Join a vibrant community of creators, collectors, and enthusiasts. Engage in discussions, participate in exclusive events, and shape the future of digital collectibles together.",
      icon: <CommunityIcon className="size-12 text-secondary" />,
    },
    {
      title: "INNOVATIVE PLATFORM",
      description:
        "Stay ahead with our cutting-edge features and tools. From seamless minting to advanced trading options, we provide everything you need to thrive in the NFT ecosystem.",
      icon: <LightIcon classname="size-12 text-secondary" />,
    },
  ];

  return (
    <div className="relative min-h-screen w-full py-24 bg-cover bg-center bg-[url('/webp/background/back.webp')] bg-opacity-70">
      <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-primary via-transparent to-[#0d1b2500]" />
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-primary via-transparent to-[#0d1b2500]" />
      <div className="absolute inset-0 bg-primary/95"></div>
      <div className="relative z-10 mx-auto flex w-[90%] max-w-7xl gap-4 max-lg:flex-col lg:w-[80%] lg:flex-row">
        <div className="mb-16 max-w-xl max-lg:text-center">
          <h1 className=" font-bold  text-white max-lg:text-[36px] lg:text-5xl">
            WHY
            <br />
            <span className="text-secondary">CHOOSE US</span>
          </h1>
          <p className="mt-6 text-base text-white/80 max-lg:text-sm lg:text-lg">
            Choose us as your NFT marketplace and embark on an exciting journey
            into the world of digital collectibles, where creativity, security,
            and opportunity converge.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-between rounded-xl bg-gradient-to-r from-[#061623] to-[#092a42] p-8 transition-all duration-300 hover:from-[#092a42] hover:to-[#0d3655] hover:shadow-lg hover:shadow-secondary/10"
            >
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h2 className="mb-4 text-center text-xl font-bold text-secondary">
                {feature.title}
              </h2>
              <p className="text-center text-sm leading-relaxed text-white/80 md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
