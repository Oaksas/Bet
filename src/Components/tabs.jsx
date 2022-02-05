import React from "react";
import { useState } from "react";
import "./Css/tabs.css";

function Tabs(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [totalBets, setTotalBets] = useState(0);
  const [oneTwelve, setOneTwelve] = useState(false);
  const [thirteenTwenty, setthirteenTwenty] = useState(false);
  const [twentyFiveThirty, settwentyFiveThirty] = useState(false);

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <small>Main</small>
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <small> SECTORS/FINALS</small>{" "}
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <small>EXTRA BETS</small>
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h4>Colours</h4>
          <hr />

          <div class="btn-group my-2">
            <button
              type="button"
              class="btn btnGray btn-lg mx-1"
              className={
                props.selectedBet.includes("Red")
                  ? "btn btnGray btn-lg bg-danger  mx-1"
                  : "btn btnGray btn-lg bg-white  mx-1"
              }
              onClick={() => {
                if (props.selectedBet.includes("Red")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "Red";
                  });

                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("Red");
                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                }
              }}
            >
              Red
            </button>
            <button
              type="button"
              className={
                props.selectedBet.includes("Black")
                  ? "btn btnGray btn-lg btnBlackCss active mx-1"
                  : "btn btnGray btn-lg bg-white  mx-1"
              }
              onClick={() => {
                if (props.selectedBet.includes("Black")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "Black";
                  });

                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("Black");
                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                }
              }}
            >
              Black
            </button>
            <button
              type="button"
              className={
                props.selectedBet.includes("Green")
                  ? "btn btnGray btn-lg btnGreenCss active mx-1"
                  : "btn btnGray btn-lg bg-white  mx-1"
              }
              onClick={() => {
                if (props.selectedBet.includes("Green")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "Green";
                  });

                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("Green");
                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                }
              }}
            >
              Green
            </button>
          </div>

          <h4>Dozens</h4>
          <hr />

          <div class="btn-group my-2">
            <button
              type="button"
              class={
                oneTwelve
                  ? "btn btnClicked btn-lg mx-1"
                  : "btn btnGray btn-lg mx-1"
              }
              onClick={() => {
                if (
                  props.selectedBet.includes(12) ||
                  props.selectedBet.includes(1)
                ) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== 1 && e !== 12;
                  });
                  console.log(props.selectedBet);

                  props.selectBet(currentBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push(1, 12);
                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                }
              }}
            >
              1 ~ 12
            </button>
            <button
              type="button"
              class="btn btnGray btn-lg mx-1"
              onClick={() => {
                if (
                  props.selectedBet.includes(13) ||
                  props.selectedBet.includes(24)
                ) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== 13 && e !== 24;
                  });

                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push(13, 24);
                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                }
              }}
            >
              13 ~ 24
            </button>
            <button
              type="button"
              class="btn btnGray btn-lg mx-1"
              onClick={() => {
                if (
                  props.selectedBet.includes(25) ||
                  props.selectedBet.includes(36)
                ) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== 25 && e !== 36;
                  });

                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push(25, 36);
                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                }
              }}
            >
              25 ~ 36
            </button>
          </div>

          <h4>Even / Odd</h4>
          <hr />

          <div class="btn-group my-2">
            <button
              type="button"
              class="btn btnGray btn-lg mx-1"
              onClick={() => {
                if (props.selectedBet.includes("Even")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "Even";
                  });

                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("Even");
                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                }
              }}
            >
              Even{" "}
            </button>
            <button
              type="button"
              class="btn btnGray btn-lg mx-1"
              onClick={() => {
                if (props.selectedBet.includes("Odd")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "Odd";
                  });

                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("Odd");
                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                }
              }}
            >
              Odd{" "}
            </button>
          </div>
          <h4>High / Low</h4>
          <hr />

          <div class="btn-group my-2">
            <button
              type="button"
              class="btn btnGray btn-lg mx-1"
              onClick={() => {
                if (props.selectedBet.includes("High")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "High";
                  });

                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("High");
                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                }
              }}
            >
              High{" "}
            </button>
            <button
              type="button"
              class="btn btnGray btn-lg mx-1"
              onClick={() => {
                if (props.selectedBet.includes("Low")) {
                  var currentBet = props.selectedBet.filter(function (e) {
                    return e !== "Low";
                  });

                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                } else {
                  currentBet = props.selectedBet;
                  currentBet.push("Low");
                  props.selectBet(currentBet);
                  console.log(props.selectedBet);
                }
              }}
            >
              Low{" "}
            </button>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h4>Second tab</h4>
          <hr />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h4>Third tab</h4>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Tabs;
