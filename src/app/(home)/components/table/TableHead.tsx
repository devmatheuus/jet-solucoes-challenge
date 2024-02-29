import { TableHTMLAttributes } from "react";

interface ITableHeadProps extends TableHTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

export const TableHead: React.FC<ITableHeadProps> = ({ children, ...rest }) => {
  return <thead {...rest}>{children}</thead>;
};
