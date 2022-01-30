import React from "react";
import "./Css/tabs.css";
import * as RiIcons from "react-icons/ri";

function Bottom() {
  return (
    <div class="btn-group my-2 ">
      <button type="button" class="btn btnBottom2  btn-lg">
        <div className="row">
          <div className="col-lg-1">
            {" "}
            <RiIcons.RiCarFill color="white" className="m-1" size={30} />
          </div>
          <div className="col-lg-10 text-white">
            <div className="row text-warning">
              <small>G6</small>
            </div>
            <div className="row">
              <h6>GRAYHOUNDS RACING</h6>
            </div>
          </div>
        </div>
      </button>
      <button type="button" class="btn btnBottom2  btn-lg">
        <div className="row">
          <div className="col-lg-1">
            {" "}
            <RiIcons.RiNumber8 color="white" className="m-1" size={30} />
          </div>
          <div className="col-lg-10 text-white">
            <div className="row text-warning">
              <small>Kene Deluxe</small>
            </div>
            <div className="row">
              <h6>KENO</h6>
            </div>
          </div>
        </div>
      </button>
      <button type="button" class="btn btnBottom2  btn-lg">
        <div className="row">
          <div className="col-lg-1">
            {" "}
            <RiIcons.RiFootballFill color="white" className="m-1" size={30} />
          </div>
          <div className="col-lg-10 text-white">
            <div className="row text-warning">
              <small>Ethiopia League</small>
            </div>
            <div className="row">
              <h6>LEAGUE</h6>
            </div>
          </div>
        </div>
      </button>
      <button type="button" class="btn btnBottom2 btnClicked btn-lg">
        <div className="row">
          <div className="col-lg-1">
            {" "}
            <RiIcons.RiBasketballFill color="white" className="m-1" size={30} />
          </div>
          <div className="col-lg-10 text-white">
            <div className="row text-warning">
              <small>Spin 2 Win Royale</small>
            </div>
            <div className="row">
              <h6>SPIN 2 WIN</h6>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Bottom;
