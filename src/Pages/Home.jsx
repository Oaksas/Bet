import { React, useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import * as MdIcons from "react-icons/md";
import SpinStretch from "react-cssfx-loading/lib/SpinStretch";

import { Fragment } from "react/cjs/react.production.min";
import "../Components/Css/homeCss.css";
import "../Components/Css/navBar.css";
import "../Components/Css/popup.css";

import Tabs from "../Components/tabs";
import BottomTabs from "../Components/bottomTabs";
import Bottom from "../Components/Bottom";
import RightSideBar from "../Components/rightSideBar";
import NavBar from "../Components/NavBar";
function Home(props) {
  const row1Color = ["danger", "black", "danger", "black", "danger", "black"];
  const row2Color = ["danger", "black", "danger", "black", "black", "danger"];
  const row3Color = ["black", "danger", "black", "danger", "black", "danger"];
  const row4Color = ["danger", "black", "danger", "black", "danger", "black"];
  const row5Color = ["danger", "black", "danger", "black", "black", "danger"];
  const row6Color = ["black", "danger", "black", "danger", "black", "danger"];

  const [timer, setTimer] = useState("00:00");
  const [disable, setDisable] = useState(false);

  const [selectedBets, selectBet] = useState([]);
  useEffect(() => {
    const socket = socketIOClient("http://virtual-bets.herokuapp.com/");
    socket.on("FromAPI", (data) => {
      console.log(data);
      setTimer(data.minute + ":" + data.second);
      setDisable(data.pause);
    });
  }, []);

  return (
    <Fragment>
      <div className="home  ">
        <div className="bg-white ">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-12">
                  <NavBar
                    getValue={() => props.getValue()}
                    payTable={props.payTable}
                    setPayTable={(value) => props.setPayTable(value)}
                    shopAdmin={props.shopAdmin}
                    setshopAdmin={(value) => props.setshopAdmin(value)}
                    timer={timer}
                  />
                </div>
                {disable ? (
                  <Fragment>
                    {" "}
                    <div className="col-lg-12 overlayStop">
                      <div className="center">
                        <SpinStretch
                          color="#ff5b00"
                          width="100px"
                          height="100px"
                          duration="1s"
                        />
                        <div className=" display-4 ml-1"> MARKET CLOSED</div>
                      </div>
                    </div>
                  </Fragment>
                ) : (
                  <Fragment>
                    {" "}
                    <div className="col-lg-5 ">
                      <div className="row">
                        <h1>
                          <b>Exact Number</b>
                        </h1>

                        <div class="btn-group my-1 text-white">
                          {row1Color.map((color, index) => {
                            return (
                              <button
                                type="button"
                                className={
                                  "btn bg-" + color + " customBtn2 mx-1"
                                }
                                onClick={() => {
                                  let currentBet;
                                  if (selectedBets.includes(index + 1)) {
                                    currentBet = selectedBets.filter(function (
                                      e
                                    ) {
                                      return e !== index + 1;
                                    });

                                    selectBet(currentBet);
                                  } else {
                                    currentBet = selectedBets;
                                    currentBet.push(index + 1);

                                    selectBet(currentBet);
                                  }
                                }}
                              >
                                <div
                                  className={
                                    selectedBets.includes(index + 1)
                                      ? "bg-warning text-black rounded-circle"
                                      : ""
                                  }
                                >
                                  {" "}
                                  {index + 1}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                        <div class="btn-group my-1 text-white">
                          {row2Color.map((color, index) => {
                            return (
                              <button
                                type="button"
                                className={
                                  "btn bg-" + color + " customBtn2 mx-1"
                                }
                                onClick={() => {
                                  if (selectedBets.includes(index + 7)) {
                                    var currentBet = selectedBets.filter(
                                      function (e) {
                                        return e !== index + 7;
                                      }
                                    );

                                    selectBet(currentBet);
                                  } else {
                                    currentBet = selectedBets;
                                    currentBet.push(index + 7);
                                    selectBet(currentBet);
                                  }
                                }}
                              >
                                <div
                                  className={
                                    selectedBets.includes(index + 7)
                                      ? "bg-warning text-black rounded-circle"
                                      : ""
                                  }
                                >
                                  {" "}
                                  {index + 7}
                                </div>{" "}
                              </button>
                            );
                          })}
                        </div>
                        <div class="btn-group my-1 text-white">
                          {row3Color.map((color, index) => {
                            return (
                              <button
                                type="button"
                                className={
                                  "btn bg-" + color + " customBtn2 mx-1"
                                }
                                onClick={() => {
                                  if (selectedBets.includes(index + 13)) {
                                    var currentBet = selectedBets.filter(
                                      function (e) {
                                        return e !== index + 13;
                                      }
                                    );

                                    selectBet(currentBet);
                                  } else {
                                    currentBet = selectedBets;
                                    currentBet.push(index + 13);
                                    selectBet(currentBet);
                                  }
                                }}
                              >
                                <div
                                  className={
                                    selectedBets.includes(index + 13)
                                      ? "bg-warning text-black rounded-circle"
                                      : ""
                                  }
                                >
                                  {" "}
                                  {index + 13}
                                </div>{" "}
                              </button>
                            );
                          })}
                        </div>
                        <div class="btn-group my-1 text-white">
                          {row4Color.map((color, index) => {
                            return (
                              <button
                                type="button"
                                className={
                                  "btn bg-" + color + " customBtn2 mx-1"
                                }
                                onClick={() => {
                                  if (selectedBets.includes(index + 19)) {
                                    var currentBet = selectedBets.filter(
                                      function (e) {
                                        return e !== index + 19;
                                      }
                                    );

                                    selectBet(currentBet);
                                  } else {
                                    currentBet = selectedBets;
                                    currentBet.push(index + 19);
                                    selectBet(currentBet);
                                  }
                                }}
                              >
                                <div
                                  className={
                                    selectedBets.includes(index + 19)
                                      ? "bg-warning text-black rounded-circle"
                                      : ""
                                  }
                                >
                                  {" "}
                                  {index + 1}
                                </div>{" "}
                              </button>
                            );
                          })}
                        </div>
                        <div class="btn-group my-1 text-white">
                          {row5Color.map((color, index) => {
                            return (
                              <button
                                type="button"
                                className={
                                  "btn bg-" + color + " customBtn2 mx-1"
                                }
                                onClick={() => {
                                  if (selectedBets.includes(index + 25)) {
                                    var currentBet = selectedBets.filter(
                                      function (e) {
                                        return e !== index + 25;
                                      }
                                    );

                                    selectBet(currentBet);
                                  } else {
                                    currentBet = selectedBets;
                                    currentBet.push(index + 25);
                                    selectBet(currentBet);
                                  }
                                }}
                              >
                                <div
                                  className={
                                    selectedBets.includes(index + 25)
                                      ? "bg-warning text-black rounded-circle"
                                      : ""
                                  }
                                >
                                  {" "}
                                  {index + 25}
                                </div>{" "}
                              </button>
                            );
                          })}
                        </div>
                        <div class="btn-group my-1 text-white">
                          {row6Color.map((color, index) => {
                            return (
                              <button
                                type="button"
                                className={
                                  "btn bg-" + color + " customBtn2 mx-1"
                                }
                                onClick={() => {
                                  if (selectedBets.includes(index + 31)) {
                                    var currentBet = selectedBets.filter(
                                      function (e) {
                                        return e !== index + 31;
                                      }
                                    );

                                    selectBet(currentBet);
                                    console.log(selectedBets);
                                  } else {
                                    currentBet = selectedBets;
                                    currentBet.push(index + 31);
                                    selectBet(currentBet);
                                    console.log(selectedBets);
                                  }
                                }}
                              >
                                <div
                                  className={
                                    selectedBets.includes(index + 31)
                                      ? "bg-warning text-black rounded-circle"
                                      : ""
                                  }
                                >
                                  {" "}
                                  {index + 31}
                                </div>{" "}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div className="row">
                        <BottomTabs />
                      </div>
                    </div>
                    <div className="col-lg-7 ">
                      <Tabs
                        selectedBet={selectedBets}
                        selectBet={(value) => selectBet(value)}
                      />
                    </div>
                  </Fragment>
                )}
              </div>
            </div>

            <div className="col-lg-3 ">
              <RightSideBar
                setValue={(value) => props.setValue(value)}
                getValue={() => props.getValue()}
                selectedBets={selectedBets}
                selectBets={(value) => selectBet(value)}
                trigger={props.trigger}
                setTrigger={(value) => props.setTrigger(value)}
                ticketID={props.ticketID}
              />
            </div>
          </div>
          <div className="row">
            <Bottom />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
