import { React, useState } from "react";
import "./Css/login.css";
import Messaging from "react-cssfx-loading/lib/Messaging";
import { useAlert } from "react-alert";
// import { authenticat, validateTerminal } from "../Functions/Credentials";
import axios from "axios";

export default function LogIn() {
  const [login, setLogin] = useState({ username: "", password: "" });
  const [processing, setProcessing] = useState(false);
  const alert = useAlert();
  const [isActive, setIsActive] = useState("");

  const handleOnChange = (e) => {
    setLogin((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  //credential
  // terminal: YQsQYL4eGmdz9/fa51/FXu5VNNYFtg4YwQtXX5prEQYxS6Ac8OuPaYikTq5zkjHqxvujkvKOlUdYYC7t
  //username: test
  //password: 12345

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.username === "" || login.password === "") {
      alert.show("Empty username or password");
    } else {
      setProcessing(true);

      var credential = {
        username: login.username,
        password: login.password,
      };
      if (localStorage.getItem("token")) {
        setProcessing(false);
        window.location.pathname = "/";
      }

      axios
        .post(
          "https://virtual-bet-frontend.herokuapp.com/api/account/login/",
          credential
        )
        .then((response) => {
          if (response.data.status === "success") {
            localStorage.setItem("token", response.data.token);
            setProcessing(false);

            window.location.pathname = "/";
          } else {
            setProcessing(false);

            alert.show("Incorrect Credential ");
          }
        })
        .catch((err) => {
          console.log("incorrect");
          setProcessing(false);

          alert.show("Incorrect Credential ");
        });
    }
  };

  if (!localStorage.getItem("terminal")) {
    window.location.pathname = "/terminal";
  } else {
    return (
      <div className='mainDiv center'>
        <form className='form-inline'>
          <div className='row'>
            <div className='form-group-sm mb-2 col-12 '>
              <input
                type='text'
                className='form-control '
                name='username'
                placeholder='Username'
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className='form-group mb-2 col'>
              <input
                type='text'
                className='form-control'
                name='password'
                placeholder='Password'
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className='row'>
              <div className=''></div>
              <div className='col-lg-2 center mt-3'>
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
                    className='btn btn-warning mb-2'
                    onClick={handleSubmit}
                  >
                    Login{" "}
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
