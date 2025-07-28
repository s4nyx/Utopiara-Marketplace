"use client";
import { CommunityIcon } from "@/components/svgs/CommunityIcon";
import { NoteIcon } from "@/components/svgs/NoteIcon";
import { PCIcon } from "@/components/svgs/PCIcon";
import { PlusIcon } from "@/components/svgs/PlusIcon";
import { TipIcon } from "@/components/svgs/TipIcon";
import Image from "next/image";

export default function faq() {
  return (
    <>
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
              <TipIcon classname="h-6 w-6 shrink-0 stroke-secondary" />
              How do I use Wind UI components?
              <PlusIcon classname="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45" />
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
              <CommunityIcon className="h-6 w-6 shrink-0 stroke-secondary " />
              What do you mean by accessible components?
              <PlusIcon classname="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45" />
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
              <PCIcon classname="h-6 w-6 shrink-0 stroke-secondary " />
              What do you mean about fully responsive?
              <PlusIcon classname="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45" />
            </summary>
            <p className="mt-4 text-zinc-400">
              Every component is fully responsive and implemented to look great
              at any screen size.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <NoteIcon classname="h-6 w-6 shrink-0 stroke-secondary " />
              Which version of TailwindCSS are you using for the components?
              <PlusIcon classname="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45" />
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <NoteIcon classname="h-6 w-6 shrink-0 stroke-secondary " />
              Which version of TailwindCSS are you using for the components?
              <PlusIcon classname="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45" />
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <NoteIcon classname="h-6 w-6 shrink-0 stroke-secondary " />
              Which version of TailwindCSS are you using for the components?
              <PlusIcon classname="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45" />
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <NoteIcon classname="h-6 w-6 shrink-0 stroke-secondary " />
              Which version of TailwindCSS are you using for the components?
              <PlusIcon classname="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45" />
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <NoteIcon classname="h-6 w-6 shrink-0 stroke-secondary " />
              Which version of TailwindCSS are you using for the components?
              <PlusIcon classname="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45" />
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <NoteIcon classname="h-6 w-6 shrink-0 stroke-secondary " />
              Which version of TailwindCSS are you using for the components?
              <PlusIcon classname="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45" />
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <NoteIcon classname="h-6 w-6 shrink-0 stroke-secondary " />
              Which version of TailwindCSS are you using for the components?
              <PlusIcon classname="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45" />
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <NoteIcon classname="h-6 w-6 shrink-0 stroke-secondary " />
              Which version of TailwindCSS are you using for the components?
              <PlusIcon classname="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45" />
            </summary>
            <p className="mt-4 text-zinc-400">
              Our team has used the currently latest TailwindCSS version. The
              code is used in its original form without any customization or
              third party dependencies.
            </p>
          </details>
          <details className="group p-4">
            <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
              <NoteIcon classname="h-6 w-6 shrink-0 stroke-secondary " />
              Which version of TailwindCSS are you using for the components?
              <PlusIcon classname="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45" />
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
