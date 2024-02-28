import React from "react";

interface ITableRootProps {
  children: React.ReactNode;
}

export const TableRoot: React.FC<ITableRootProps> = ({ children }) => {
  return <table className="w-full text-left shadow">{children}</table>;
};
