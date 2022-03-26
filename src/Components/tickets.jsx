import { Fragment, useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./Css/popup.css";
import * as FcIcons from "react-icons/fc";
import * as GiIcons from "react-icons/gi";
import axios from "axios";
export default function Tickets(props) {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  const [closedBets, setClosedBets] = useState([]);

  const closedTickets = () => {
    try {
      axios
        .get(
          "http://virtual-bet-frontend.herokuapp.com/api/ticket/closedtickets/"
        )
        .then((response) => {
          setClosedBets(response.data);
        });
    } catch (e) {
      setClosedBets([]);
    }
  };
  useEffect(() => {
    closedTickets();
  }, []);
  return (
    <Fragment>
      <div className="row ">
        <div className="col-lg-2 mt-1 d-none-sm">
          <h5>Tickets</h5>
        </div>
        <div className="col-lg-2 d-none-sm">
          <button className="btn bg-black text-white"> Refresh</button>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-lg-2  inlineDiv d-none-sm">
          <small>Show result from</small>
        </div>
        <div className="col-lg-2 d-none-sm ">
          <Dropdown
            options={options}
            value={defaultOption}
            placeholder="Select an option"
            size="sm"
          />
        </div>
        <div className="col-lg-3 inlineDiv">
          <small>Filter between dates From</small>
        </div>
        <div className="col-lg-2 mx-0">
          <Dropdown
            options={options}
            value={defaultOption}
            placeholder="Select an option"
            size="sm"
          />
        </div>
        <div className="col-lg-1 d-none-sm">To</div>{" "}
        <div className="col-lg-2 d-none-sm">
          <Dropdown
            options={options}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
        <div className="col-lg-1 d-none-sm">
          <button className="btn bg-black text-white">
            {" "}
            <small>APPLY</small>
          </button>
        </div>
      </div>
      <div className="overflow">
        <table class="table mt-2  ">
          <thead className="bg-secondary text-white">
            <tr>
              <th scope="col">
                <small>TicketID</small>
              </th>
              <th scope="col">
                <small>Date </small>
              </th>
              <th scope="col">
                <small>Print Status</small>
              </th>
              <th scope="col">
                <small>Issued By</small>
              </th>
              <th scope="col">
                <small>Event ID</small>
              </th>
              <th scope="col">
                <small>Game</small>
              </th>
              <th scope="col">
                <small>Round</small>
              </th>
              <th scope="col">
                <small>Stake</small>
              </th>
              <th scope="col">
                <small>Currency</small>
              </th>
              <th scope="col">
                <small>Status</small>
              </th>
            </tr>
          </thead>
          <tbody>
            {closedBets.map((ticket, key) => {
              return (
                <tr className="text-secondary ">
                  <th scope="row">
                    <small className="verySmallText">{ticket.id}</small>
                  </th>
                  <td>
                    <small>{ticket.created_at}</small>
                  </td>
                  <td>
                    <FcIcons.FcPrint />
                  </td>
                  <td>
                    <small>{ticket.cashier ? ticket.cashier : " "}</small>
                  </td>
                  <td>
                    <small>3444665</small>
                  </td>
                  <td>
                    <GiIcons.GiSpinningBlades /> <small>Spin to win</small>
                  </td>
                  <td>
                    <small>{ticket.round}</small>
                  </td>
                  <td>
                    <small>{ticket.stake}</small>
                  </td>

                  <td>
                    <small>ETH</small>
                  </td>
                  <td>
                    <small>{ticket.winStatus.toString()}</small>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
