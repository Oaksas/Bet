import { useState, useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import "./Css/popup.css";
import axios from "axios";
import { Fragment } from "react/cjs/react.production.min";
export default function ExtraMarket(props) {
  return (
    <Fragment>
      <div className='row w-200'>
        <div className='col-lg-6'>
          <div className='row '>
            <div className='title d-inline mb-2'>Number Bets</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>First Single YES</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x7</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>First Single NO</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x1</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>Last Single YES</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x7</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>Last Single No</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x1</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>First Even</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x1</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>First Odd</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x1</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>Last Even</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x1</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>Last Odd</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse '>
              x1
            </div>
          </div>{" "}
        </div>
        <div className='col-lg-6'>
          <div className='row '>
            <div className='title d-inline mb-2'>Sum Bets</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>&lt; 810.5</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x1</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>&gt; 810.5</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x1</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>First &lt; 40.5</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x1</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>First &gt; 40.5</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x1</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>5 First &lt; 202.5</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x1</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>5 First &gt; 202.5</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x1</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>Last &lt; 40.5 </div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x1</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>Last &lt; 40.5</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse '>
              x1
            </div>
          </div>{" "}
        </div>
      </div>
    </Fragment>
  );
}
