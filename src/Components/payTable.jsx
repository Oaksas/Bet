import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import "./Css/popup.css";

export default function PayTable(props) {
  const [ticketStatus, setTicketStatus] = useState("primary");

  return props.payTable ? (
    <div className="popup p-3">
      <div className="popupInner px-2">
        <div className={"row p-1 bg-" + ticketStatus}>
          <div className="col-lg-11 ">
            <div className="row m-2 text-white">
              <div className="col-lg-12">Spin 2 Win Royale</div>
              <div className="col-lg-12">
                <h5>
                  <b>PAYTABLE</b>{" "}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-1 p-3">
            <AiIcons.AiOutlineClose
              color="white"
              size={25}
              onClick={() => props.setPayTable(false)}
            />
          </div>
        </div>

        <div className="row  p-3">
          <div className="col-lg-4  ">
            <div className="row ">
              <div className="title d-inline">Main</div>
              <div className="col-lg-12">
                {" "}
                <hr />
              </div>
            </div>

            <div className="row innerRow  mt-3">
              <div className="col-lg-10">Exact Number</div>
              <div className="col-lg-2">30</div>
            </div>
            <div className="row innerRow">
              <div className="col-lg-10">Red/ Black</div>
              <div className="col-lg-2">2</div>
            </div>
            <div className="row innerRow">
              <div className="col-lg-10">Green</div>
              <div className="col-lg-2">36</div>
            </div>

            <div className="row innerRow">
              <div className="col-lg-10">Dozens</div>
              <div className="col-lg-2">3</div>
            </div>
            <div className="row innerRow">
              <div className="col-lg-10">Even / Odd</div>
              <div className="col-lg-2">2</div>
            </div>
            <div className="row innerRow">
              <div className="col-lg-10">Low / High</div>
              <div className="col-lg-2">2</div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="row ">
              <div className="title d-inline">Finals/Sectors</div>
            </div>
            <div className="row innerRow mt-3">
              <div className="col-lg-10">Sectors</div>
              <div className="col-lg-2">6</div>
            </div>
            <div className="row innerRow">
              <div className="col-lg-10">Finals[0] </div>
              <div className="col-lg-2">9</div>
            </div>
            <div className="row innerRow">
              <div className="col-lg-10">Finals[1 - 6] </div>
              <div className="col-lg-2">9</div>
            </div>
          </div>
          <div className="col-lg-4 smallMargin">
            <div className="row">
              <div className="title d-inine">Extra Bets</div>
            </div>
            <div className="row innerRow mt-3">
              <div className="col-lg-10">Mirror</div>
              <div className="col-lg-2">18</div>
            </div>
            <div className="row innerRow">
              <div className="col-lg-10">Twins</div>
              <div className="col-lg-2">9</div>
            </div>
            <div className="row innerRow">
              <div className="col-lg-10">Low / High & Colour </div>
              <div className="col-lg-2">9</div>
            </div>
          </div>
        </div>

        <div className="row closeBtn mt-4">
          <button
            type="button"
            className="btn bg-primary closeBtn"
            onClick={() => props.setPayTable(false)}
          >
            CLOSE{" "}
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
