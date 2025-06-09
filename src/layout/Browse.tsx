import GetStartedBtn from "@/components/GetStartedBtn/GetStartedBtn";
import React from "react";

export default function Browse() {
  const partners = [
    {
      name: "Binance",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-12 w-12 transform transition-all duration-300 group-hover:scale-110 lg:h-16 lg:w-16"
          focusable="false"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.11687 10.4039L12.001 6.51981L15.8884 10.4073L18.1483 8.14735L12.001 2L5.85696 8.14402L8.11687 10.4039ZM2 12.0007L4.25932 9.74138L6.51863 12.0007L4.25932 14.26L2 12.0007ZM12.001 17.4832L8.11684 13.5991L5.85361 15.8557L5.85694 15.859L12.001 22.003L18.1483 15.8557L15.8884 13.5958L12.001 17.4832ZM17.4814 12.0023L19.7407 9.74297L22 12.0023L19.7407 14.2616L17.4814 12.0023ZM12.001 9.70831L14.2942 12.0015L12.001 14.298L9.70779 12.0048V11.9982L10.1105 11.5955L10.3069 11.4024L12.001 9.70831Z"
            className="fill-[#F3BA2F]"
          />
        </svg>
      ),
      hoverColor: "group-hover:text-[#F0B90B]",
    },
    {
      name: "CoinDesk",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-12 w-12 transform transition-all duration-300 group-hover:scale-110 lg:h-16 lg:w-16"
          focusable="false"
          aria-hidden="true"
        >
          <rect height="24" width="24" rx="8" className="fill-[#F8BF1E]" />
          <path
            d="M11.9987 12.6244C12.353 12.6244 12.6401 12.3382 12.6401 11.9852C12.6401 11.6322 12.353 11.3461 11.9987 11.3461C11.6445 11.3461 11.3573 11.6322 11.3573 11.9852C11.3573 12.3382 11.6445 12.6244 11.9987 12.6244Z"
            fill="white"
          />
          <path
            d="M17.1134 12.6244C17.4676 12.6244 17.7548 12.3382 17.7548 11.9852C17.7548 11.6322 17.4676 11.3461 17.1134 11.3461C16.7591 11.3461 16.472 11.6322 16.472 11.9852C16.472 12.3382 16.7591 12.6244 17.1134 12.6244Z"
            fill="white"
          />
          <path
            d="M17.1134 17.7292C17.4676 17.7292 17.7548 17.4431 17.7548 17.0901C17.7548 16.7371 17.4676 16.4509 17.1134 16.4509C16.7591 16.4509 16.472 16.7371 16.472 17.0901C16.472 17.4431 16.7591 17.7292 17.1134 17.7292Z"
            fill="white"
          />
          <path
            d="M18.9954 6.76266C18.9279 5.82915 18.1767 5.07226 17.2399 5.00498C16.6407 4.96293 16.1005 5.19 15.7207 5.57686C15.4338 5.8712 15.0455 6.04781 14.632 6.04781H14.48C14.0581 6.04781 13.6614 5.8712 13.366 5.56845C13.0199 5.21523 12.5389 5.00498 12.0071 5.00498C11.4754 5.00498 10.9943 5.22364 10.6483 5.56845C10.3529 5.8712 9.95624 6.04781 9.53423 6.04781H9.39075C8.97721 6.04781 8.58052 5.88802 8.29356 5.59368C8.23449 5.53481 8.1754 5.47594 8.11632 5.42548C7.39894 4.84519 6.34394 4.86201 5.65186 5.47594C4.81631 6.2076 4.78255 7.48592 5.55902 8.25962C5.56746 8.26803 5.5759 8.27644 5.58434 8.28485C5.88818 8.57079 6.04854 8.97448 6.04854 9.38656V9.52953C6.04854 9.95003 5.8713 10.3453 5.56746 10.6396C5.21299 10.9845 5.00199 11.4638 5.00199 11.9936C5.00199 12.5235 5.22143 13.0028 5.56746 13.3476C5.8713 13.642 6.04854 14.0373 6.04854 14.4578V14.6512C6.04854 15.0633 5.8713 15.4501 5.5759 15.7361C5.20455 16.0977 4.97667 16.6107 5.00199 17.1742C5.04419 18.1665 5.85442 18.9655 6.84189 18.9991C7.41582 19.0159 7.93065 18.7889 8.29356 18.4104C8.58052 18.1161 8.96875 17.9311 9.38231 17.9311H9.54267C9.95624 17.9311 10.3445 18.1077 10.6314 18.4104C11.0112 18.8057 11.5598 19.0328 12.1591 18.9907C13.0959 18.9234 13.8555 18.1665 13.923 17.2246C13.999 16.1061 13.1212 15.181 12.0156 15.181C11.4923 15.181 11.0112 15.3912 10.6652 15.7361C10.3698 16.0304 9.97312 16.207 9.55955 16.207H9.38231C8.96875 16.207 8.56364 16.0472 8.26824 15.7445C8.2598 15.7361 8.2598 15.7361 8.25136 15.7277C7.94753 15.4333 7.77029 15.038 7.77029 14.6175V14.4493C7.77029 14.0288 7.94753 13.6336 8.25136 13.3392C8.60584 12.9944 8.81685 12.5151 8.81685 11.9852C8.81685 11.4554 8.5974 10.976 8.25136 10.6312C7.94753 10.3369 7.77029 9.94162 7.77029 9.52112V9.36974C7.77029 8.94925 7.94753 8.55397 8.24293 8.25962C8.25137 8.25123 8.25137 8.25123 8.2598 8.24281C8.26824 8.2344 8.26824 8.2344 8.27668 8.22599C8.57208 7.93164 8.96875 7.75503 9.39075 7.75503H9.54267C9.96468 7.75503 10.3613 7.93164 10.6567 8.2344C11.0028 8.58761 11.4839 8.79787 12.0156 8.79787C12.5473 8.79787 13.0284 8.5792 13.3744 8.2344C13.6698 7.93164 14.0665 7.75503 14.4885 7.75503H14.6235C15.0455 7.75503 15.4422 7.93164 15.7376 8.2344C16.0836 8.58761 16.5647 8.79787 17.0964 8.79787C18.1936 8.80628 19.0714 7.88118 18.9954 6.76266Z"
            fill="white"
          />
        </svg>
      ),
      hoverColor: "group-hover:text-[#0A99DA]",
    },
    {
      name: "Huobi",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-12 w-12 transform transition-all duration-300 group-hover:scale-110 lg:h-16 lg:w-16"
          focusable="false"
          aria-hidden="true"
        >
          <rect height="24" width="24" rx="8" fill="white" />
          <g clipPath="url(#HuobiGlobalBadge_a)">
            <path
              d="M13.5001 8.52126C13.5001 6.22545 12.3934 4.24753 11.5457 3.59999C11.5457 3.59999 11.4868 3.56467 11.4868 3.65886C11.4162 8.09742 9.16746 9.31007 7.91949 10.923C5.05856 14.667 7.71934 18.7641 10.4272 19.5176C11.946 19.9414 10.074 18.7641 9.83854 16.2917C9.55598 13.2895 13.5001 11.0054 13.5001 8.52126"
              className="fill-[#282E5B]"
            />
            <path
              d="M14.9835 10.04C14.9718 10.0282 14.9482 10.0282 14.9247 10.04C14.9247 10.04 14.9247 10.04 14.9129 10.0517C14.8658 10.6051 14.2536 11.806 13.4883 12.9009C10.8864 16.6213 12.3698 18.4108 13.2057 19.3762C13.6885 19.9414 13.2057 19.3762 14.4184 18.7993C14.5126 18.7522 16.7731 17.5514 17.0203 14.8317C17.2676 12.1827 15.584 10.5227 14.9835 10.04"
              className="fill-[#059BDC]"
            />
          </g>
          <defs>
            <clipPath id="HuobiGlobalBadge_a">
              <rect
                width="10.3606"
                height="16"
                fill="white"
                transform="translate(6.69507 3.59998)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      hoverColor: "group-hover:text-[#2FB822]",
    },
    {
      name: "Tron",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-12 w-12 transform transition-all duration-300 group-hover:scale-110 lg:h-16 lg:w-16"
          focusable="false"
          aria-hidden="true"
        >
          <rect height="24" width="24" rx="8" className="fill-[#EF0027]" />
          <path
            d="M16.274 7.64202L5.45001 5.65002L11.1463 19.984L19.0835 10.3135L16.274 7.64202ZM16.1 8.51952L17.756 10.0938L13.2275 10.9135L16.1 8.51952V8.51952ZM12.2435 10.7493L7.47051 6.79077L15.272 8.22627L12.2435 10.7493V10.7493ZM11.9038 11.4498L11.1253 17.8848L6.92901 7.32252L11.9038 11.449V11.4498ZM12.6238 11.791L17.639 10.8835L11.8865 17.8908L12.6238 11.791Z"
            fill="white"
          />
        </svg>
      ),
      hoverColor: "group-hover:text-[#FF4C3B]",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center py-24">
      <div className="absolute left-8 top-20 h-40 w-40 border-2 border-fourth"></div>
      <div className="absolute left-24 top-36 h-32 w-32 border-2 border-fourth"></div>
      <div className="absolute left-32 top-16 h-32 w-32 border-2 border-fourth"></div>

      <div className="absolute left-1/2 top-20 h-60 w-60 border-2 border-fourth"></div>
      <div className="absolute left-[56%] top-48 h-48 w-48 border-2 border-fourth"></div>
      <div className="absolute left-[59%] top-16 h-48 w-48 border-2 border-fourth"></div>

      <div className="absolute bottom-20 left-48 h-40 w-40 border-2 border-fourth"></div>
      <div className="absolute bottom-36 left-64 h-32 w-32 border-2 border-fourth"></div>
      <div className="absolute bottom-16 left-72 h-32 w-32 border-2 border-fourth"></div>

      <div className="absolute right-8 top-24 h-40 w-40 border-2 border-fourth"></div>
      <div className="absolute right-24 top-40 h-32 w-32 border-2 border-fourth"></div>
      <div className="absolute right-32 top-20 h-32 w-32 border-2 border-fourth"></div>

      <div className="absolute bottom-24 right-20 h-52 w-52 border-2 border-fourth"></div>
      <div className="absolute bottom-40 right-36 h-44 w-44 border-2 border-fourth"></div>
      <div className="absolute bottom-20 right-44 h-44 w-44 border-2 border-fourth"></div>

      <div className="absolute inset-0 -z-10 bg-primary"></div>
      <div className="z-10 mb-16 max-w-2xl text-center">
        <h1 className="font-bold text-white max-lg:text-2xl md:text-6xl lg:text-5xl">
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
      {/* Partners Section */}
      <div className="w-full py-8">
        <h2 className="lg:animate-partner mb-12 text-center font-bold text-white max-lg:text-2xl lg:text-[40px]">
          OUR <span className="text-secondary">PARTNERS</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="animate-partner-logo group flex cursor-pointer flex-row items-center gap-4 rounded-xl bg-[#061623]/50 p-6 transition-all duration-300 hover:bg-[#092a42]/50 hover:shadow-lg hover:shadow-secondary/10 lg:flex-col lg:py-8"
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
