import React from "react";
import EmailNotification from "@/components/Email-Notification";
import Navbar from "@/layout/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <EmailNotification />
    </>
  );
}
