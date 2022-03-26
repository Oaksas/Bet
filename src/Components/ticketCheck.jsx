import * as AiIcons from "react-icons/ai";
import "./Css/popup.css";
import axios from "axios";
import { useState } from "react";
export default function TicketCheck(props) {
  const alphabetCol1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const alphabetCol2 = ["K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U"];
  const alphabetCol3 = ["V", "W", "X", "Y", "Z"];
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [ticketNum, setTicketNum] = useState("");

  const setTicket = (val) => {
    var currentVal = ticketNum;
    setTicketNum(currentVal.concat(val));
  };
  const clearTicket = () => {
    setTicketNum("");
  };
  const checkTicket = () => {
    props.setTicketID(ticketNum);
    try {
      axios
        .post(
          "http://virtual-bet-frontend.herokuapp.com/api/bet/payout/",
          props.ticketID
        )
        .then((response) => {
          if (response.data.status === "success") {
            alert.show("Success ");
          } else {
            alert.show("Incorrect ");
          }
        });
    } catch (e) {
      alert.show("Incorrect Credential ");
    }
  };
  return props.trigger ? (
    <div className="popup p-3">
      <div className="popupInner p-3">
        <div className="row p-1">
          <div className="col-lg-11"></div>
          <div className="col-lg-1">
            <AiIcons.AiOutlineClose
              color="black"
              onClick={() => props.setTrigger(false)}
            />
          </div>
        </div>

        <div className="row center">
          <div className="col-lg-10 ">
            {" "}
            <b>Ticket ID</b>
          </div>
          <div className="col-lg-10 my-2">
            <input
              type="text"
              className="form-control"
              placeholder="XD4HS7"
              value={ticketNum}
            />
          </div>
          <div className="col-lg-10">
            <div class="btn-group my-1 text-white">
              {nums.map((num, index) => {
                return (
                  <button
                    type="button"
                    className={"btn alphaBtn  mx-1"}
                    onClick={() => setTicket(num)}
                  >
                    <b>{num}</b>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="col-lg-10 ">
            <div class="btn-group my-1 text-white">
              {alphabetCol1.map((letter, index) => {
                return (
                  <button
                    type="button"
                    className={"btn alphaBtn  mx-1"}
                    onClick={() => setTicket(letter)}
                  >
                    <b>{letter}</b>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="col-lg-10 ">
            <div class="btn-group my-1 text-white">
              {alphabetCol2.map((letter, index) => {
                return (
                  <button
                    type="button"
                    className={"btn alphaBtn  mx-1"}
                    onClick={() => setTicket(letter)}
                  >
                    <b>{letter}</b>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="col-lg-10 ">
            <div class="btn-group my-1 text-white">
              {alphabetCol3.map((letter, index) => {
                return (
                  <button
                    type="button"
                    className={"btn alphaBtn  mx-1"}
                    onClick={() => setTicket(letter)}
                  >
                    <b>{letter}</b>
                  </button>
                );
              })}{" "}
              <button
                type="button"
                className={"btn clearBtn  mx-1"}
                onClick={() => clearTicket()}
              >
                <b>CLEAR</b>
              </button>
              <button
                type="button"
                className={"btn okBtn  mx-1"}
                onClick={() => checkTicket()}
              >
                <b>OK</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
