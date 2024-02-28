import { TableHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ITableDataItemProps
  extends TableHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export const TableDataItem: React.FC<ITableDataItemProps> = ({
  children,
  ...rest
}) => {
  return (
    <td
      {...rest}
      // tailwind-merge is a library that merges tailwind classes
      className={twMerge("px-3 py-2", rest.className)}
    >
      {children}
    </td>
  );
};
