type ITableHeaderTitles =
  | "car"
  | "next reservation"
  | "status"
  | "rating"
  | "actions";

export const useTableHeaderTitle = () => {
  const headerTitles: ITableHeaderTitles[] = [
    "car",
    "next reservation",
    "status",
    "rating",
    "actions",
  ];

  return { headerTitles };
};
