"use client";
import Button from "@/components/Button/Button";
import Link from "next/link";
import Login from "@/components/Login";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Register from "@/components/Register";
import Image from "next/image";

export default function Navbar() {
  const [isShowing, setIsShowing] = useState(false);
  const [isShowing1, setIsShowing1] = useState(false);
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0  z-[5500] w-full  bg-fourth shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full  lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-white"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="javascript:void(0)"
            >
              <Image
                alt="logo"
                src="/logo.png"
                width={12}
                height={12}
                className="h-12 w-12"
              />
              Utopiara
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] text-sm w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-primary px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <Link
                  href="/#home"
                  className="flex items-center  py-4 hover:text-secondary lg:px-8"
                >
                  HOME
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  href="/market"
                  className="flex items-center  py-4 hover:text-secondary lg:px-8"
                >
                  MARKET
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  href="/map"
                  className="flex items-center  py-4 hover:text-secondary lg:px-8"
                >
                  MAP
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  href="/#top"
                  className="flex items-center  py-4 hover:text-secondary lg:px-8"
                >
                  TOP
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  href="/faq"
                  className="flex items-center  py-4 hover:text-secondary lg:px-8"
                >
                  FAQ
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  href="/contact"
                  className="flex items-center  py-4 hover:text-secondary lg:px-8"
                >
                  CONTACT
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  href="/#about"
                  className="flex items-center  py-4 hover:text-secondary lg:px-8"
                >
                  ABOUT
                </Link>
              </li>
            </ul>
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              <Button
                onClick={() => setIsShowing(true)}
                className="box max-lg:hidden"
              />
            </div>
          </nav>
        </div>
      </header>
      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <Login
              setIsShowing={setIsShowing}
              setIsShowing1={setIsShowing1}
              isShowing={isShowing}
            />,
            document.body
          )
        : null}
      {isShowing1 && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <Register
              isShowing={isShowing1}
              setIsShowing={setIsShowing1}
              setIsShowing1={setIsShowing}
            />,
            document.body
          )
        : null}
    </>
  );
}
