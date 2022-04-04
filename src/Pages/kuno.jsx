import { React, useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import SpinStretch from "react-cssfx-loading/lib/SpinStretch";
import axios from "axios";
import { Fragment } from "react/cjs/react.production.min";
import "../Components/Css/navBar.css";
import "../Components/Css/popup.css";
import "../Components/Css/homeCss.css";

import { useParams } from "react-router-dom";
import TabsKuno from "../Components/tabsKuno";
import BottomTabs from "../Components/bottomTabs";
import Bottom from "../Components/Bottom";
import RightSideBar from "../Components/rightSideBar";
import NavBar from "../Components/NavBar";
import { cols } from "../Functions/utils";
function Kuno(props) {
  //onclick Listeners

  const rowColor = [
    "secondary",

    "secondary",
    "secondary",
    "secondary",
    "secondary",
    "secondary",
    "secondary",
    "secondary",
    "secondary",
    "secondary",
  ];

  const [timer, setTimer] = useState("00:00");
  const [disable, setDisable] = useState(false);
  const [odds, setOdds] = useState([]);
  let { id } = useParams();
  const betsMaxLength = 10;

  const [selectedBets, selectBet] = useState([]);
  const Odd = () => {
    try {
      axios
        .get("https://virtual-bets.herokuapp.com/api/bet/odds")
        .then((response) => {
          // setOdds(response.data.odds);
          var temp = [];
          temp.push(
            response.data.odds.number,
            response.data.odds.green,
            response.data.odds.red,
            response.data.odds.black,
            response.data.odds.dozens,
            response.data.odds.low,
            response.data.odds.high,
            response.data.odds.odd,
            response.data.odds.even
          );
          setOdds(temp);
        });
    } catch (e) {
      console.log("Error loading the odds");
    }
  };
  useEffect(() => {
    const socket = socketIOClient("https://virtual-bets.herokuapp.com/");
    socket.on("FromAPI", (data) => {
      setTimer(data.minute + ":" + data.second);
      setDisable(data.pause);
    });
    Odd();
    props.setKunoActive(true);
  }, []);
  if (!localStorage.getItem("token")) {
    window.location.pathname = "/login";
  } else {
    return (
      <Fragment>
        <div className='home homepage '>
          <div className='bg-white '>
            <div className='row'>
              <div className='col-lg-9'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <NavBar
                      setshopAdminKuno={(value) =>
                        props.setshopAdminKuno(value)
                      }
                      shopAdminKuno={props.shopAdminKuno}
                      kunoActive={props.kunoActive}
                      getValue={() => props.getValue()}
                      payTable={props.payTable}
                      setPayTable={(value) => props.setPayTable(value)}
                      shopAdmin={props.shopAdmin}
                      setshopAdmin={(value) => props.setshopAdmin(value)}
                      timer={timer}
                      id={() => props.match.params.id}
                    />
                  </div>
                  {disable ? (
                    <Fragment>
                      {" "}
                      <div className='col-lg-12 overlayStop'>
                        <div className='center'>
                          <SpinStretch
                            color='#ff5b00'
                            width='100px'
                            height='100px'
                            duration='1s'
                          />
                          <div className=' display-4 ml-1'> MARKET CLOSED</div>
                        </div>
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      {" "}
                      <div className='col-lg-5 '>
                        <div className='row'>
                          <div className='col-6'>
                            <h2 className='titleGame'>Pick a number</h2>
                          </div>
                          <div className='col-6'>
                            <div className='row  mt-1 '>
                              <button
                                className={
                                  props.gameTypeKuno === "numbers"
                                    ? "col-3 btn btn-primary margin-right btn-sm "
                                    : "col-3 btn btn-outline-primary margin-right btn-sm "
                                }
                                onClick={() => props.setGameTypeKuno("numbers")}
                              >
                                <h6 className='smallFont'>Numbers</h6>
                              </button>{" "}
                              <button
                                className={
                                  props.gameTypeKuno === "allIn"
                                    ? "col-3 btn btn-primary margin-right btn-sm "
                                    : "col-3 btn btn-outline-primary margin-right btn-sm "
                                }
                                onClick={() => props.setGameTypeKuno("allIn")}
                              >
                                {" "}
                                <h6 className='smallFont'>ALL-IN</h6>
                              </button>{" "}
                              <button
                                className={
                                  props.gameTypeKuno === "noDraw"
                                    ? "col-4 btn btn-primary  btn-sm "
                                    : "col-4 btn btn-outline-primary  btn-sm "
                                }
                                onClick={() => props.setGameTypeKuno("noDraw")}
                              >
                                {" "}
                                <h6 className='smallFont'>NO DRAW</h6>
                              </button>{" "}
                            </div>{" "}
                          </div>

                          <div class='btn-group my-1 text-white'>
                            <button
                              type='button'
                              className={"btn btn-secondary customBtn3 mx-1"}
                              onClick={() => {
                                for (let index = 0; index < 10; index++) {
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
                                    if (!(currentBet.length >= betsMaxLength)) {
                                      currentBet.push(index + 1);
                                    }

                                    selectBet(currentBet);
                                  }
                                }
                              }}
                            >
                              &lt;
                            </button>
                            {rowColor.map((color, index) => {
                              return (
                                <button
                                  type='button'
                                  className={
                                    selectedBets.includes(index + 1)
                                      ? "btn bg-primary   customBtn3 mx-1"
                                      : "btn bg-" + color + " customBtn3 mx-1"
                                  }
                                  onClick={() => {
                                    let currentBet;
                                    if (selectedBets.includes(index + 1)) {
                                      currentBet = selectedBets.filter(
                                        function (e) {
                                          return e !== index + 1;
                                        }
                                      );

                                      selectBet(currentBet);
                                    } else {
                                      currentBet = selectedBets;
                                      if (
                                        !(currentBet.length >= betsMaxLength)
                                      ) {
                                        currentBet.push(index + 1);
                                      }

                                      selectBet(currentBet);
                                    }
                                  }}
                                >
                                  <div> {index + 1}</div>
                                </button>
                              );
                            })}
                          </div>
                          <div class='btn-group my-1 text-white'>
                            <button
                              type='button'
                              className={"btn btn-secondary customBtn3 mx-1"}
                              onClick={() => {
                                for (let index = 10; index < 20; index++) {
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
                                    if (!(currentBet.length >= betsMaxLength)) {
                                      currentBet.push(index + 1);
                                    }

                                    selectBet(currentBet);
                                  }
                                }
                              }}
                            >
                              &lt;
                            </button>
                            {rowColor.map((color, index) => {
                              return (
                                <button
                                  type='button'
                                  className={
                                    selectedBets.includes(index + 11)
                                      ? "btn bg-primary   customBtn3 mx-1"
                                      : "btn bg-" + color + " customBtn3 mx-1"
                                  }
                                  onClick={() => {
                                    if (selectedBets.includes(index + 11)) {
                                      var currentBet = selectedBets.filter(
                                        function (e) {
                                          return e !== index + 11;
                                        }
                                      );

                                      selectBet(currentBet);
                                    } else {
                                      currentBet = selectedBets;
                                      if (
                                        !(currentBet.length >= betsMaxLength)
                                      ) {
                                        currentBet.push(index + 11);
                                      }
                                      selectBet(currentBet);
                                    }
                                  }}
                                >
                                  <div> {index + 11}</div>{" "}
                                </button>
                              );
                            })}
                          </div>

                          <div class='btn-group my-1 text-white'>
                            <button
                              type='button'
                              className={"btn btn-secondary customBtn3 mx-1"}
                              onClick={() => {
                                for (let index = 20; index < 30; index++) {
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
                                    if (!(currentBet.length >= betsMaxLength)) {
                                      currentBet.push(index + 1);
                                    }

                                    selectBet(currentBet);
                                  }
                                }
                              }}
                            >
                              &lt;
                            </button>
                            {rowColor.map((color, index) => {
                              return (
                                <button
                                  type='button'
                                  className={
                                    selectedBets.includes(index + 21)
                                      ? "btn bg-primary   customBtn3 mx-1"
                                      : "btn bg-" + color + " customBtn3 mx-1"
                                  }
                                  onClick={() => {
                                    if (selectedBets.includes(index + 21)) {
                                      var currentBet = selectedBets.filter(
                                        function (e) {
                                          return e !== index + 21;
                                        }
                                      );

                                      selectBet(currentBet);
                                    } else {
                                      currentBet = selectedBets;
                                      if (
                                        !(currentBet.length >= betsMaxLength)
                                      ) {
                                        currentBet.push(index + 21);
                                      }
                                      selectBet(currentBet);
                                    }
                                  }}
                                >
                                  <div> {index + 21}</div>{" "}
                                </button>
                              );
                            })}
                          </div>
                          <div class='btn-group my-1 text-white'>
                            <button
                              type='button'
                              className={"btn btn-secondary customBtn3 mx-1"}
                              onClick={() => {
                                for (let index = 30; index < 40; index++) {
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
                                    if (!(currentBet.length >= betsMaxLength)) {
                                      currentBet.push(index + 1);
                                    }

                                    selectBet(currentBet);
                                  }
                                }
                              }}
                            >
                              &lt;
                            </button>
                            {rowColor.map((color, index) => {
                              return (
                                <button
                                  type='button'
                                  className={
                                    selectedBets.includes(index + 31)
                                      ? "btn bg-primary   customBtn3 mx-1"
                                      : "btn bg-" + color + " customBtn3 mx-1"
                                  }
                                  onClick={() => {
                                    if (selectedBets.includes(index + 31)) {
                                      var currentBet = selectedBets.filter(
                                        function (e) {
                                          return e !== index + 31;
                                        }
                                      );

                                      selectBet(currentBet);
                                    } else {
                                      currentBet = selectedBets;
                                      if (
                                        !(currentBet.length >= betsMaxLength)
                                      ) {
                                        currentBet.push(index + 31);
                                      }
                                      selectBet(currentBet);
                                    }
                                  }}
                                >
                                  <div> {index + 31}</div>{" "}
                                </button>
                              );
                            })}
                          </div>
                          <div class='btn-group my-1 text-white'>
                            <button
                              type='button'
                              className={"btn btn-secondary customBtn3 mx-1"}
                              onClick={() => {
                                for (let index = 40; index < 50; index++) {
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
                                    if (!(currentBet.length >= betsMaxLength)) {
                                      currentBet.push(index + 1);
                                    }

                                    selectBet(currentBet);
                                  }
                                }
                              }}
                            >
                              &lt;
                            </button>
                            {rowColor.map((color, index) => {
                              return (
                                <button
                                  type='button'
                                  className={
                                    selectedBets.includes(index + 41)
                                      ? "btn bg-primary   customBtn3 mx-1"
                                      : "btn bg-" + color + " customBtn3 mx-1"
                                  }
                                  onClick={() => {
                                    if (selectedBets.includes(index + 41)) {
                                      var currentBet = selectedBets.filter(
                                        function (e) {
                                          return e !== index + 41;
                                        }
                                      );

                                      selectBet(currentBet);
                                    } else {
                                      currentBet = selectedBets;
                                      if (
                                        !(currentBet.length >= betsMaxLength)
                                      ) {
                                        currentBet.push(index + 41);
                                      }
                                      selectBet(currentBet);
                                    }
                                  }}
                                >
                                  <div> {index + 41}</div>{" "}
                                </button>
                              );
                            })}
                          </div>
                          <div class='btn-group my-1 text-white'>
                            <button
                              type='button'
                              className={"btn btn-secondary customBtn3 mx-1"}
                              onClick={() => {
                                for (let index = 50; index < 60; index++) {
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
                                    if (!(currentBet.length >= betsMaxLength)) {
                                      currentBet.push(index + 1);
                                    }

                                    selectBet(currentBet);
                                  }
                                }
                              }}
                            >
                              &lt;
                            </button>
                            {rowColor.map((color, index) => {
                              return (
                                <button
                                  type='button'
                                  className={
                                    selectedBets.includes(index + 51)
                                      ? "btn bg-primary   customBtn3 mx-1"
                                      : "btn bg-" + color + " customBtn3 mx-1"
                                  }
                                  onClick={() => {
                                    if (selectedBets.includes(index + 51)) {
                                      var currentBet = selectedBets.filter(
                                        function (e) {
                                          return e !== index + 51;
                                        }
                                      );

                                      selectBet(currentBet);
                                      console.log(selectedBets);
                                    } else {
                                      currentBet = selectedBets;
                                      if (
                                        !(currentBet.length >= betsMaxLength)
                                      ) {
                                        currentBet.push(index + 51);
                                      }
                                      selectBet(currentBet);
                                      console.log(selectedBets);
                                    }
                                  }}
                                >
                                  <div> {index + 51}</div>{" "}
                                </button>
                              );
                            })}
                          </div>
                          <div class='btn-group my-1 text-white'>
                            <button
                              type='button'
                              className={"btn btn-secondary customBtn3 mx-1"}
                              onClick={() => {
                                for (let index = 60; index < 70; index++) {
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
                                    if (!(currentBet.length >= betsMaxLength)) {
                                      currentBet.push(index + 1);
                                    }

                                    selectBet(currentBet);
                                  }
                                }
                              }}
                            >
                              &lt;
                            </button>
                            {rowColor.map((color, index) => {
                              return (
                                <button
                                  type='button'
                                  className={
                                    selectedBets.includes(index + 61)
                                      ? "btn bg-primary  customBtn3 mx-1"
                                      : "btn bg-" + color + "  customBtn3 mx-1"
                                  }
                                  onClick={() => {
                                    if (selectedBets.includes(index + 61)) {
                                      var currentBet = selectedBets.filter(
                                        function (e) {
                                          return e !== index + 61;
                                        }
                                      );

                                      selectBet(currentBet);
                                      console.log(selectedBets);
                                    } else {
                                      currentBet = selectedBets;
                                      if (
                                        !(currentBet.length >= betsMaxLength)
                                      ) {
                                        currentBet.push(index + 61);
                                      }
                                      selectBet(currentBet);
                                      console.log(selectedBets);
                                    }
                                  }}
                                >
                                  <div> {index + 61}</div>{" "}
                                </button>
                              );
                            })}
                          </div>
                          <div class='btn-group my-1 text-white'>
                            <button
                              type='button'
                              className={"btn btn-secondary customBtn3 mx-1"}
                              onClick={() => {
                                for (let index = 70; index < 80; index++) {
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
                                    if (!(currentBet.length >= betsMaxLength)) {
                                      currentBet.push(index + 1);
                                    }

                                    selectBet(currentBet);
                                  }
                                }
                              }}
                            >
                              &lt;
                            </button>
                            {rowColor.map((color, index) => {
                              return (
                                <button
                                  type='button'
                                  className={
                                    selectedBets.includes(index + 71)
                                      ? "btn bg-primary  customBtn3 mx-1"
                                      : "btn bg-" + color + "  customBtn3 mx-1"
                                  }
                                  onClick={() => {
                                    if (selectedBets.includes(index + 71)) {
                                      var currentBet = selectedBets.filter(
                                        function (e) {
                                          return e !== index + 71;
                                        }
                                      );

                                      selectBet(currentBet);
                                      console.log(selectedBets);
                                    } else {
                                      currentBet = selectedBets;
                                      if (
                                        !(currentBet.length >= betsMaxLength)
                                      ) {
                                        currentBet.push(index + 71);
                                      }
                                      selectBet(currentBet);
                                      console.log(selectedBets);
                                    }
                                  }}
                                >
                                  <div> {index + 71}</div>{" "}
                                </button>
                              );
                            })}
                          </div>
                          <div class='btn-group my-1 text-white'>
                            <button
                              type='button'
                              className={"btn bg-white customBtn3 mx-1"}
                            >
                              SPACE
                            </button>
                            {rowColor.map((color, index) => {
                              return (
                                <button
                                  type='button'
                                  className={
                                    "btn bg-" + color + " customBtn3 mx-1"
                                  }
                                  onClick={() => {
                                    for (let row = 0; row < index; row++) {
                                      let values = cols(index + 1);
                                      selectBet(values);
                                    }
                                  }}
                                >
                                  ^
                                </button>
                              );
                            })}
                          </div>
                        </div>
                        <div className='row'>
                          <BottomTabs />
                        </div>
                      </div>
                      <div className='col-lg-7 '>
                        <TabsKuno
                          selectedBet={selectedBets}
                          selectBet={(value) => selectBet(value)}
                        />
                      </div>
                    </Fragment>
                  )}
                </div>
              </div>

              <div className='col-lg-3 '>
                <RightSideBar
                  setValue={(value) => props.setValue(value)}
                  getValue={() => props.getValue()}
                  selectedBets={selectedBets}
                  selectBets={(value) => selectBet(value)}
                  trigger={props.trigger}
                  setTrigger={(value) => props.setTrigger(value)}
                  ticketID={props.ticketID}
                  setTicketID={(value) => props.setTicketID(value)}
                  odds={odds}
                  setTotal={(value) => props.setTotal(value)}
                  total={props.total}
                  maxWin={props.maxWin}
                />
              </div>
            </div>
            <div className='row'>
              <Bottom />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Kuno;
