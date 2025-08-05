"use client";
import { register, verifyEmail } from "@/lib/api/auth";
import Checkbox from "../Checkbox";
import React, { useEffect, useRef, useState } from "react";
import { ExitIcon } from "../svgs/ExitIcon";
import { EyeIcon } from "../svgs/EyeIcon";

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
  const [name, setName] = useState<string>("");
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [verificationCode, setVerificationCode] = useState("");

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");

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

  const handleInputChange = (index: number, value: string) => {
    if (value.length === 1 && inputRefs.current[index]) {
      // Move focus to next input box if a digit is entered
      inputRefs.current[index + 1]?.focus();
    }
    // Update the respective input value
    switch (index) {
      case 1:
        setInput1(value);
        break;
      case 2:
        setInput2(value);
        break;
      case 3:
        setInput3(value);
        break;
      case 4:
        setInput4(value);
        break;
      case 5:
        setInput5(value);
        break;
      case 6:
        setInput6(value);
        break;
      default:
        break;
    }

    // Update the combined verification code
    setVerificationCode(input1 + input2 + input3 + input4 + input5 + input6);
  };

  useEffect(() => {
    const newVerificationCode =
      input1 + input2 + input3 + input4 + input5 + input6;
    setVerificationCode(newVerificationCode);
  }, [input1, input2, input3, input4, input5, input6]);

  const handleSubmit = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await register({
      email: email,
      password: pwd,
      username: name,
      firstName: firstname,
      lastName: lastname,
    });
    console.log("response", response);
    if (response.success) setIsSignUp(true);
    localStorage.setItem("token", response.token);
  };

  const handleVerification = async () => {
    const response: any = await verifyEmail({
      code: verificationCode,
      email: "sanyscott4139@gmail.com",
    });
    if (response.success) localStorage.setItem("token", response.data.token);
  };

  return (
    <div
      className="fixed left-0 top-0 z-30 flex h-screen w-screen items-center justify-center bg-[#000000b7] "
      aria-labelledby="header-4a content-4a"
      aria-modal="true"
      tabIndex={-1}
      role="dialog"
    >
      {isSignUp ? (
        <div
          ref={wrapperRef}
          className="flex h-[40vh] min-w-[400px] w-[25vw] flex-col rounded-2xl lex-col gap-4 overflow-hidden  border-[1px] border-zinc-700 bg-primary p-6 pb-4 pt-10 text-white "
          id="modal"
          role="document"
        >
          {/*        <!-- Modal header --> */}
          <header
            id="header-4a"
            className="flex items-center justify-between mb-4 "
          >
            <h3 className="flex-1 text-2xl text-center font-medium text-white">
              Verification
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
            <div className="flex flex-col gap-4">
              <div className="relative">
                <div className="flex flex-row gap-2  justify-between items-center w-full">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div className="w-full text-white  basis-1/6 " key={index}>
                      <input
                        type="text" // Change to text to control input better
                        className="w-full rounded-10 rounded-lg border-secondary border-[1px] h-16 text-center focus:ring-secondary text-[20px] bg-[#1a1b1d] border-tableColor focus:border-tableColor mt-6"
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        ref={(el: any) => (inputRefs.current[index] = el)}
                        onChange={(e) =>
                          handleInputChange(index, e.target.value)
                        }
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onInput={(e: any) => {
                          e.target.value = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 1);
                        }}
                        inputMode="numeric" // Numeric keypad on mobile
                        pattern="[0-9]*" // Limits to digits
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/*        <!-- Modal actions --> */}
          <div className="flex justify-center gap-2">
            <button
              onClick={handleVerification}
              className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-secondary px-5 text-sm font-medium tracking-wide text-primary transition duration-300 hover:bg-secondary focus:bg-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:border-secondary disabled:bg-secondary disabled:shadow-none"
            >
              <span>Submit</span>
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
      ) : (
        <div
          ref={wrapperRef}
          className="flex h-[70vh] min-w-[400px] w-[25vw] flex-col rounded-2xl lex-col gap-4 overflow-hidden  border-[1px] border-zinc-700 bg-primary p-6 pb-4 pt-10 text-white "
          id="modal"
          role="document"
        >
          {/*        <!-- Modal header --> */}
          <header
            id="header-4a"
            className="flex items-center justify-between mb-4 "
          >
            <h3 className="flex-1 text-2xl text-center font-medium text-white">
              Sign Up
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
            <div className="flex flex-col gap-4">
              {/*                <!-- First and Last Name Input Field --> */}
              <div className="relative flex flex-row justify-between gap-4">
                <div className="relative">
                  <input
                    id="id-b01"
                    name="id-b01"
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="peer relative h-10 w-full rounded border border-zinc-700 px-4 text-sm text-white placeholder-transparent outline-none transition-all autofill:bg-primary invalid:border-pink-500 invalid:text-pink-500 focus:border-secondary focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                  />
                  <label
                    htmlFor="id-b01"
                    className="absolute -top-2 left-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-none before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  >
                    First Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="id-b02"
                    name="id-b02"
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    className="peer relative h-10 w-full rounded border border-zinc-700 px-4 text-sm text-white placeholder-transparent outline-none transition-all autofill:bg-primary invalid:border-pink-500 invalid:text-pink-500 focus:border-secondary focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                  />
                  <label
                    htmlFor="id-b02"
                    className="absolute -top-2 left-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-none before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  >
                    Last Name
                  </label>
                </div>
              </div>
              {/*                <!-- Username Input Field --> */}
              <div className="relative mt-3">
                <input
                  id="id-b03"
                  name="id-b03"
                  type="text"
                  placeholder="your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="peer relative h-10 w-full rounded border border-zinc-700 px-4 text-sm text-white placeholder-transparent outline-none transition-all autofill:bg-primary invalid:border-pink-500 invalid:text-pink-500 focus:border-secondary focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b03"
                  className="absolute -top-2 left-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-none before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Username
                </label>
              </div>
              {/*                <!-- Email Input field --> */}
              <div className="relative mt-3">
                <input
                  id="id-b04"
                  type="email"
                  name="id-b04"
                  placeholder="your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer relative h-10 w-full rounded border border-zinc-700 px-4 text-sm text-white placeholder-transparent outline-none transition-all autofill:bg-primary invalid:border-pink-500 invalid:text-pink-500 focus:border-secondary focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b04"
                  className="absolute -top-2 left-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-none before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Email
                </label>
              </div>
              {/*                <!-- Password Input field --> */}
              <div className="relative mt-3 mb-3">
                <input
                  id="id-b13"
                  type="password"
                  name="id-b13"
                  placeholder="your password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  className="peer relative h-10 w-full rounded border border-zinc-700 px-4 pr-12 text-sm text-white placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-secondary focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b13"
                  className="absolute -top-2 left-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-none before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Password
                </label>
                <EyeIcon className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed" />
              </div>
              {/*                <!-- Confirm Password Input field --> */}
              <div className="relative mb-6">
                <input
                  id="id-b14"
                  type="password"
                  name="id-b14"
                  placeholder="your password"
                  className="peer relative h-10 w-full rounded border border-zinc-700 px-4 pr-12 text-sm text-white placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-secondary focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <label
                  htmlFor="id-b14"
                  className="absolute -top-2 left-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-none before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-secondary peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  Confirm Password
                </label>
                <EyeIcon className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed" />
              </div>
              <Checkbox />
            </div>
          </div>
          {/*        <!-- Modal actions --> */}
          <div className="flex justify-center gap-2">
            <button
              onClick={handleSubmit}
              className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-secondary px-5 text-sm font-medium tracking-wide text-primary transition duration-300 hover:bg-secondary focus:bg-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:border-secondary disabled:bg-secondary disabled:shadow-none"
            >
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
      )}
    </div>
  );
}
