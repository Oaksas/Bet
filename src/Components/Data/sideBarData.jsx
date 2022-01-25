import React from "react";
import * as AiIcons from "react-icons/ai";
import * as TiIcons from "react-icons/ti";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome color="darkorange" />,
    cName: "nav-text",
  },
  {
    title: "Africa",
    path: "/africa",
    icon: <TiIcons.TiWeatherPartlySunny color="darkorange" />,
    cName: "nav-text",
  },
  {
    title: "Predict News",
    path: "/predict",
    icon: <MdIcons.MdOnlinePrediction color="darkorange" />,
    cName: "nav-text",
  },
  {
    title: "Tech News",
    path: "/tech",
    icon: <GiIcons.GiArtificialIntelligence color="darkorange" />,
    cName: "nav-text",
  },
];
