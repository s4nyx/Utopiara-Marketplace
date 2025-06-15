"use client";
import { useEffect, useRef, useState } from "react";
import Table from "@/components/Table";

interface TabState {
  currentTab: number;
  noTabs: number;
}

export default function Market() {
  const [viewMode, setViewMode] = useState<number>(4);

  const [tabSelected, setTabSelected] = useState<TabState>({
    currentTab: 1,
    noTabs: 3,
  });

  const wrapperRef = useRef<HTMLUListElement>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 39) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target as Node)) {
        if (
          tabSelected.currentTab >= 1 &&
          tabSelected.currentTab < tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab + 1,
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: 1,
          });
        }
      }
    }

    if (e.keyCode === 37) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target as Node)) {
        if (
          tabSelected.currentTab > 1 &&
          tabSelected.currentTab <= tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab - 1,
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.noTabs,
          });
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [tabSelected]);

  return (
    <>
      <div className="mx-auto relative w-screen bg-primary py-12 bg-cover bg-center bg-[url('/webp/background/back_1.webp')] pb-72">
        <div className="absolute  left-0 top-0 w-full h-full bg-primary opacity-90"></div>
        <div className="mx-auto  w-[90%] text-4xl text-secondary">
          <div className="mb-8 w-full text-5xl drop-shadow-[0_0_10px_rgba(1,234,249,0.8)]">
            NFT Items
          </div>
          <div className="w-full flex flex-col items-start z-30 ">
            <div className="w-full flex justify-between items-center">
              <ul
                className="flex items-center w-full z-30  gap-2 border-b-[1px] border-zinc-500 pb-4"
                role="tablist"
                ref={wrapperRef}
              >
                <li className="" role="presentation">
                  <button
                    className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded px-6 text-xl font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${
                      tabSelected.currentTab === 1
                        ? "bg-secondary text-white hover:bg-secondary focus:bg-secondary focus:text-primary disabled:bg-emerald-300"
                        : "w-full justify-self-center stroke-slate-700 text-white hover:bg-secondary  hover:text-white focus:bg-emerald-50 focus:stroke-secondary focus:text-primary "
                    }`}
                    id="tab-label-1e"
                    role="tab"
                    aria-setsize={3}
                    aria-posinset={1}
                    tabIndex={tabSelected.currentTab === 1 ? 0 : -1}
                    aria-controls="tab-panel-1e"
                    aria-selected={tabSelected.currentTab === 1}
                    onClick={() =>
                      setTabSelected({ ...tabSelected, currentTab: 1 })
                    }
                  >
                    <span>Trending</span>
                  </button>
                </li>
                <li className="" role="presentation">
                  <button
                    className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded px-6 text-xl font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${
                      tabSelected.currentTab === 2
                        ? "bg-secondary text-white hover:bg-secondary focus:bg-secondary focus:text-primary disabled:bg-emerald-300"
                        : "w-full justify-self-center stroke-slate-700 text-white hover:bg-secondary  hover:text-white focus:bg-emerald-50 focus:stroke-secondary focus:text-primary "
                    }`}
                    id="tab-label-2e"
                    role="tab"
                    aria-setsize={3}
                    aria-posinset={2}
                    tabIndex={tabSelected.currentTab === 2 ? 0 : -1}
                    aria-controls="tab-panel-2e"
                    aria-selected={tabSelected.currentTab === 2}
                    onClick={() =>
                      setTabSelected({ ...tabSelected, currentTab: 2 })
                    }
                  >
                    <span>Top</span>
                  </button>
                </li>
                <li className="" role="presentation">
                  <button
                    className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded px-6 text-xl font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${
                      tabSelected.currentTab === 3
                        ? "bg-secondary text-white hover:bg-secondary focus:bg-secondary focus:text-primary disabled:bg-emerald-300"
                        : "w-full justify-self-center stroke-slate-700 text-white hover:bg-secondary  hover:text-white focus:bg-emerald-50 focus:stroke-secondary focus:text-primary "
                    }`}
                    id="tab-label-3e"
                    role="tab"
                    aria-setsize={3}
                    aria-posinset={3}
                    tabIndex={tabSelected.currentTab === 3 ? 0 : -1}
                    aria-controls="tab-panel-3e"
                    aria-selected={tabSelected.currentTab === 3}
                    onClick={() =>
                      setTabSelected({ ...tabSelected, currentTab: 3 })
                    }
                  >
                    <span>Watchlist</span>
                  </button>
                </li>
              </ul>
              <div className="flex z-30 justify-between  items-center gap-2">
                <button
                  className="w-8 h-8"
                  onClick={() => {
                    setViewMode(1);
                  }}
                >
                  <svg
                    aria-label="Grid View"
                    className="fill-current hover:text-white text-secondary"
                    height="20"
                    role="img"
                    viewBox="0 -960 960 960"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"></path>
                  </svg>
                </button>
                <button
                  className="w-8 h-8"
                  onClick={() => {
                    setViewMode(2);
                  }}
                >
                  <svg
                    aria-label="Grid On"
                    className="fill-current hover:text-white text-secondary"
                    fill="currentColor"
                    height="20"
                    role="img"
                    viewBox="0 -960 960 960"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h133v-133H200v133Zm213 0h134v-133H413v133Zm214 0h133v-133H627v133ZM200-413h133v-134H200v134Zm213 0h134v-134H413v134Zm214 0h133v-134H627v134ZM200-627h133v-133H200v133Zm213 0h134v-133H413v133Zm214 0h133v-133H627v133Z"></path>
                  </svg>
                </button>
                {/* <button
                  className="w-8 h-8"
                  onClick={() => {
                    setViewMode(3);
                  }}
                >
                  <svg
                    aria-label="Browse"
                    className="fill-current hover:text-white text-secondary"
                    fill="currentColor"
                    height="20"
                    role="img"
                    viewBox="0 -960 960 960"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M120-440v-320q0-33 23.5-56.5T200-840h240v400H120Zm240-80Zm160-320h240q33 0 56.5 23.5T840-760v160H520v-240Zm0 720v-400h320v320q0 33-23.5 56.5T760-120H520ZM120-360h320v240H200q-33 0-56.5-23.5T120-200v-160Zm240 80Zm240-400Zm0 240Zm-400-80h160v-240H200v240Zm400-160h160v-80H600v80Zm0 240v240h160v-240H600ZM200-280v80h160v-80H200Z"></path>
                  </svg>
                </button> */}
                <button
                  className="w-8 h-8 hover:text-white text-secondary"
                  onClick={() => {
                    setViewMode(4);
                  }}
                >
                  <svg
                    aria-label="Table Rows"
                    className="fill-current"
                    fill="currentColor"
                    height="20"
                    role="img"
                    viewBox="0 -960 960 960"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M760-200v-120H200v120h560Zm0-200v-160H200v160h560Zm0-240v-120H200v120h560ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"></path>
                  </svg>
                </button>
                {/* <button
                  className="w-8 h-8 hover:text-white text-secondary"
                  onClick={() => {
                    setViewMode(5);
                  }}
                >
                  <svg
                    aria-label="Table Rows Narrow"
                    className="fill-current hover:text-white text-secondary"
                    fill="currentColor"
                    height="20"
                    role="img"
                    viewBox="0 -960 960 960"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M760-360v-80H200v80h560Zm0-160v-80H200v80h560Zm0-160v-80H200v80h560ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm560-80v-80H200v80h560Z"></path>
                  </svg>
                </button> */}
              </div>
            </div>
            <div className="w-full z-30">
              <div
                className={`px-6 py-4 ${
                  tabSelected.currentTab === 1 ? "" : "hidden"
                }`}
                id="tab-panel-1e"
                aria-hidden={tabSelected.currentTab !== 1}
                role="tabpanel"
                aria-labelledby="tab-label-1e"
                tabIndex={-1}
              >
                <Table viewMode={viewMode} />
              </div>
              <div
                className={`px-6 py-4 ${
                  tabSelected.currentTab === 2 ? "" : "hidden"
                }`}
                id="tab-panel-2e"
                aria-hidden={tabSelected.currentTab !== 2}
                role="tabpanel"
                aria-labelledby="tab-label-2e"
                tabIndex={-1}
              >
                <Table viewMode={viewMode} />
              </div>
              <div
                className={`px-6 py-4 ${
                  tabSelected.currentTab === 3 ? "" : "hidden"
                }`}
                id="tab-panel-3e"
                aria-hidden={tabSelected.currentTab !== 3}
                role="tabpanel"
                aria-labelledby="tab-label-3e"
                tabIndex={-1}
              >
                <Table viewMode={viewMode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
