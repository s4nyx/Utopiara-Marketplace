import About from "@/layout/About";
import Browse from "@/layout/Browse";
import Choose from "@/layout/Choose";
import HomePage from "@/layout/Home";
import Invest from "@/layout/Invest";
import Partner from "@/layout/Partner";
import Top from "@/layout/Top";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <HomePage />
      <About />
      <Top />
      <Partner />
      <Choose />
      <Browse />
      <Invest />
    </ReactLenis>
  );
}
