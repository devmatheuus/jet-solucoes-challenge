import { StaticImageData } from "next/image";
import carImage from "../assets/images/webp/car.webp";

type ICarData = {
  tableHeaderTitle:
    | "car"
    | "next reservation"
    | "status"
    | "rating"
    | "actions";
  img: StaticImageData;
  name: string;
  startReservationDate: Date;
  endReservationDate: Date;
  status: "available" | "unavailable";
  rating: string;
};

export const useCarData = (): Record<string, ICarData[]> => {
  const cars: ICarData[] = [
    {
      tableHeaderTitle: "car",
      img: carImage,
      name: "Mini Cooper 2020",
      startReservationDate: new Date("2024-07-6"),
      endReservationDate: new Date("2024-07-012"),
      status: "available",
      rating: "4.5",
    },
    {
      tableHeaderTitle: "next reservation",
      img: carImage,
      name: "Mini Cooper 2020",
      startReservationDate: new Date("2024-07-6"),
      endReservationDate: new Date("2024-07-012"),
      status: "available",
      rating: "4.5",
    },
    {
      tableHeaderTitle: "status",
      img: carImage,
      name: "Mini Cooper 2020",
      startReservationDate: new Date("2024-07-6"),
      endReservationDate: new Date("2024-07-012"),
      status: "available",
      rating: "4.5",
    },
    {
      tableHeaderTitle: "rating",
      img: carImage,
      name: "Mini Cooper 2020",
      startReservationDate: new Date("2024-07-6"),
      endReservationDate: new Date("2024-07-012"),
      status: "available",
      rating: "4.5",
    },
    {
      tableHeaderTitle: "actions",
      img: carImage,
      name: "Mini Cooper 2020",
      startReservationDate: new Date("2024-07-6"),
      endReservationDate: new Date("2024-07-012"),
      status: "available",
      rating: "4.5",
    },
  ];

  return { cars };
};
