import { Fragment, useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./Css/popup.css";
import * as FcIcons from "react-icons/fc";
import * as GiIcons from "react-icons/gi";
import axios from "axios";
export default function Results(props) {
  const options = ["SPIN 2 WIN"];
  const defaultOption = options[0];
  const [result, setResult] = useState([]);
  const results = () => {
    try {
      axios
        .get(
          "https://virtual-bet-frontend.herokuapp.com/api/result/roundsresult/"
        )
        .then((response) => {
          console.log(response.data.results);
          setResult(response.data.results);
        });
    } catch (e) {
      setResult([]);
    }
  };
  useEffect(() => {
    results();
  }, []);
  return (
    <Fragment>
      <div className='row '>
        <div className='col-lg-12 mt-1 d-none-sm'>
          <h5>Results</h5>
        </div>
        <div className='col-lg-3 d-none-sm'>
          <Dropdown
            options={options}
            value={defaultOption}
            placeholder='Select an option'
            size='sm'
            className='verySmallText'
          />
        </div>
        <div className='col-lg-9 d-none-sm  d-flex justify-content-end'>
          <button className='btn bg-black text-white'>
            {" "}
            Print Last Results
          </button>
        </div>
      </div>

      <table class='table mt-2'>
        <thead className=''>
          <tr>
            <th scope='col'>
              <small>EventID</small>
            </th>
            <th scope='col'>
              <small>Date / Time</small>
            </th>
            <th scope='col'>
              <small>Results</small>
            </th>
            <th scope='col'>
              <small>Round</small>
            </th>
          </tr>
        </thead>
        <tbody>
          {result.map((result, key) => {
            return (
              <tr className='text-secondary'>
                <th scope='row'>
                  <small>3432e323</small>
                </th>
                <td>
                  <small>{result.created_at}</small>
                </td>

                <td>
                  <small>{result.result}</small>
                </td>
                <td>
                  <small>{result.round}</small>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}
