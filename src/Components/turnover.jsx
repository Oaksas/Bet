import { Fragment } from "react";
import "react-dropdown/style.css";
import "./Css/popup.css";

import * as GrIcons from "react-icons/gr";

export default function Turnover(props) {
  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-8 mx-4">
          <div className="row ">
            <div className="col-lg-7">
              <h5>TURNOVER</h5>
            </div>
            <div className="col-lg-1">
              <button className="btn elevatedBtn ">
                {" "}
                <GrIcons.GrFormRefresh size={20} />
              </button>{" "}
            </div>
            <div className="col-lg-1">
              <button className="btn elevatedBtn ">
                {" "}
                <GrIcons.GrPrint size={20} />
              </button>
            </div>
            <div className="col-lg-1">
              <button className="btn bg-black text-white ">
                <small>SETTLEMENTS</small>
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              NetBalance :
              <span className="text-success">
                <h5 className="d-inline">ብር 5</h5>
              </span>
            </div>
          </div>
          <div className="row overlayColor">
            <div className="col-lg-7 text-success">
              <small>Income</small>
            </div>
            <div className="col-lg-3 ">
              <small>Spin 2 Win Royals</small>
            </div>
            <div className="col-lg-2 ">
              <small>Total</small>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-7 border border-left ">
              <small>Gross Income</small>
            </div>
            <div className="col-lg-3 border border-left d-flex justify-content-end">
              <small></small>
            </div>
            <div className="col-lg-2 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-7 ">
              <small>Taxes</small>
            </div>
            <div className="col-lg-3 border border-left d-flex justify-content-end">
              <small></small>
            </div>
            <div className="col-lg-2 border border-left d-flex justify-content-end">
              <small>ብር 0</small>
            </div>
          </div>

          <div className="row  mb-3">
            <div className="col-lg-7 border border-left">
              <small>Net Income (Stake)</small>
            </div>
            <div className="col-lg-3 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
            <div className="col-lg-2 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
          </div>

          <div className="row overlayColor">
            <div className="col-lg-7 text-danger">
              <small>Outcome</small>
            </div>
            <div className="col-lg-3 ">
              <small>Spin 2 Win Royals</small>
            </div>
            <div className="col-lg-2 ">
              <small>Total</small>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-7 border border-left ">
              <small>Paid</small>
            </div>
            <div className="col-lg-3 border border-left d-flex justify-content-end">
              <small></small>
            </div>
            <div className="col-lg-2 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-7 ">
              <small>Jackpot Paid</small>
            </div>
            <div className="col-lg-3 border border-left d-flex justify-content-end">
              <small></small>
            </div>
            <div className="col-lg-2 border border-left d-flex justify-content-end">
              <small>ብር 0</small>
            </div>
          </div>

          <div className="row  ">
            <div className="col-lg-7 border border-left">
              <small>MegaJackPot Paid</small>
            </div>
            <div className="col-lg-3 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
            <div className="col-lg-2 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-7 border border-left">
              <small>Outcome</small>
            </div>
            <div className="col-lg-3 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
            <div className="col-lg-2 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-7 border border-left">
              <small>Payout Taxes</small>
            </div>
            <div className="col-lg-3 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
            <div className="col-lg-2 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-7 border border-left">
              <small> Taxes</small>
            </div>
            <div className="col-lg-3 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
            <div className="col-lg-2 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
          </div>
          <div className="row  mb-3">
            <div className="col-lg-7 border border-left">
              <small> Net total outcome</small>
            </div>
            <div className="col-lg-3 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
            <div className="col-lg-2 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-7 border border-left">
              <small> Balance</small>
            </div>
            <div className="col-lg-3 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
            <div className="col-lg-2 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-7 border border-left">
              <small> Taxes</small>
            </div>
            <div className="col-lg-3 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
            <div className="col-lg-2 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-7 border border-left">
              <small> Net Balance</small>
            </div>
            <div className="col-lg-3 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
            <div className="col-lg-2 border border-left d-flex justify-content-end">
              <small>ብር 45</small>
            </div>
          </div>
        </div>

        <div className="col-lg-3 overlayColor">
          <div className="row bg-secondary p-1">LATEST SETTLEMENTS</div>
        </div>
      </div>
    </Fragment>
  );
}
