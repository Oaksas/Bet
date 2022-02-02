import { Fragment } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./Css/popup.css";
import * as FcIcons from "react-icons/fc";
import * as GiIcons from "react-icons/gi";

export default function Results(props) {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  return (
    <Fragment>
      <div className="row ">
        <div className="col-lg-12 mt-1 d-none-sm">
          <h5>Results</h5>
        </div>
        <div className="col-lg-2 d-none-sm">
          <Dropdown
            options={options}
            value={defaultOption}
            placeholder="Select an option"
            size="sm"
          />
        </div>
        <div className="col-lg-10 d-none-sm  d-flex justify-content-end">
          <button className="btn bg-black text-white">
            {" "}
            Print Last Results
          </button>
        </div>
      </div>

      <table class="table mt-2">
        <thead className="">
          <tr>
            <th scope="col">
              <small>TicketID</small>
            </th>
            <th scope="col">
              <small>Date / Time</small>
            </th>
            <th scope="col">
              <small>Results</small>
            </th>
            <th scope="col">
              <small>Win</small>
            </th>
            <th scope="col">
              <small>Place(1-2)</small>
            </th>
            <th scope="col">
              <small>Show(1-3)</small>
            </th>
            <th scope="col">
              <small>Exacta</small>
            </th>
            <th scope="col">
              <small>Quinella</small>
            </th>
            <th scope="col">
              <small>Trifecta</small>
            </th>
            <th scope="col">
              <small>Even /Odd </small>
            </th>
            <th scope="col">
              <small>Over / Under</small>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-secondary">
            <th scope="row">
              <small>3432e323</small>
            </th>
            <td>
              <small>28/01/2022 21:00</small>
            </td>
            <td>
              <FcIcons.FcPrint />
            </td>
            <td>
              <small>34445</small>
            </td>
            <td>
              <small>3444665</small>
            </td>
            <td>
              <GiIcons.GiSpinningBlades /> <small>Spin to win</small>
            </td>
            <td>
              <small>Single</small>
            </td>
            <td>
              <small>15</small>
            </td>

            <td>
              <small>ETH</small>
            </td>
            <td>
              <small>Lost</small>
            </td>
            <td className="text-primary">
              <small>DETAILS</small>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}
