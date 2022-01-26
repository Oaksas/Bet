import Messaging from "react-cssfx-loading/lib/Messaging";
import "./Css/weather.css";
import * as FaIcons from "react-icons/fa";
import { ApiEndPoints } from "./Data/ApiEndpoints";
import axios from "axios";
import { useState, useEffect } from "react";
function Cryptos() {
  const url = `${ApiEndPoints[0]["cryptExchange"]}`;

  const [currencyInfo, setCurrencyInfo] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCurrencyInfo(response.data.rates);
    });
  }, [url]);
  if (currencyInfo) {
    return (
      <div class="container  weatherDiv p-3">
        <div class="row mb-1">
          <div class="col-lg-3">
            {" "}
            <FaIcons.FaEthereum color="darkorange" size={"30"} />
          </div>
          <div class="col-lg-9">
            <div className="row">
              <div class="col-lg">1 ETH</div>
              <div class="col-lg">
                <FaIcons.FaDollarSign color="darkorange " size={"10"} />
                {currencyInfo["ETH"].toFixed(2)}
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-1">
          <div class="col-lg-3">
            {" "}
            <FaIcons.FaBitcoin color="darkorange" size={"30"} />
          </div>
          <div class="col-lg-9">
            <div className="row">
              <div class="col-lg">1 BTC</div>
              <div class="col-lg">
                <FaIcons.FaDollarSign color="darkorange " size={"10"} />
                {currencyInfo["BTC"].toFixed(2)}
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-1">
          <div class="col-lg-3">
            {" "}
            <FaIcons.FaCoins color="darkorange" size={"30"} />
          </div>
          <div class="col-lg-9">
            <div className="row">
              <div class="col-lg">1 BNB</div>
              <div class="col-lg">
                <FaIcons.FaDollarSign color="darkorange " size={"10"} />
                {currencyInfo["BNB"].toFixed(2)}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
              <div class="col-lg">Active Addresses</div>
              <div class="col-lg">
                {
                  currencyInfo.data.blockchain_stats_24_hours
                    .count_of_active_addresses
                }
              </div>
            </div>
            <h4 className="text-white">All time high</h4>
            <div className="row">
              <div class="col-lg">
                {" "}
                <FaIcons.FaDollarSign color="darkorange" size={"10"} />
                {currencyInfo.data.all_time_high.price}
              </div>
              <div class="col-lg">
                <FaIcons.FaRegClock
                  color="darkorange "
                  className="mr-1"
                  size={"10"}
                />
                {currencyInfo.data.all_time_high.at}
              </div> */}
        {/* </div> */}
      </div>
    );
  } else {
    return (
      <Messaging color="#ff8500" width="25px" height="25px" duration="1s" />
    );
  }
}

export default Cryptos;
