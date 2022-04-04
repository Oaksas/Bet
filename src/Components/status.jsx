import { useState, useEffect, useRef } from "react";
import * as AiIcons from "react-icons/ai";
import "./Css/popup.css";
import axios from "axios";
import ReactToPrint from "react-to-print";
import { PayoutTicket } from "../Pages/payoutPrint";

export default function Status(props) {
  const [odds, setOdds] = useState([]);
  let componentRef = useRef();

  const payTable = () => {
    try {
      axios
        .get("https://virtual-bet-frontend.herokuapp.com/api/bet/odds")
        .then((response) => {
          // setOdds(response.data.odds);
          var temp = [];
          temp.push(
            response.data.odds.number,
            response.data.odds.green,
            response.data.odds.red,
            response.data.odds.black,
            response.data.odds.dozens,
            response.data.odds.low,
            response.data.odds.high,
            response.data.odds.odd,
            response.data.odds.even
          );
          setOdds(temp);
        });
    } catch (e) {
      console.log("Error loading the odds");
    }
  };

  useEffect(() => {
    // payTable();
  }, []);
  return props.status ? (
    <div className='popup p-3'>
      <div className='popupInnerPayOut px-2'>
        <div className={"row p-1 bg-primary"}>
          <div className='col-lg-12 center '>
            <div className='row m-2 text-white'>
              <div className='col-lg-12'>Status</div>
              <div className='col-lg-12'>
                <h6>PAIDOUT</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={"row p-1 innerRow"}>
          <div className='col-lg-12 '>
            <div className='row m-2 text-black'>
              <div className='col-lg-12'>SPIN 2 WIN ROYALS</div>
              <div className='col-lg-6 text-secondary'>
                BET TYPE:
                <div className='row'>
                  <div className='col-lg-12'> SINGLE</div>
                </div>
              </div>
              <div className='col-lg-6 text-secondary mb-2'>
                TICKET ID:
                <div className='row'>
                  <div className='col-lg-12'> SINGLE</div>
                </div>
              </div>

              <div className='col-lg-6 text-secondary'>
                DATE:
                <div className='row'>
                  <div className='col-lg-12'> 11/11/11 24:24</div>
                </div>
              </div>
              <div className='col-lg-6 text-secondary mb-2'>
                ISSUED BY:
                <div className='row'>
                  <div className='col-lg-12'> 5974234 -4433</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={"row p-1 "}>
          <div className='col-lg-12 '>
            <div className='row m-2 text-black'>
              <div className='col-lg-12'>
                TOTAL STAKE:
                <div className='row'>
                  <div className='col-lg-12'> ብር 10 </div>
                </div>
              </div>
              <div className='col-lg-6  mb-2'>
                <small> WON AMOUNT:</small>{" "}
                <div className='row'>
                  <div className='col-lg-12'> ብር 10</div>
                </div>
              </div>

              <div className='col-lg-6 '>
                NET AMOUNT:
                <div className='row'>
                  <div className='col-lg-12'> ብር 10</div>
                </div>
              </div>
              <div className='col-lg-12'>
                TOTAL WON:
                <div className='row'>
                  <div className='col-lg-12 text-success'> ብር 10 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row closeBtn mt-4'>
          <ReactToPrint
            trigger={() => (
              <button
                type='button'
                className='btn bg-primary closeBtn'
                onClick={() => props.setStatus(false)}
              >
                CLOSE{" "}
              </button>
            )}
            content={() => componentRef.current}
          />
        </div>

        <div className='d-none'>
          {" "}
          <PayoutTicket ref={componentRef} />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
