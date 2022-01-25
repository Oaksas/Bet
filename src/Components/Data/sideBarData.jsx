import React from "react";
import * as AiIcons from "react-icons/ai";

import * as GrIcons from "react-icons/gr";

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
];
