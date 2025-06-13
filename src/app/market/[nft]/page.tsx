type Props = {
  params: {
    nft: string;
  };
};

export default function MarketPage({ params: { nft = "" } }: Props) {
  return (
    <div className="w-full relative flex flex-col justify-start items-center min-h-screen bg-primary text-white">
      <div className="absolute w-full h-[60vh] bg-cover bg-center bg-[url('/webp/background/back.webp')]" />
      <div className="absolute z-10 top-0 w-full h-[60vh] bg-gradient-to-b from-primary via-transparent to-[#0d1b2500]" />
      <div className="absolute z-10 top-0 w-full h-[60vh] bg-gradient-to-t from-primary via-transparent to-[#0d1b2500]" />
      <div className="absolute z-20 top-0 h-[60vh] w-full flex flex-col justify-end items-center">
        <div className="w-full flex flex-row justify-between items-center"></div>
      </div>
      {nft}
    </div>
  );
}
