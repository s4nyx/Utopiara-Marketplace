import Glide from "@glidejs/glide";
import React, { useEffect } from "react";

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
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-04 relative mt-16 w-full">
        {/*    <!-- Slides --> */}
        <div className=" overflow-y-visible" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full  overflow-y-visible p-0">
            {images.map((image: string, index: number) => (
              // eslint-disable-next-line react/jsx-key
              <li
                key={index}
                className="group flex flex-col items-center justify-between"
              >
                <img
                  src={image}
                  className="m-auto w-full max-w-full select-none border-[1px] border-secondary object-cover duration-700 group-hover:scale-125 group-hover:border-[1px]  max-lg:h-[200px] lg:h-[450px]"
                />
                {/* <Button className="box  mt-20 opacity-0 duration-700 group-hover:block group-hover:opacity-100" /> */}
              </li>
            ))}
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="lg:animate-top mt-20 flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-secondary text-slate-700 transition duration-300 hover:border-slate-900 hover:text-white focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-4xl "
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>

          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-secondary text-slate-700 transition duration-300 hover:border-slate-900 hover:text-white focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
          <span className="  z-10 text-white opacity-100 max-lg:text-xl lg:text-[36px]">
            BIO-CODE &ldquo;BESTIA&rdquo;
          </span>
        </div>
      </div>
      {/*<!-- End Carousel with controls outside --> */}
    </>
  );
}
