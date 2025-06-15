import Image from "next/image";

type Props = {
  params: {
    nft: string;
  };
};

export default function MarketPage({ params: { nft = "" } }: Props) {
  return (
    <div className="w-full flex flex-row justify-between bg-primary gap-4 items-start p-12">
      <Image
        alt="nft image"
        src={"/images/1.webp"}
        width={1200}
        height={800}
        className="w-[35%] h-[40%] rounded-md"
      />
      <div className="flex text-white flex-col p-4 bg-fifth rounded-md w-full items-start gap-4">
        <h1 className="text-3xl">{nft}</h1>
        <div className="w-full flex flex-row justify-between items-center">
          <p className="text-sm">owned by {"0xsdfs32"}</p>
          <div className="flex flex-row justify-between gap-4 items-center">
            <svg
              aria-label="Content Copy"
              className="cursor-pointer fill-text-primary hover:fill-text-secondary"
              fill="currentColor"
              height="20"
              role="img"
              viewBox="0 -960 960 960"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"></path>
            </svg>
            <svg
              aria-label="Handshake"
              className="cursor-pointer fill-text-primary hover:fill-text-secondary"
              fill="currentColor"
              height="20"
              role="img"
              viewBox="0 -960 960 960"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M475-160q4 0 8-2t6-4l328-328q12-12 17.5-27t5.5-30q0-16-5.5-30.5T817-607L647-777q-11-12-25.5-17.5T591-800q-15 0-30 5.5T534-777l-11 11 74 75q15 14 22 32t7 38q0 42-28.5 70.5T527-522q-20 0-38.5-7T456-550l-75-74-175 175q-3 3-4.5 6.5T200-435q0 8 6 14.5t14 6.5q4 0 8-2t6-4l136-136 56 56-135 136q-3 3-4.5 6.5T285-350q0 8 6 14t14 6q4 0 8-2t6-4l136-135 56 56-135 136q-3 2-4.5 6t-1.5 8q0 8 6 14t14 6q4 0 7.5-1.5t6.5-4.5l136-135 56 56-136 136q-3 3-4.5 6.5T454-180q0 8 6.5 14t14.5 6Zm-1 80q-37 0-65.5-24.5T375-166q-34-5-57-28t-28-57q-34-5-56.5-28.5T206-336q-38-5-62-33t-24-66q0-20 7.5-38.5T149-506l232-231 131 131q2 3 6 4.5t8 1.5q9 0 15-5.5t6-14.5q0-4-1.5-8t-4.5-6L398-777q-11-12-25.5-17.5T342-800q-15 0-30 5.5T285-777L144-635q-9 9-15 21t-8 24q-2 12 0 24.5t8 23.5l-58 58q-17-23-25-50.5T40-590q2-28 14-54.5T87-692l141-141q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l11 11 11-11q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l169 169q23 23 35 53t12 61q0 31-12 60.5T873-437L545-110q-14 14-32.5 22T474-80Zm-99-560Z"></path>
            </svg>
            <svg
              aria-label="Favorite"
              className="cursor-pointer fill-text-primary hover:fill-text-secondary disabled:pointer-events-none disabled:opacity-40"
              fill="currentColor"
              height="22"
              role="img"
              viewBox="0 -960 960 960"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"></path>
            </svg>
          </div>
        </div>
        <div className="w-full border-[1px] rounded-lg border-zinc-600 flex flex-col justify-start p-4">
          <div className="border-b-[1px] p-2 border-b-zinc-600 w-full flex flex-row justify-between">
            <div className="flex flex-col text-sm gap-2">
              <h3 className="text-zinc-500">TOP OFFER</h3>
              <p>
                2.02 <span className="text-zinc-500">WETH</span>
              </p>
            </div>
            <div className="flex flex-col text-sm gap-2">
              <h3 className="text-zinc-500">COLLECTION FLOOR</h3>
              <p>
                2.02 <span className="text-zinc-500">WETH</span>
              </p>
            </div>
            <div className="flex flex-col text-sm gap-2">
              <h3 className="text-zinc-500">RARITY</h3>
              <p>
                2.02 <span className="text-zinc-500">WETH</span>
              </p>
            </div>
            <div className="flex flex-col text-sm gap-2">
              <h3 className="text-zinc-500">LAST SALE</h3>
              <p>
                2.02 <span className="text-zinc-500">WETH</span>
              </p>
            </div>
          </div>
          <div className="px-2 py-4 flex flex-col text-sm items-start gap-4">
            <h3 className="text-zinc-500">BUY FOR</h3>
            <div className="flex flex-row justify-start items-end gap-4">
              <span className="text-3xl text-white">{"2.0954"} ETH</span>
              <span className="text-zinc-500">{"{$5,332.43}"}</span>
              <span className="text-white text-sm ">
                ENDING IN {"6"} MINUTES
              </span>
            </div>
            <div className="flex flex-row justify-between w-full items-center gap-2">
              <button className="rounded-xl text-primary h-12 w-1/2 bg-secondary">
                Buy now
              </button>
              <button className="rounded-xl text-white h-12 w-1/2 bg-none border-zinc-600 border-[1px]">
                Make offer
              </button>
            </div>
          </div>
        </div>
        <div className="w-full border-[1px] rounded-lg border-zinc-600 p-4">
          <section className="w-full z-30  divide-y divide-slate-200 rounded bg-fourth">
            <details className="group p-4">
              <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-secondary "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac05 desc-ac05"
                >
                  <title id="title-ac05">Leading icon</title>
                  <desc id="desc-ac05">Icon that describes the summary</desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                Traits
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac06 desc-ac06"
                >
                  <title id="title-ac06">Open icon</title>
                  <desc id="desc-ac06">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-zinc-400">
                All components can be copied and pasted and easily implemented
                in your tailwind css projects. You can choose which language you
                want to copy the desired component and just hover and click on
                the component you need and paste it on your project.
              </p>
            </details>
            <details className="group p-4">
              <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-secondary "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac07 desc-ac07"
                >
                  <title id="title-ac07">Leading icon</title>
                  <desc id="desc-ac07">Icon that describes the summary</desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                Price history
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac08 desc-ac08"
                >
                  <title id="title-ac08">Open icon</title>
                  <desc id="desc-ac08">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-zinc-400">
                All components come with proper attributes to ensure full
                accessibility with the WAI-ARIA standards. Web accessibility
                means that websites, tools, and technologies are designed and
                developed so that people with disabilities can use them.
              </p>
            </details>
            <details className="group p-4">
              <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-secondary "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac09 desc-ac09"
                >
                  <title id="title-ac09">Leading icon</title>
                  <desc id="desc-ac09">Icon that describes the summary</desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
                About
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac10 desc-ac10"
                >
                  <title id="title-ac10">Open icon</title>
                  <desc id="desc-ac10">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-zinc-400">
                Every component is fully responsive and implemented to look
                great at any screen size.
              </p>
            </details>
            <details className="group p-4">
              <summary className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white transition-colors duration-300 focus:text-secondary focus-visible:outline-none group-hover:text-secondary  [&::-webkit-details-marker]:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-secondary "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac11 desc-ac11"
                >
                  <title id="title-ac11">Leading icon</title>
                  <desc id="desc-ac11">Icon that describes the summary</desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                Blockchain details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 top-1 h-4 w-4 shrink-0 stroke-white transition duration-300 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac12 desc-ac12"
                >
                  <title id="title-ac12">Open icon</title>
                  <desc id="desc-ac12">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-zinc-400">
                Our team has used the currently latest TailwindCSS version. The
                code is used in its original form without any customization or
                third party dependencies.
              </p>
            </details>
          </section>
        </div>
      </div>
    </div>
  );
}
