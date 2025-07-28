import Glide from "@glidejs/glide";
import React, { useEffect } from "react";
import { ArrowLeft } from "../svgs/ArrowLeft";
import { ArrowRight } from "../svgs/ArrowRight";

const images = [
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
  "/images/4.webp",
  "/images/5.webp",
  "/images/6.webp",
  "/images/3.webp",
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
  "/images/4.webp",
  "/images/5.webp",
];

export default function Carousel() {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 7,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,

      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 3,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="glide-04 max-w-screen relative mt-16 w-full">
        <div
          className=" overflow-y-visible max-lg:overflow-x-hidden"
          data-glide-el="track"
        >
          <ul className="whitespace-no-wrap  flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full  overflow-y-visible p-0">
            {images.map((image: string, index: number) => (
              <li
                key={index}
                className="group flex flex-col items-center justify-between"
              >
                <img
                  src={image}
                  className="m-auto w-full max-w-full select-none border-[1px] border-secondary object-cover duration-700 group-hover:scale-125 group-hover:border-[1px]  max-lg:h-[200px] lg:h-[450px]"
                />
              </li>
            ))}
          </ul>
        </div>
        <div
          className="lg:animate-top mt-20 flex w-full lg:flex-row max-lg:flex-col items-center justify-center lg:gap-2 max-lg:gap-8 p-4"
          data-glide-el="controls"
        >
          <div className="flex gap-2">
            <button
              className="inline-flex max-lg:h-12 max-lg:w-12 items-center justify-center rounded-full border border-slate-700 bg-secondary text-slate-700 transition duration-300 hover:border-slate-900 hover:text-white focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir="<"
              aria-label="prev slide"
            >
              <ArrowLeft classname="h-8 w-8 text-4xl " />
            </button>

            <button
              className="inline-flex max-lg:h-12 max-lg:w-12 items-center justify-center rounded-full border border-slate-700 bg-secondary text-slate-700 transition duration-300 hover:border-slate-900 hover:text-white focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir=">"
              aria-label="next slide"
            >
              <ArrowRight classname="h-8 w-8" />
            </button>
          </div>
          <span className="  z-10 text-white opacity-100 max-lg:text-xl lg:text-[36px]">
            BIO-CODE &ldquo;BESTIA&rdquo;
          </span>
        </div>
      </div>
    </>
  );
}
