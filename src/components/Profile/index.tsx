import React from "react";

export default function Profile() {
  return (
    <div className="mx-auto  w-screen bg-primary py-12">
      <div className="w-[80%] mx-auto flex flex-col justify-start items-start gap-4">
        <div className="relative my-6 w-full">
          <span className="rounded-full z-10 absolute border-secondary flex justify-center items-center bg-primary border-[1px] -bottom-12 left-10 w-24 h-24">
            <input
              id="id-dropzone01"
              name="file-upload"
              type="file"
              className="hidden"
            />
            <svg
              aria-label="Edit"
              className="fill-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              fill="currentColor"
              height="30"
              role="img"
              viewBox="0 -960 960 960"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path>
            </svg>
          </span>
          <input
            id="id-dropzone01"
            name="file-upload"
            type="file"
            className="hidden"
          />
          <label
            htmlFor="id-dropzone01"
            className="relative flex cursor-pointer flex-col items-center gap-4 rounded border border-dashed border-secondary px-3 py-[150px] text-center text-sm font-medium transition-colors"
          >
            <svg
              aria-label="Edit"
              className="fill-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              fill="currentColor"
              height="30"
              role="img"
              viewBox="0 -960 960 960"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path>
            </svg>
          </label>
        </div>
        <h1 className="text-secondary text-3xl mt-4">Edit Profile</h1>
        <div className="flex text-secondary w-full flex-col gap-2 items-start justify-start">
          <h2 className="text-lg">Username</h2>
          <input
            className="w-full border-secondary outline-none rounded-md border-[1px] px-2 py-1"
            placeholder="Add username"
          ></input>
          <p className="text-sm">This is your public username.</p>
        </div>
        <div className="flex text-secondary w-full flex-col gap-2 items-start justify-start">
          <h2 className="text-lg">Bio</h2>
          <input
            className="w-full border-secondary outline-none rounded-md border-[1px] px-2 pt-1 pb-12"
            placeholder="Add a bio"
          ></input>
        </div>
        <div className="flex text-secondary w-full flex-col gap-2 items-start justify-start">
          <h2 className="text-lg">URL</h2>
          <input
            className="w-full border-secondary outline-none rounded-md border-[1px] px-2 py-1"
            placeholder="Add a URL"
          ></input>
          <p className="text-sm">
            Add a link to your website or social profile.
          </p>
        </div>
        <div className="flex text-secondary w-full flex-col gap-2 items-start justify-start">
          <h2 className="text-lg">Email Address</h2>
          <input className="w-full border-secondary outline-none rounded-md border-[1px] px-2 py-1"></input>
        </div>
        <div className="flex justify-end w-full">
          <button className="rounded-lg bg-secondary px-4 py-1 text-lg text-primary">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
