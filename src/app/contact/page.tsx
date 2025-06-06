import ContactCard from "@/components/ContactCard";
import Navbar from "@/layout/Navbar";
import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex min-h-screen w-screen items-center justify-center bg-primary px-80 py-12">
        <div className="w-full basis-1/2 text-white">
          <h1 className="mb-4 text-5xl text-secondary">
            Get in touch <br></br> with us
          </h1>
          <h2>GUARDIAN BLOCKCHAIN LABS</h2>
          <h2>Robinson Road</h2>
        </div>
        <div className="w-full basis-1/2">
          <ContactCard />
        </div>
      </div>
    </>
  );
}
