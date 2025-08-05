"use client";
import { forgotPassword, login } from "@/lib/api/auth";
// eslint-disable-next-line no-restricted-imports
import Checkbox from "../Checkbox";
import React, { useEffect, useRef, useState } from "react";
import { ReCaptchaProvider, ReCaptcha } from "next-recaptcha-v3";
import { ExitIcon } from "../svgs/ExitIcon";
import { EyeIcon } from "../svgs/EyeIcon";

interface LoginProps {
  isShowing: boolean;
  setIsShowing: (value: boolean) => void;
  setIsShowing1: (value: boolean) => void;
}

export default function Login({
  isShowing,
  setIsShowing,
  setIsShowing1,
}: LoginProps) {
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [token, setToken] = useState<string>("null");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isReset, setIsReset] = useState<boolean>(false);
  const [isForget, setIsForget] = useState<boolean>(false);
  const [forgetEmail, setForgetEmail] = useState<string>("");

  useEffect(() => {
    if (token) {
      //validate token
    }
  }, [token]);

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
  }, [isShowing]);

  const handleSubmit = async () => {
    const data = await login({ email, password: pwd });
    console.log("data", data);
    localStorage.setItem("token", data.data.token);
  };

  const handleForgetPwd = () => {
    forgotPassword(forgetEmail);
    setIsReset(true);
    // setIsForget(false);
  };

  // const handleResetPwd = () => {

  // }

  return (
    <ReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      <div
        className="fixed left-0 top-0 z-30 flex h-screen w-screen items-center justify-center bg-[#000000b7] "
        aria-labelledby="header-4a content-4a"
        aria-modal="true"
        tabIndex={-1}
        role="dialog"
      >
        {/*    <!-- Modal --> */}
        {isReset ? (
          <div
            ref={wrapperRef}
            className="flex h-[35vh] min-w-[400px] w-[25vw] flex-col rounded-2xl gap-4 overflow-hidden  border-[1px] border-zinc-700 bg-primary p-6 pb-4 pt-10 text-white "
            id="modal"
            role="document"
          >
            {/*        <!-- Modal header --> */}
            <header
              id="header-4a"
              className="flex items-center justify-between mb-10"
            >
              <h3 className=" flex-1 text-2xl text-center font-medium text-white">
                Reset Password
              </h3>
              <button
                onClick={() => setIsShowing(false)}
                className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-secondary transition duration-300 hover:bg-none hover:text-secondary focus:bg-none focus:text-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:text-secondary disabled:shadow-none disabled:hover:bg-transparent"
                aria-label="close dialog"
              >
                <span className="relative only:-mx-5">
                  <ExitIcon className="h-5 w-5" />
                </span>
              </button>
            </header>
            {/*        <!-- Modal body --> */}
            <div id="content-4a" className="flex flex-col justify-start">
              <div className="flex flex-col  gap-6">
                {/*                <!-- Input field --> */}
                <div className="relative my-6">
                  <input
                    id="id-b13"
                    type="password"
                    name="id-b13"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="your password"
                    className="peer relative h-10 w-full rounded border border-zinc-700 px-4 pr-12 text-sm text-white placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-secondary focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                  />
                  <label
                    htmlFor="id-b13"
                    className="absolute -top-2 left-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-none before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  >
                    Your password
                  </label>
                  <EyeIcon className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed" />
                  <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                    <span>Reset your password</span>
                  </small>
                </div>
              </div>
            </div>
            {/*        <!-- Modal actions --> */}
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setIsReset(false)}
                className="inline-flex h-10 w-full items-center text-primary justify-center gap-2 whitespace-nowrap rounded bg-secondary px-5 text-sm font-medium tracking-wide transition duration-300 hover:bg-secondary focus:bg-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:border-secondary disabled:bg-secondary disabled:shadow-none"
              >
                <span>OK</span>
              </button>
            </div>
          </div>
        ) : isForget ? (
          <div
            ref={wrapperRef}
            className="flex h-[35vh] min-w-[400px] w-[25vw] flex-col rounded-2xl gap-4 overflow-hidden  border-[1px] border-zinc-700 bg-primary p-6 pb-4 pt-10 text-white "
            id="modal"
            role="document"
          >
            {/*        <!-- Modal header --> */}
            <header
              id="header-4a"
              className="flex items-center justify-between mb-10"
            >
              <h3 className=" flex-1 text-2xl text-center font-medium text-white">
                Forget Password
              </h3>
              <button
                onClick={() => setIsShowing(false)}
                className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-secondary transition duration-300 hover:bg-none hover:text-secondary focus:bg-none focus:text-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:text-secondary disabled:shadow-none disabled:hover:bg-transparent"
                aria-label="close dialog"
              >
                <span className="relative only:-mx-5">
                  <ExitIcon className="h-5 w-5" />
                </span>
              </button>
            </header>
            {/*        <!-- Modal body --> */}
            <div id="content-4a" className="flex flex-col justify-start">
              <div className="flex flex-col  gap-6">
                {/*                <!-- Input field --> */}
                <div className="relative">
                  <input
                    id="id-b03"
                    type="email"
                    name="id-b03"
                    value={forgetEmail}
                    onChange={(e) => setForgetEmail(e.target.value)}
                    placeholder="your email"
                    className="peer relative h-10 w-full rounded border border-zinc-700 px-4 text-sm text-white placeholder-transparent outline-none transition-all autofill:bg-primary invalid:border-pink-500 invalid:text-pink-500 focus:border-secondary focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
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
              </div>
            </div>
            {/*        <!-- Modal actions --> */}
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={handleForgetPwd}
                className="inline-flex h-10 w-full items-center text-primary justify-center gap-2 whitespace-nowrap rounded bg-secondary px-5 text-sm font-medium tracking-wide transition duration-300 hover:bg-secondary focus:bg-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:border-secondary disabled:bg-secondary disabled:shadow-none"
              >
                <span>OK</span>
              </button>
            </div>
          </div>
        ) : (
          <div
            ref={wrapperRef}
            className="flex h-[60vh] min-w-[400px] w-[25vw] flex-col rounded-2xl gap-4 overflow-hidden  border-[1px] border-zinc-700 bg-primary p-6 pb-4 pt-10 text-white "
            id="modal"
            role="document"
          >
            {/*        <!-- Modal header --> */}
            <header
              id="header-4a"
              className="flex items-center justify-between mb-10"
            >
              <h3 className=" flex-1 text-2xl text-center font-medium text-white">
                Sign In
              </h3>
              <button
                onClick={() => setIsShowing(false)}
                className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-secondary transition duration-300 hover:bg-none hover:text-secondary focus:bg-none focus:text-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:text-secondary disabled:shadow-none disabled:hover:bg-transparent"
                aria-label="close dialog"
              >
                <span className="relative only:-mx-5">
                  <ExitIcon className="h-5 w-5" />
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your email"
                    className="peer relative h-10 w-full rounded border border-zinc-700 px-4 text-sm text-white placeholder-transparent outline-none transition-all autofill:bg-primary invalid:border-pink-500 invalid:text-pink-500 focus:border-secondary focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
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
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="your password"
                    className="peer relative h-10 w-full rounded border border-zinc-700 px-4 pr-12 text-sm text-white placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-secondary focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                  />
                  <label
                    htmlFor="id-b13"
                    className="absolute -top-2 left-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-none before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  >
                    Your password
                  </label>
                  <EyeIcon className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed" />
                  <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                    <span>Type your password</span>
                    <div
                      className="cursor-pointer hover:text-secondary"
                      onClick={() => setIsForget(true)}
                    >
                      Forget your password?
                    </div>
                  </small>
                </div>
                <Checkbox />
              </div>
            </div>
            <ReCaptcha onValidate={setToken} action="page_view" />
            {/*        <!-- Modal actions --> */}
            <div className="flex justify-center gap-2">
              <button
                onClick={handleSubmit}
                className="inline-flex h-10 w-full items-center text-primary justify-center gap-2 whitespace-nowrap rounded bg-secondary px-5 text-sm font-medium tracking-wide transition duration-300 hover:bg-secondary focus:bg-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:border-secondary disabled:bg-secondary disabled:shadow-none"
              >
                <span>Login</span>
              </button>
            </div>
            <div
              className="w-full cursor-pointer text-center text-sm hover:text-secondary"
              onClick={() => {
                setIsShowing(false);
                setIsShowing1(true);
              }}
            >
              Sign Up
            </div>
          </div>
        )}
      </div>
    </ReCaptchaProvider>
  );
}
