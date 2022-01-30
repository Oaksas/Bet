import { React, useState } from "react";

import { Fragment } from "react/cjs/react.production.min";
import "../Components/Css/homeCss.css";
import "../Components/Css/navBar.css";
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
  const [selectedBets, selectBet] = useState([]);
  return (
    <Fragment>
      <div className="home ">
        <div className="bg-white ">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-12">
                  <NavBar getValue={() => props.getValue()} />
                </div>
                <div className="col-lg-5">
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
                              selectedBets.includes(index + 1)
                                ? "btn bg-primary customBtn2 mx-1"
                                : "btn bg-" + color + " customBtn2 mx-1"
                            }
                            onClick={() => {
                              if (selectedBets.includes(index + 1)) {
                                var currentBet = selectedBets.filter(function (
                                  e
                                ) {
                                  return e !== index + 1;
                                });

                                selectBet(currentBet);
                                console.log(selectedBets);
                              } else {
                                currentBet = selectedBets;
                                currentBet.push(index + 1);
                                selectBet(currentBet);
                                console.log(selectedBets);
                              }
                            }}
                          >
                            {index + 1}
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
                              selectedBets.includes(index + 7)
                                ? "btn bg-primary customBtn2 mx-1"
                                : "btn bg-" + color + " customBtn2 mx-1"
                            }
                            onClick={() => {
                              if (selectedBets.includes(index + 7)) {
                                var currentBet = selectedBets.filter(function (
                                  e
                                ) {
                                  return e !== index + 7;
                                });

                                selectBet(currentBet);
                                console.log(selectedBets);
                              } else {
                                currentBet = selectedBets;
                                currentBet.push(index + 7);
                                selectBet(currentBet);
                                console.log(selectedBets);
                              }
                            }}
                          >
                            {index + 7}
                          </button>
                        );
                      })}
                    </div>
                    <div class="btn-group my-1 text-white">
                      {row3Color.map((color, index) => {
                        return (
                          <button
                            type="button"
                            class={"btn bg-" + color + " customBtn2 mx-1"}
                            onClick={() => console.log(index + 13)}
                          >
                            {index + 13}
                          </button>
                        );
                      })}
                    </div>
                    <div class="btn-group my-1 text-white">
                      {row4Color.map((color, index) => {
                        return (
                          <button
                            type="button"
                            class={"btn bg-" + color + " customBtn2 mx-1"}
                            onClick={() => console.log(index + 19)}
                          >
                            {index + 19}
                          </button>
                        );
                      })}
                    </div>
                    <div class="btn-group my-1 text-white">
                      {row5Color.map((color, index) => {
                        return (
                          <button
                            type="button"
                            class={"btn bg-" + color + " customBtn2 mx-1"}
                            onClick={() => console.log(index + 25)}
                          >
                            {index + 25}
                          </button>
                        );
                      })}
                    </div>
                    <div class="btn-group my-1 text-white">
                      {row6Color.map((color, index) => {
                        return (
                          <button
                            type="button"
                            class={"btn bg-" + color + " customBtn2 mx-1"}
                            onClick={() => console.log(index + 31)}
                          >
                            {index + 31}
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
              </div>
            </div>

            <div className="col-lg-3 ">
              <RightSideBar
                setValue={(value) => props.setValue(value)}
                getValue={() => props.getValue()}
                selectedBets={selectedBets}
                selectBets={(value) => selectBet(value)}
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
