export const mapperReservationDate = (date: Date): string => {
  const month = date.toLocaleString("en-US", {
    month: "short",
  });

  const day = date.getDate();

  return `${month} ${day}`;
};
