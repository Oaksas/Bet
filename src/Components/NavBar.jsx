import React, { Fragment, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./Data/sideBarData";
import "./Css/navBar.css";
import { IconContext } from "react-icons";

function NavBar(props) {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);

  return (
    <Fragment>
      <IconContext.Provider value={{ color: "" }}>
        <div className="navBar py-1 sticky-top">
          <div className="d-flex justify-content-between">
            <div className="p-2">
              <Link to="#" className="menu-bars mx-3 my-1 ">
                <FaIcons.FaAlignLeft onClick={showSideBar} color="darkorange" />
              </Link>
            </div>
            <div className="p-2">
              <h1 className="logoTitle text-white">Mindplex</h1>
            </div>
            {/* <div class="p-2">Flex item</div> */}
            <div className="ml-auto p-2">
              <div className="input-group rounded">
                <input
                  type="search"
                  id="transaction"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => props.search(e.target.value)}
                />
                <span className="mx-4">
                  <FaIcons.FaSearch
                    onClick={() => {
                      props.execute();
                    }}
                    color="darkorange"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((menus, index) => {
              return (
                <li key={index} className={menus.cName}>
                  <Link to={menus.path} className="menu-bars p-1 ">
                    {menus.icon}
                    <span> {menus.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </Fragment>
  );
}

export default NavBar;
