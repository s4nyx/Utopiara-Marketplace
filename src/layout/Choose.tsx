"use client";
import React from "react";

export default function Choose() {
  const features = [
    {
      title: "INVESTMENT OPPORTUNITIES",
      description:
        "Explore a vast and diverse range of NFT collections, from digital art and music to virtual real estate and in-game assets. Our marketplace offers something for every collector.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12 text-secondary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.171-.879-1.171-2.303 0-3.182C10.536 7.719 11.768 7.5 12 7.5c.725 0 1.45.22 2.003.659"
          />
        </svg>
      ),
    },
    {
      title: "SECURE TRANSACTIONS",
      description:
        "Experience peace of mind with our robust security measures. Every transaction is protected by advanced encryption and blockchain technology, ensuring safe and transparent trading.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12 text-secondary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0 1 12 2.714Z"
          />
        </svg>
      ),
    },
    {
      title: "COMMUNITY DRIVEN",
      description:
        "Join a vibrant community of creators, collectors, and enthusiasts. Engage in discussions, participate in exclusive events, and shape the future of digital collectibles together.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12 text-secondary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      ),
    },
    {
      title: "INNOVATIVE PLATFORM",
      description:
        "Stay ahead with our cutting-edge features and tools. From seamless minting to advanced trading options, we provide everything you need to thrive in the NFT ecosystem.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12 text-secondary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen w-full py-24 bg-cover bg-center bg-[url('/webp/background/back.webp')] bg-opacity-70">
      <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-primary via-transparent to-[#0d1b2500]" />
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-primary via-transparent to-[#0d1b2500]" />
      <div className="absolute inset-0 bg-primary/95"></div>
      <div className="relative z-10 mx-auto flex w-[90%] max-w-7xl gap-4 max-lg:flex-col lg:w-[80%] lg:flex-row">
        <div className="mb-16 max-w-xl">
          <h1 className=" font-bold text-white max-lg:text-[36px] lg:text-5xl">
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
