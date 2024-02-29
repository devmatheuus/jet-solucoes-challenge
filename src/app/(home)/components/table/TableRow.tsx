import { TableHTMLAttributes } from "react";

interface ITableRowProps extends TableHTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

export const TableRow: React.FC<ITableRowProps> = ({ children, ...rest }) => {
  return <tr {...rest}>{children}</tr>;
};
