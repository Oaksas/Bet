import Messaging from "react-cssfx-loading/lib/Messaging";
import "./Css/weather.css";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";

import axios from "axios";
import { useState, useEffect } from "react";
function Weather() {
  const url =
    "http://api.weatherapi.com/v1/current.json?key=f019046ce0ed4da2ad0160909221401 &q=Addis Ababa&aqi=no";

  const [weatherInfo, setWeather] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
  }, [url]);

  if (weatherInfo) {
    return (
      <div className="card d-xs-none d-inline-flex col-lg-3 rounded weatherDiv ">
        <div className="card p-4">
          <div className="d-flex">
            <h2>{weatherInfo.location.name}</h2>
            <p class="text-warning">{weatherInfo.location.country}</p>
          </div>
          <div className="d-flex flex-column temp mt-5 mb-3">
            <h1 className="mb-0 font-weight-bold" id="heading">
              13° C
            </h1>
            <span className="small grey">
              {weatherInfo.current.condition.text}
            </span>
          </div>
          <div className="d-flex">
            <div className="temp-details flex-grow-1">
              <p className="my-1">
                <img src="https://i.imgur.com/B9kqOzp.png" height="17px" />
                <span> {weatherInfo.current.wind_kph} km/h</span>
              </p>
              <p className="my-1">
                <i className="fa fa-tint mr-2" aria-hidden="true"></i>
                <span>
                  <GiIcons.GiWaterfall /> {weatherInfo.current.wind_kph}%
                </span>
              </p>
              <p class="my-1">
                <span>
                  <FaIcons.FaTemperatureHigh /> {weatherInfo.current.temp_c} °C
                </span>
              </p>
            </div>
            <div>
              <img
                className="img-fluid img-thumbnail weatherImg img-responsive"
                src={weatherInfo.current.condition.icon}
                width="100px"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Messaging color="#ff8500" width="25px" height="25px" duration="1s" />
    );
  }
}

export default Weather;
