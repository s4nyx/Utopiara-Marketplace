export function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function shortenAddress(address: string): string {
  if (!address || address.length < 10) return address;
  return `0x${address.slice(2, 5)}...${address.slice(-3)}`;
}
