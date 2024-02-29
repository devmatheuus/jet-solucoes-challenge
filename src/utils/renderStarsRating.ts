import { IconType } from "react-icons";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

export const renderStarsRating = (rating: number): IconType[] => {
  const numberOfStars = Math.floor(rating);
  const decimalPart = rating - numberOfStars;

  const stars: IconType[] = [];

  // Add full stars
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(FaStar);
  }

  // Add half star
  if (decimalPart > 0) {
    stars.push(FaStarHalf);
  }

  return stars;
};
