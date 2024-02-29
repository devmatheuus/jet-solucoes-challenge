import { TableHTMLAttributes } from "react";

interface ITableBodyProps extends TableHTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export const TableBody: React.FC<ITableBodyProps> = ({ children, ...rest }) => {
  return <tbody {...rest}>{children}</tbody>;
};
