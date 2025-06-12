type Props = {
  params: {
    collection: string;
  };
};

export default function MarketPage({ params: { collection = "" } }: Props) {
  return (
    <div className="w-full h-screen bg-primary text-white">{collection}</div>
  );
}
