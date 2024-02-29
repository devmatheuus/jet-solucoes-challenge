import { IGenericChildren } from "@/interfaces/Children";
import React from "react";

interface ITableRootProps extends IGenericChildren {}

export const TableRoot: React.FC<ITableRootProps> = ({ children }) => {
  return (
    <table className="w-full rounded-xl text-left shadow">{children}</table>
  );
};
