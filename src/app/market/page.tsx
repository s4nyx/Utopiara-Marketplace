"use client";
import Navbar from "@/layout/Navbar";
import React, { useEffect, useRef, useState } from "react";
import Table from "@/components/Table";

interface TabState {
  currentTab: number;
  noTabs: number;
}

export default function Market() {
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
      <Navbar />
      <div className="mx-auto relative w-screen bg-primary py-12 bg-cover bg-center bg-[url('/webp/background/back_1.webp')]">
        <div className="absolute  left-0 top-0 w-full h-full bg-primary opacity-90"></div>
        <div className="mx-auto  w-[90%] text-4xl text-secondary">
          <div className="mb-8 w-full text-5xl drop-shadow-[0_0_10px_rgba(1,234,249,0.8)]">
            Collection stats
          </div>
          <div className="w-full flex flex-col items-start z-30">
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
                <Table />
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
                <Table />
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
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
