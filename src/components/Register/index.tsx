"use client";
import Checkbox from "../Checkbox";
import React, { useEffect, useRef } from "react";

interface RegisterProps {
  isShowing: boolean;
  setIsShowing: (value: boolean) => void;
  setIsShowing1: (value: boolean) => void;
}

export default function Register({
  isShowing,
  setIsShowing,
  setIsShowing1,
}: RegisterProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsShowing(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, setIsShowing]);

  useEffect(() => {
    const html = document.querySelector("html");

    if (html) {
      if (isShowing) {
        html.style.overflowY = "hidden";

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const modal = document.querySelector("#modal");

        if (!modal) return;

        const firstFocusableElement = modal.querySelectorAll(
          focusableElements
        )[0] as HTMLElement;
        const focusableContent = modal.querySelectorAll(focusableElements);
        const lastFocusableElement = focusableContent[
          focusableContent.length - 1
        ] as HTMLElement;

        if (!firstFocusableElement || !lastFocusableElement) return;

        document.addEventListener("keydown", function (e: KeyboardEvent) {
          if (e.keyCode === 27) {
            setIsShowing(false);
          }

          const isTabPressed = e.key === "Tab" || e.keyCode === 9;

          if (!isTabPressed) {
            return;
          }

          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus();
              e.preventDefault();
            }
          }
        });

        firstFocusableElement.focus();
      } else {
        html.style.overflowY = "visible";
      }
    }
  }, [isShowing, setIsShowing]);

  return (
    <div
      className="fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-lg"
      aria-labelledby="header-4a content-4a"
      aria-modal="true"
      tabIndex={-1}
      role="dialog"
    >
      {/*    <!-- Modal --> */}
      <div
        ref={wrapperRef}
        className="flex h-[60vh] w-[30vw] flex-col gap-4 overflow-hidden rounded border-[1px] border-white bg-primary p-6 pb-4 pt-10 text-white shadow-xl shadow-slate-700/10"
        id="modal"
        role="document"
      >
        {/*        <!-- Modal header --> */}
        <header id="header-4a" className="flex items-start justify-between">
          <h3 className="mb-10 flex-1 text-2xl font-medium text-white">
            Welcome back!
          </h3>
          <button
            onClick={() => setIsShowing(false)}
            className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-secondary transition duration-300 hover:bg-none hover:text-secondary focus:bg-none focus:text-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:text-secondary disabled:shadow-none disabled:hover:bg-transparent"
            aria-label="close dialog"
          >
            <span className="relative only:-mx-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                role="graphics-symbol"
                aria-labelledby="title-79 desc-79"
              >
                <title id="title-79">Icon title</title>
                <desc id="desc-79">
                  A more detailed description of the icon
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </header>
        {/*        <!-- Modal body --> */}
        <div id="content-4a" className="flex-1">
          <div className="flex flex-col gap-6">
            {/*                <!-- Input field --> */}
            <div className="relative">
              <input
                id="id-b03"
                type="email"
                name="id-b03"
                placeholder="your name"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-white placeholder-transparent outline-none transition-all autofill:bg-primary invalid:border-pink-500 invalid:text-pink-500 focus:border-secondary focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-b03"
                className="absolute -top-2 left-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-none before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your email
              </label>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                <span>Type your email address</span>
              </small>
            </div>
            {/*                <!-- Input field --> */}
            <div className="relative my-6">
              <input
                id="id-b13"
                type="password"
                name="id-b13"
                placeholder="your password"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-white placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-secondary focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-b13"
                className="absolute -top-2 left-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-none before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your password
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                <span>Type your password</span>
              </small>
            </div>
            <div className="relative my-6">
              <input
                id="id-b13"
                type="password"
                name="id-b13"
                placeholder="your password"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-white placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-secondary focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-b13"
                className="absolute -top-2 left-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-none before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your password
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                <span>Confirm your password</span>
              </small>
            </div>
            <Checkbox />
          </div>
        </div>
        {/*        <!-- Modal actions --> */}
        <div className="flex justify-center gap-2">
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-secondary px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-secondary focus:bg-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:border-secondary disabled:bg-secondary disabled:shadow-none">
            <span>Sign Up</span>
          </button>
        </div>
        <div
          className="w-full cursor-pointer text-center text-sm hover:text-secondary"
          onClick={() => {
            setIsShowing1(true);
            setIsShowing(false);
          }}
        >
          Sign In
        </div>
      </div>
    </div>
  );
}
