import { React, useState } from "react";
import "./Css/login.css";
import axios from "axios";

import * as GiIcons from "react-icons/gi";
import getTerminal from "../Functions/Credentials";
import Messaging from "react-cssfx-loading/lib/Messaging";
import { useAlert } from "react-alert";
export default function TerminalCheck() {
  const [terminalToken, setTerminalToken] = useState({ token: "" });
  const [processing, setProcessing] = useState(false);
  const alert = useAlert();

  const handleOnChange = (e) => {
    setTerminalToken((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (terminalToken.token === "") {
      alert.show("Empty Token");
    } else {
      setProcessing(true);
      axios
        .get(
          "https://virtual-bet-frontend.herokuapp.com/api/terminal/" +
            terminalToken.token.replace("+", "%2B").replace("/", "%2F")
        )
        .then((response) => {
          console.log(response);
          if (response.data.status === "success") {
            localStorage.setItem("terminal", terminalToken.token);
            setProcessing(false);
            window.location.pathname = "/login";
          } else {
            setProcessing(false);
            alert.show("Incorrect credential");
          }
        });
    }
  };

  if (localStorage.getItem("terminal")) {
    window.location.pathname = "/login";
  } else {
    return (
      <div className='mainDiv center'>
        <form class='form-inline col-lg-8'>
          <div class='row'>
            <div class='form-group mb-2 col-12'>
              <input
                type='text'
                class='form-control'
                name='token'
                placeholder='Terminal Token'
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div class='col'>
              {processing ? (
                <Messaging
                  color='#ff5b00'
                  width='10px'
                  height='10px'
                  duration='1s'
                />
              ) : (
                <button
                  type='submit'
                  class='btn btn-warning mb-2'
                  onClick={handleSubmit}
                >
                  Confirm Identity
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
