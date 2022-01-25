import Messaging from "react-cssfx-loading/lib/Messaging";
import "./Css/weather.css";
import * as FaIcons from "react-icons/fa";

import axios from "axios";
import { useState, useEffect } from "react";
function Cryptos() {
  const url = "https://data.messari.io/api/v1/assets/eth/metrics";

  const [currencyInfo, setCurrencyInfo] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCurrencyInfo(response.data);
    });
  }, [url]);

  if (currencyInfo) {
    return (
      <div class="container  weatherDiv p-3">
        <div class="row">
          <div class="col-lg-4">
            {" "}
            <FaIcons.FaEthereum color="darkorange" size={"50"} />
          </div>
          <div class="col-lg-8">
            <div className="row">
              <div class="col-lg">1 ETH</div>
              <div class="col-lg">
                <FaIcons.FaDollarSign color="darkorange " size={"10"} />
                {currencyInfo.data.market_data.price_usd.toFixed(2)}
              </div>
            </div>
            <div className="row">
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
              </div>
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

export default Cryptos;
