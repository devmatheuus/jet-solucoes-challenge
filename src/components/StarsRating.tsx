import React from "react";
import { renderStarsRating } from "@/utils/renderStarsRating";

interface IStarsRatingProps {
  rating: number;
}

export const StarsRating: React.FC<IStarsRatingProps> = ({ rating }) => {
  return (
    <span className="flex gap-1">
      {renderStarsRating(rating).map((Icon, index) => (
        <Icon key={index} className={`h-4 w-4`} />
      ))}
    </span>
  );
};
