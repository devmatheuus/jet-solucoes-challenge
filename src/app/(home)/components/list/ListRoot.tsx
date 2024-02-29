import React, { HTMLProps } from "react";

interface IListRootProps extends HTMLProps<HTMLUListElement> {
  children: React.ReactNode;
}

export const ListRoot: React.FC<IListRootProps> = ({ children }) => (
  <ul className="flex w-full flex-col gap-2">{children}</ul>
);
