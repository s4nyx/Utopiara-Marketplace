import ContactCard from "@/components/ContactCard";
import Navbar from "@/layout/Navbar";
import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex lg:flex-row max-lg:flex-col min-h-screen w-screen lg:items-start max-lg:items-center lg:justify-center max-lg:justify-start bg-primary lg:px-80 lg:py-32 max-lg:py-0">
        <div className="w-full lg:basis-1/2 max-lg:text-center text-white">
          <h1 className="mb-4 lg:text-5xl max-lg:text-4xl text-secondary lg:mt-48 max-lg:mt-12">
            Get in touch with us
          </h1>
          <h2>GUARDIAN BLOCKCHAIN LABS</h2>
          <h2>Robinson Road</h2>
        </div>
        <div className="w-full max-lg:mt-8 flex items-center justify-center lg:mt-24 lg:basis-1/2">
          <ContactCard />
        </div>
      </div>
    </>
  );
}
