/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { updateProfile } from "@/lib/api/auth";
import React, { useEffect, useState } from "react";
import { EditIcon } from "../svgs/EditIcon";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { PlusIcon } from "../svgs/PlusIcon";
import { shortenAddress } from "@/lib/utils/utils";
import { ExitIcon } from "../svgs/ExitIcon";
// import { ProfileData } from "@/lib/api/types";

export default function Profile() {
  const [name, setName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [url, setURL] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [walletAdrList, setWalletAdrList] = useState<string[]>([""]);
  const [isClickedAdd, setIsClickAdd] = useState<boolean>(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [bannerPreview, setBannerPreview] = useState<string | null>(null);
  const [userAvatar, setUserAvatar] = useState<File | null>(null);
  const [userBanner, setUserBanner] = useState<File | null>(null);

  const { address, isConnected } = useAccount();
  const { openConnectModal }: any = useConnectModal();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (!isConnected && isClickedAdd) {
      openConnectModal();
      setIsClickAdd(false);
    }
  }, [disconnect, isConnected, isClickedAdd]);

  useEffect(() => {
    if (address) {
      setWalletAdrList((prevList) => {
        const filtered = prevList.filter((item) => item !== address);
        return [...filtered, address];
      });
    }
  }, [isConnected]);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "avatar" | "banner"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      if (type === "avatar") {
        setAvatarPreview(result);
        console.log("userAvatar====>", file);
        setUserAvatar(file);
      } else {
        setBannerPreview(result);
        setUserBanner(file);
      }
    };
    reader.readAsDataURL(file);

    uploadFile(file, type);
  };

  const uploadFile = async (file: File, type: "avatar" | "banner") => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", type);
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("username", name);
    formData.append("email", email);

    if (userAvatar) {
      formData.append("userAvatar", userAvatar);
    }
    if (userBanner) {
      formData.append("userBanner", userBanner);
    }

    formData.append("bio", bio);

    formData.append("urls[]", url);
    walletAdrList.forEach((addr) => formData.append("walletAddresses[]", addr));

    const data = await updateProfile(formData);
    console.log("data", data);
  };

  return (
    <div className="mx-auto  w-screen bg-primary py-12">
      <div className="w-[80%] mx-auto flex flex-col justify-start items-start gap-4">
        <div className="relative my-6 w-full">
          <label
            htmlFor="id-avatar-upload"
            className="rounded-full z-10 absolute border-secondary flex justify-center items-center bg-primary border-[1px] -bottom-12 left-10 w-24 h-24 cursor-pointer overflow-hidden"
          >
            <input
              id="id-avatar-upload"
              name="avatar-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange(e, "avatar")}
            />
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="avatar preview"
                className="object-cover w-full h-full"
              />
            ) : (
              <EditIcon classname="fill-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            )}
          </label>

          <label
            htmlFor="id-banner-upload"
            className="relative flex cursor-pointer flex-col items-center gap-4 rounded border border-dashed border-secondary px-3 py-[150px] text-center text-sm font-medium transition-colors"
          >
            <input
              id="id-banner-upload"
              name="banner-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange(e, "banner")}
            />
            {bannerPreview ? (
              <img
                src={bannerPreview}
                alt="banner preview"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />
            ) : (
              <EditIcon classname="fill-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />
            )}
          </label>
        </div>

        <h1 className="text-secondary text-3xl mt-4">Edit Profile</h1>
        <div className="w-full flex justify-end">
          <div className="flex items-center gap-2">
            <ConnectButton />
            {isConnected && (
              <button
                onClick={() => {
                  disconnect();
                  setIsClickAdd(true);
                }}
                className="rounded-full bg-secondary h-8 w-8 text-lg text-primary"
              >
                <PlusIcon classname="" />
              </button>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center gap-8 w-full">
          <div className="flex text-secondary w-full flex-col gap-2 items-start justify-start">
            <h2 className="text-lg">First Name</h2>
            <input
              className="w-full border-secondary outline-none rounded-md border-[1px] px-2 py-1"
              placeholder="Add first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div className="flex text-secondary w-full flex-col gap-2 items-start justify-start">
            <h2 className="text-lg">Last Name</h2>
            <input
              className="w-full border-secondary outline-none rounded-md border-[1px] px-2 py-1"
              placeholder="Add last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
          <div className="flex text-secondary w-full flex-col gap-2 items-start justify-start">
            <h2 className="text-lg">Username</h2>
            <input
              className="w-full border-secondary outline-none rounded-md border-[1px] px-2 py-1"
              placeholder="Add username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
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
          <input
            className="w-full border-secondary outline-none rounded-md border-[1px] px-2 py-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="flex text-secondary w-full flex-col gap-2 items-start justify-start">
          <h2 className="text-lg">Wallet Address</h2>
          <div className="flex flex-row justify-start gap-2 border-secondary border-[1px] min-h-[33px] min-w-8 px-2 py-2 rounded-lg">
            {walletAdrList.map((walletAddress: string, key: number) => (
              <div
                key={key}
                className="border-secondary flex items-center gap-1 rounded-lg text-sm border-[1px] px-2 py-[2px]"
              >
                {shortenAddress(walletAddress)}
                <ExitIcon
                  className="h-4 w-4 rounded-full bg-secondary text-fourth cursor-pointer"
                  onClick={() => {
                    setWalletAdrList((prevList) =>
                      prevList.filter((address) => address !== walletAddress)
                    );
                  }}
                />
              </div>
            ))}
          </div>
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
