"use client";
import { updateProfile } from "@/lib/api/auth";
import React, { useState } from "react";
import { EditIcon } from "../svgs/EditIcon";

export default function Profile() {
  const [name, setName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [url, setURL] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [banner, setBanner] = useState<string>("");

  const handleSubmit = async () => {
    const data = await updateProfile({
      username: name,
      email: email,
      userAvatar: avatar,
      bio: bio,
      urls: [url],
      walletAddresses: ["dfs"],
    });
    console.log("data", data);
  };

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
            <EditIcon classname="fill-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
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
            <EditIcon classname="fill-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          </label>
        </div>
        <h1 className="text-secondary text-3xl mt-4">Edit Profile</h1>
        <div className="flex text-secondary w-full flex-col gap-2 items-start justify-start">
          <h2 className="text-lg">Username</h2>
          <input
            className="w-full border-secondary outline-none rounded-md border-[1px] px-2 py-1"
            placeholder="Add username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <p className="text-sm">This is your public username.</p>
        </div>
        <div className="flex text-secondary w-full flex-col gap-2 items-start justify-start">
          <h2 className="text-lg">Bio</h2>
          <input
            className="w-full border-secondary outline-none rounded-md border-[1px] px-2 pt-1 pb-12"
            placeholder="Add a bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></input>
        </div>
        <div className="flex text-secondary w-full flex-col gap-2 items-start justify-start">
          <h2 className="text-lg">URL</h2>
          <input
            className="w-full border-secondary outline-none rounded-md border-[1px] px-2 py-1"
            placeholder="Add a URL"
            value={url}
            onChange={(e) => setURL(e.target.value)}
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
          <button
            onClick={handleSubmit}
            className="rounded-lg bg-secondary px-4 py-1 text-lg text-primary"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
