import React, { useState } from "react";
import { CheckBoxIcon } from "../svgs/CheckBoxIcon";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      {/*<!-- Component: Primary basic checkbox --> */}
      <div className="relative flex items-start ">
        <input
          className="peer h-4 w-6 cursor-pointer appearance-none rounded border-2 border-slate-500 bg-white transition-colors checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          id="id-c01"
        />
        <label
          className="cursor-pointer pl-2 text-sm text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
          htmlFor="id-c01"
        >
          By creating an account, I agree to Utopiara&apos;s Terms of Service
          and Privacy Policy
        </label>
        <CheckBoxIcon classname="pointer-events-none absolute left-0 top-0 h-4 w-4 -rotate-90 fill-white stroke-white opacity-0 transition-all duration-300 peer-checked:rotate-0 peer-checked:opacity-100 peer-disabled:cursor-not-allowed" />
      </div>
      {/*<!-- End Primary basic checkbox --> */}
    </>
  );
}
