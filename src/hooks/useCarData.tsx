import { StaticImageData } from "next/image";
import carImage from "../assets/images/webp/car.webp";

type ICarData = {
  img: StaticImageData;
  name: string;
  startReservationDate: Date;
  endReservationDate: Date;
  status: "Available" | "Unavailable";
  rating: string;
};

export const useCarData = (): Record<string, ICarData[]> => {
  const cars: ICarData[] = [
    {
      img: carImage,
      name: "Mini Cooper 2020",
      startReservationDate: new Date("2024-07-6"),
      endReservationDate: new Date("2024-07-012"),
      status: "Available",
      rating: "1",
    },
    {
      img: carImage,
      name: "Mini Cooper 2020",
      startReservationDate: new Date("2024-07-6"),
      endReservationDate: new Date("2024-07-012"),
      status: "Available",
      rating: "1.5",
    },
    {
      img: carImage,
      name: "Mini Cooper 2020",
      startReservationDate: new Date("2024-07-6"),
      endReservationDate: new Date("2024-07-012"),
      status: "Available",
      rating: "2.5",
    },
    {
      img: carImage,
      name: "Mini Cooper 2020",
      startReservationDate: new Date("2024-07-6"),
      endReservationDate: new Date("2024-07-012"),
      status: "Available",
      rating: "3.5",
    },
    {
      img: carImage,
      name: "Mini Cooper 2020",
      startReservationDate: new Date("2024-07-6"),
      endReservationDate: new Date("2024-07-012"),
      status: "Unavailable",
      rating: "4",
    },
    {
      img: carImage,
      name: "Mini Cooper 2020",
      startReservationDate: new Date("2024-07-6"),
      endReservationDate: new Date("2024-07-012"),
      status: "Unavailable",
      rating: "5",
    },
  ];

  return { cars };
};
