"use client";
import Navbar from "@/layout/Navbar";
import Image from "next/image";
import React from "react";

export default function faq() {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex relative min-h-screen w-screen flex-col items-center justify-center bg-primary ">
        <Image
          alt="background"
          src="/webp/background/back_3.webp"
          width={1360}
          height={768}
          className="fixed top-0 left-0 w-full h-screen object-cover"
        />
        <div className="absolute left-0 top-0 w-full h-full bg-primary opacity-90"></div>
        <div className="mb-8 z-30 text-6xl text-white drop-shadow-[0_0_10px_rgba(1,234,249,0.8)]">
          FAQ
        </div>
        <section className="lg:w-1/2 z-30 max-lg:w-[90%] divide-y divide-slate-200 rounded bg-fourth">
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-secondary "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac05 desc-ac05"
              >
                <title id="title-ac05">Leading icon</title>
                <desc id="desc-ac05">Icon that describes the summary</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              How do I use Wind UI components?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac06 desc-ac06"
              >
                <title id="title-ac06">Open icon</title>
                <desc id="desc-ac06">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-zinc-400">
              All components can be copied and pasted and easily implemented in
              your tailwind css projects. You can choose which language you want
              to copy the desired component and just hover and click on the
              component you need and paste it on your project.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-secondary "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac07 desc-ac07"
              >
                <title id="title-ac07">Leading icon</title>
                <desc id="desc-ac07">Icon that describes the summary</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              What do you mean by accessible components?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac08 desc-ac08"
              >
                <title id="title-ac08">Open icon</title>
                <desc id="desc-ac08">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-zinc-400">
              All components come with proper attributes to ensure full
              accessibility with the WAI-ARIA standards. Web accessibility means
              that websites, tools, and technologies are designed and developed
              so that people with disabilities can use them.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-secondary "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac09 desc-ac09"
              >
                <title id="title-ac09">Leading icon</title>
                <desc id="desc-ac09">Icon that describes the summary</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
              What do you mean about fully responsive?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac10 desc-ac10"
              >
                <title id="title-ac10">Open icon</title>
                <desc id="desc-ac10">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-zinc-400">
              Every component is fully responsive and implemented to look great
              at any screen size.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-secondary "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac11 desc-ac11"
              >
                <title id="title-ac11">Leading icon</title>
                <desc id="desc-ac11">Icon that describes the summary</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Which version of TailwindCSS are you using for the components?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac12 desc-ac12"
              >
                <title id="title-ac12">Open icon</title>
                <desc id="desc-ac12">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-secondary "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac11 desc-ac11"
              >
                <title id="title-ac11">Leading icon</title>
                <desc id="desc-ac11">Icon that describes the summary</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Which version of TailwindCSS are you using for the components?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac12 desc-ac12"
              >
                <title id="title-ac12">Open icon</title>
                <desc id="desc-ac12">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-secondary "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac11 desc-ac11"
              >
                <title id="title-ac11">Leading icon</title>
                <desc id="desc-ac11">Icon that describes the summary</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Which version of TailwindCSS are you using for the components?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac12 desc-ac12"
              >
                <title id="title-ac12">Open icon</title>
                <desc id="desc-ac12">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-secondary "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac11 desc-ac11"
              >
                <title id="title-ac11">Leading icon</title>
                <desc id="desc-ac11">Icon that describes the summary</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Which version of TailwindCSS are you using for the components?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac12 desc-ac12"
              >
                <title id="title-ac12">Open icon</title>
                <desc id="desc-ac12">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-secondary "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac11 desc-ac11"
              >
                <title id="title-ac11">Leading icon</title>
                <desc id="desc-ac11">Icon that describes the summary</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Which version of TailwindCSS are you using for the components?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac12 desc-ac12"
              >
                <title id="title-ac12">Open icon</title>
                <desc id="desc-ac12">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-secondary "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac11 desc-ac11"
              >
                <title id="title-ac11">Leading icon</title>
                <desc id="desc-ac11">Icon that describes the summary</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Which version of TailwindCSS are you using for the components?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac12 desc-ac12"
              >
                <title id="title-ac12">Open icon</title>
                <desc id="desc-ac12">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-secondary "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac11 desc-ac11"
              >
                <title id="title-ac11">Leading icon</title>
                <desc id="desc-ac11">Icon that describes the summary</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Which version of TailwindCSS are you using for the components?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac12 desc-ac12"
              >
                <title id="title-ac12">Open icon</title>
                <desc id="desc-ac12">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-secondary "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac11 desc-ac11"
              >
                <title id="title-ac11">Leading icon</title>
                <desc id="desc-ac11">Icon that describes the summary</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Which version of TailwindCSS are you using for the components?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac12 desc-ac12"
              >
                <title id="title-ac12">Open icon</title>
                <desc id="desc-ac12">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-secondary "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac11 desc-ac11"
              >
                <title id="title-ac11">Leading icon</title>
                <desc id="desc-ac11">Icon that describes the summary</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Which version of TailwindCSS are you using for the components?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac12 desc-ac12"
              >
                <title id="title-ac12">Open icon</title>
                <desc id="desc-ac12">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
        </section>
      </div>
    </>
  );
}
