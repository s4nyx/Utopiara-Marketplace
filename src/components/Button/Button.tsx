import "./Button.css";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  text?: string;
  className?: string;
}

export default function Button({ onClick, className }: ButtonProps) {
  return (
    <button className={className ? className : "box"} onClick={onClick}>
      <p className="text-button text-primary">{"LOGIN"}</p>
    </button>
  );
}
