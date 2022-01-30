import React, { Fragment, useState, useRef } from "react";
import ReactToPrint from "react-to-print";

import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";

import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";

import { Link } from "react-router-dom";
import "./Css/navBar.css";
import Ticket from "../Pages/printComponent";
export default function RightSideBar(props) {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);
  const [totalBets, setTotalBets] = useState(0);
  let componentRef = useRef();

  return (
    <Fragment>
      <IconContext.Provider value={{ color: "" }}>
        <nav className="side-menu">
          <div className="nav-menu-items p-1 text-white ">
            <div className="d-flex justify-content-between ">
              <div className="p-2 flex-fill">
                <Link to="#" className="menu-bars  ">
                  <BsIcons.BsCashStack color="gray" size={25} />
                </Link>
                <div className=" text-white">ብር 5k</div>
              </div>
              <div className="vr"></div>

              <div className="p-2 flex-fill">
                <Link to="#" className="menu-bars  ">
                  <BsIcons.BsFillPersonFill color="gray" size={25} />
                </Link>
                <div className=" text-white">test</div>
              </div>
              <div className="vr"></div>

              <div className="col-lg p-2  my-3 hamburger">
                <Link to="#" className="menu-bars mx-3 m-3 ">
                  <FaIcons.FaAlignJustify color="white" onClick={showSideBar} />
                </Link>
              </div>
            </div>
            <div className="row mx-1 bg-primary">
              <div className="col-lg-6">
                <small>Section</small>
              </div>
              <div className="col-lg-3">
                <small>Odds</small>
              </div>
              <div className="col-lg-3">
                <small>Stake</small>
              </div>
            </div>
            <div className="bg-white mx-1 resultSection text-primary ">
              {props.selectedBets.map((bets) => {
                return (
                  <div className="row text-primary">
                    <div className="col-lg-6">
                      <small>{bets}</small>
                    </div>
                    <div className="col-lg-3">
                      <small>Odds</small>
                    </div>
                    <div className="col-lg-3">
                      <small>{props.getValue()}</small>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row mx-1 bg-primary">
              <div className="col-lg-7"></div>
              <div className="col-lg-5">
                <b>Total Bet</b>
              </div>
            </div>
            <div className="row mx-1 bg-primary">
              <div className="col-lg-8"></div>
              <div className="col-lg-4">
                <b> {"ብር " + props.getValue() * props.selectedBets.length}</b>
              </div>
            </div>
            <div className="row mx-1 bg-primary color-secondary">
              <div className="col-lg-8">
                <small>Max.Winning</small>
              </div>
              <div className="col-lg-4">
                <small>ብር 0</small>
              </div>
            </div>
            <div className="row mx-1 my-1">
              <div className="col-lg-4 my-2">
                <small>Stake:</small>
              </div>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ብር 5"
                  value={"ብር " + props.getValue()}
                />
              </div>
            </div>

            <div className="btn-group">
              <button
                type="button"
                className="btn bg-secondary btn-block customBtn mx-1"
                onClick={() => props.setValue(5)}
              >
                5
              </button>
              <button
                type="button"
                className="btn bg-white mx-1 customBtn"
                onClick={() => props.setValue(10)}
              >
                10
              </button>
              <button
                type="button"
                className="btn bg-white mx-1 customBtn"
                onClick={() => props.setValue(30)}
              >
                30
              </button>
              <button
                type="button"
                className="btn bg-white mx-1 customBtn"
                onClick={() => props.setValue(50)}
              >
                50
              </button>
            </div>
            <div className="btn-group my-1">
              <button
                type="button"
                className="btn bg-white customBtn mx-1"
                onClick={() => props.setValue(100)}
              >
                100
              </button>
              <button
                type="button"
                className="btn bg-white customBtn mx-1"
                onClick={() => props.setValue(300)}
              >
                300
              </button>
              <button
                type="button"
                className="btn bg-white customBtn mx-1"
                onClick={() => props.setValue(500)}
              >
                500
              </button>
              <button
                type="button"
                className="btn bg-white customBtn mx-1"
                onClick={() => props.setValue(1000)}
              >
                1K
              </button>
            </div>
            <div className="btn-group my-1">
              <button
                type="button"
                className="btn bg-white customBtn mx-1"
                onClick={() => props.setValue(1500)}
              >
                1.5K
              </button>
            </div>

            <div className="btn-group my-1">
              <button
                type="button"
                className="btn bg-secondary customBtn mx-1"
                onClick={() => {
                  if (true) {
                    var currentBet = props.selectedBets.filter(function (e) {
                      return e;
                    });

                    props.selectBets(currentBet);
                    console.log(props.selectedBets);
                  }
                }}
              >
                <AiIcons.AiOutlineCheck color="green" />
              </button>
              <button
                type="button"
                className="btn bg-white customBtn mx-1"
                onClick={() => {
                  if (true) {
                    var currentBet = props.selectedBets.filter(function (e) {
                      return;
                    });

                    props.selectBets(currentBet);
                    console.log(props.selectedBets);
                  }
                }}
              >
                <AiIcons.AiOutlineClose color="red" />
              </button>
              <button type="button" className="btn bg-white customBtn mx-1">
                <AiIcons.AiOutlineBarcode color="black" />
              </button>
              <ReactToPrint
                trigger={() => (
                  <button type="button" className="btn printBtn customBtn mx-1">
                    <AiIcons.AiOutlinePrinter color="white" />
                  </button>
                )}
                content={() => componentRef}
              />
              <Ticket ref={(el) => (componentRef = el)} />
            </div>
          </div>
        </nav>
      </IconContext.Provider>
      <div className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="nav-menu-items  text-white ">
          <div className="d-flex justify-content-between ">
            <div className="p-2 flex-fill"></div>

            <div className="p-2 flex-fill"></div>

            <div className="col-lg p-2  hamburger">
              <Link to="#" className="menu-bars mx-3 m-3 ">
                <AiIcons.AiOutlineClose color="white" onClick={showSideBar} />
              </Link>
            </div>
          </div>
          <div className="row p-3">
            <button type="button" className="btn btn-lg bg-white">
              <div className="row d-flex justify-content-center">
                <GrIcons.GrUserAdmin size={20} />
                <h5>Admin</h5>
              </div>
            </button>
          </div>

          <div className="row p-3">
            <button type="button" className="btn btn-lg bg-secondary">
              <div className="row d-flex justify-content-center">
                <GrIcons.GrPrint size={20} />
                <h5>Print Last Ticket</h5>
              </div>
            </button>
          </div>
          <div className="row p-3">
            <button type="button" className="btn btn-lg bg-white">
              <div className="row d-flex justify-content-center">
                <GrIcons.GrPrint size={20} />
                <h5>Reprint A Ticket</h5>
              </div>
            </button>
          </div>
          <div className="row p-3">
            <button type="button" className="btn btn-lg bg-secondary">
              <div className="row d-flex justify-content-center">
                <GrIcons.GrHelp size={20} />
                <h5>Fastbet Help</h5>
              </div>
            </button>
          </div>
          <div className="row p-3">
            <button type="button" className="btn btn-lg bg-white">
              <div className="row d-flex justify-content-center">
                <MdIcons.MdShortcut size={20} />
                <h5>Shortcuts Help</h5>
              </div>
            </button>
          </div>
          <div className="row p-3">
            <button type="button" className="btn btn-lg bg-white">
              <div className="row d-flex justify-content-center">
                <FaIcons.FaPowerOff size={20} />
                <h5>Log Out</h5>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
