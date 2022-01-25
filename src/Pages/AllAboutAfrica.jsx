import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import "../Components/Css/homeCss.css";
import Weather from "../Components/Weather";
import axios from "axios";
import { useState, useEffect } from "react";
import Messaging from "react-cssfx-loading/lib/Messaging";
import { Link } from "react-router-dom";
import * as RiIcons from "react-icons/ri";

function Africa() {
  const url =
    "https://newsapi.org/v2/everything?q=Africa&apiKey=dda2bbd515a64537b0176995b68f3eba";

  const [news, setNews] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setNews(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  if (news) {
    return (
      <Fragment>
        <div>
          <div className="bg-image p-5">
            <h1>🅷🅴🅰🅳🅸🅽🅶🆂 🅰🅱🅾🆄🆃 🅰🅵🆁🅸🅲🅰</h1>

            {news.articles.map((news, index) => {
              return (
                <div className="card d-inline-flex col-lg-3  m-2 ">
                  <img
                    class="card-img-top"
                    src={news.urlToImage}
                    alt="Card image"
                  />
                  <div className="card-img-overlay">
                    <h3 className="card-title text-white">{news.title}</h3>
                    <h4 className="card-text text-white">{news.description}</h4>

                    <Link
                      to="/detail"
                      state={{ Selectednews: news }}
                      className="menu-bars className btn btn-warning"
                    >
                      {" "}
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}

            <div className="d-sm-none d-xs-none d-md-none d-lg-block d-inline-flex weather">
              <Weather className="rounded" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Messaging
        className="loading"
        color="#ff8500"
        width="25px"
        height="25px"
        duration="1s"
      />
    );
  }
}

export default Africa;
