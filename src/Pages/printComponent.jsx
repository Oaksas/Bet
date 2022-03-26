import React from "react";

import * as GiIcons from "react-icons/gi";
var Barcode = require("react-barcode");
export const Ticket = React.forwardRef((props, ref) => {
  function time() {
    var currentdate = new Date();
    var datetime =
      currentdate.getDay() +
      "/" +
      currentdate.getMonth() +
      "/" +
      currentdate.getFullYear() +
      "  " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes();

    return datetime;
  }
  return (
    <div ref={ref} className="p-1">
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-lg-12">
              <small>PROVIDED BY</small>
            </div>
            <div className="col-lg-12">GOLDENRACE</div>
          </div>
        </div>
        <div className="col-4">
          {" "}
          <GiIcons.GiSpinningBlades size={40} /> <small>Spin to win</small>
        </div>
      </div>
      <div className="border border-dark">
        <div className="row">
          <div className="col-8">
            <small> Ticket ID</small>
          </div>
          <div className="col-4">
            <small>{props.ticketID}</small>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <small> Entity ID</small>
          </div>
          <div className="col-4">
            <small>576786</small>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <small> Printited on </small>
          </div>
          <div className="col-4">
            <small>{time()}</small>
          </div>
        </div>
      </div>
      <div className="border border-dark">
        {props.selectedBets.map((bets) => {
          return (
            <div className="row">
              <div className="col-8">
                <small>Number: {bets}</small>
              </div>
              <div className="col-4">
                <small>ብር {props.getValue}</small>
              </div>
            </div>
          );
        })}{" "}
      </div>
      <div className="border border-dark">
        {" "}
        <div className="row">
          <div className="col-8">
            <small> Total Stake </small>
          </div>
          <div className="col-4">
            <small>
              {" "}
              <b> {"ብር " + props.getValue * props.selectedBets.length}</b>
            </small>
          </div>
        </div>
      </div>

      <div className="border border-dark">
        {" "}
        <div className="row">
          <div className="col-8">
            <small> Total win </small>
          </div>
          <div className="col-4">
            <small>
              {" "}
              <b> {"ብር " + props.total}</b>
            </small>
          </div>
        </div>
      </div>
      <div className="border border-dark">
        {" "}
        <div className="row">
          <div className="col-8">
            <small> Maximum winning payout </small>
          </div>
          <div className="col-4">
            <small>
              {" "}
              <b> {"ብር " + 50000}</b>
            </small>
          </div>
        </div>
      </div>
      <div className="row mt-1">
        <Barcode value={props.ticketID} />
      </div>
    </div>
  );
});
