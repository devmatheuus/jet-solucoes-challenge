import React, { HTMLProps } from "react";

interface IListItemProps extends HTMLProps<HTMLLIElement> {
  children: React.ReactNode;
}

export const ListItem: React.FC<IListItemProps> = ({ children }) => (
  <li className="flex max-w-full justify-between border-b border-gray-200 pb-2">
    {children}
  </li>
);
