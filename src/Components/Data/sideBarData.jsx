import React from "react";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome color="darkorange" />,
    cName: "nav-text",
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: <AiIcons.AiOutlineTransaction color="darkorange" />,
    cName: "nav-text",
  },
  {
    title: "Summary",
    path: "/summary",
    icon: <AiIcons.AiFillBook color="darkorange" />,
    cName: "nav-text",
  },
];
