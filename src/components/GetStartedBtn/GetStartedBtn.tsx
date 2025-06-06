"use client";
import "./GetStartedBtn.css";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GetStartedBtn() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    gsap.fromTo(
      button,
      {
        scale: 0,
        opacity: 0,
        rotationY: -180,
      },
      {
        scale: 1,
        opacity: 1,
        rotationY: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.5,
      }
    );

    // Add hover animation
    const hoverAnimation = {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    };

    const handleMouseEnter = () => {
      gsap.to(button, hoverAnimation);
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        ...hoverAnimation,
        scale: 1,
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button className="box1" ref={buttonRef}>
      <p className="text-button text-primary">GET STARTED</p>
    </button>
  );
}
