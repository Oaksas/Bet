import React, { Fragment, useState } from "react";

import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";

import "./Css/navBar.css";
import { IconContext } from "react-icons";

function NavBar(props) {
  const [sidebar, setSideBar] = useState(false);
  return (
    <Fragment>
      <IconContext.Provider value={{ color: "" }}>
        <div className="navBar py-1 sticky-top">
          <div className="d-flex justify-content-between">
            <div className="p-2">
              <h3 className=" text-white">00:54 Spin 2 Win Royale</h3>
            </div>

            <div className="ml-auto p-2 ">
              <div className="p-2 d-inline">
                <div className="d-inline menu-bars">
                  {" "}
                  <RiIcons.RiMoneyDollarCircleFill
                    color="white"
                    className="m-1"
                    size={30}
                  />
                  <BiIcons.BiNotepad color="white" className="m-1" size={30} />
                  <button type="button" class="btn btn-warning btn-sm m-1">
                    #78329
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </Fragment>
  );
}

export default NavBar;
