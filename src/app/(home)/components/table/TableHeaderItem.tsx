import { TableHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ITableHeaderItemProps
  extends TableHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export const TableHeaderItem: React.FC<ITableHeaderItemProps> = ({
  children,
  ...rest
}) => {
  return (
    <th
      {...rest}
      // tailwind-merge is a library that merges tailwind classes
      className={twMerge("px-3 py-4 font-semibold", rest.className)}
    >
      {children}
    </th>
  );
};
