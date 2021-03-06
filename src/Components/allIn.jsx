import { useState, useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import "./Css/popup.css";
import axios from "axios";
import { Fragment } from "react/cjs/react.production.min";
export default function AllIn(props) {
  return (
    <Fragment>
      <div className='row w-200'>
        <div className='col-lg-6'>
          <div className='row '>
            <div className='title d-inline mb-2'>All In</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>10</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>
              x25,000
            </div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>9</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>
              x18,750
            </div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>8</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>
              x12,500
            </div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>7</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>
              x3,750
            </div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>6</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>
              x1,500
            </div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>5</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>
              x375
            </div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>4</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>
              x200
            </div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>3</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse '>
              x50
            </div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>2</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>
              x10
            </div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>1</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x3</div>
          </div>{" "}
        </div>
        <div className='col-lg-6'>
          <div className='row '>
            <div className='title d-inline mb-2'>No Draw</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>10</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>
              x15
            </div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>9</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>
              x12
            </div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>8</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>
              x10
            </div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>7</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x7</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>6</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x5</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>5</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x4</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>4</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x3</div>
          </div>
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>3</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse '>
              x2
            </div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>2</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x1</div>
          </div>{" "}
          <div className='row innerRow mt-1'>
            <div className='col-lg-8 smallFont'>1</div>
            <div className='col-lg-2 smallFont d-flex flex-row-reverse'>x1</div>
          </div>{" "}
        </div>
      </div>
    </Fragment>
  );
}
