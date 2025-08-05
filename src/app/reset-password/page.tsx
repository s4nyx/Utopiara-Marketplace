"use client";
import { ExitIcon } from "@/components/svgs/ExitIcon";
import { EyeIcon } from "@/components/svgs/EyeIcon";
import HomePage from "@/layout/Home";
import { resetPassword } from "@/lib/api/auth";
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

export default function ResetPwd() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [pwd, setPwd] = useState<string>("");
  const handleRestPwd = () => {
    if (token && pwd) {
      resetPassword(token, pwd);
      window.location.href = "/";
    }
  };
  return (
    <>
      <div
        className="fixed left-0 top-0 z-[200] flex h-screen w-screen items-center justify-center bg-[#000000b7] "
        aria-labelledby="header-4a content-4a"
        aria-modal="true"
        tabIndex={-1}
        role="dialog"
      >
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
              onClick={() => (window.location.href = "/")}
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
              onClick={handleRestPwd}
              className="inline-flex h-10 w-full items-center text-primary justify-center gap-2 whitespace-nowrap rounded bg-secondary px-5 text-sm font-medium tracking-wide transition duration-300 hover:bg-secondary focus:bg-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:border-secondary disabled:bg-secondary disabled:shadow-none"
            >
              <span>OK</span>
            </button>
          </div>
        </div>
      </div>
      <HomePage />
    </>
  );
}
