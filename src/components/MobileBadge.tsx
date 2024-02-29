import React from "react";
import { MdDone } from "react-icons/md";
import { MdClose } from "react-icons/md";

type IMobileBadgeProps = {
  status: "Available" | "Unavailable";
};

export const MobileBadge: React.FC<IMobileBadgeProps> = ({ status }) => {
  return (
    <div
      className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full ${
        status === "Available" ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {status === "Available" ? (
        <MdDone className="text-white" />
      ) : (
        <MdClose className="text-white" />
      )}
    </div>
  );
};
