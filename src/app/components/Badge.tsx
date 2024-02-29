import React from "react";

type IBadgeProps = {
  text: "Available" | "Unavailable";
};

export const Badge: React.FC<IBadgeProps> = ({ text }) => {
  return (
    <div
      className={`w-fit rounded-lg px-2 py-1 text-center ${
        text === "Available" ? "bg-green-100" : "bg-red-100"
      }`}
    >
      <span
        className={`
        font-medium
        ${text === "Available" ? "text-green-800" : "text-red-800"}
      `}
      >
        {text}
      </span>
    </div>
  );
};
