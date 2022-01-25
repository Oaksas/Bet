import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import "../Components/Css/homeCss.css";
import Cryptos from "../Components/Cryptos";
import axios from "axios";
import { useState, useEffect } from "react";
import Messaging from "react-cssfx-loading/lib/Messaging";
import * as MdIcons from "react-icons/md";
import * as FcIcons from "react-icons/fc";

function Home(props) {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.execute()}&apiKey=dda2bbd515a64537b0176995b68f3eba`;

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
        <div className="mainColor">
          <div className="bg-image p-5">
            {news.articles.map((news, index) => {
              return (
                <div class="card mb-3">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="https://www.verdict.co.uk/wp-content/uploads/2019/01/shutterstock_728180302-e1547115750181.jpg"
                        className="img-fluid rounded"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h6 class="card-title text-warning">
                          Transaction Number -
                          0xb5c8bd9430b6cc87a0e2fe110ece6bf527fa4f170a4bc8cd032f768fc5219838
                        </h6>
                        <p class="card-text ">
                          <h6>Account </h6>
                          <h6 className="text-warning">
                            0xb5c8bd9430b6cc87a0e2fe110ece6
                          </h6>
                        </p>
                        <p class="card-text">
                          <h6>
                            Transaction type -{" "}
                            <small className="text-warning">Type</small>{" "}
                          </h6>
                        </p>
                        <p class="card-text">
                          <h6>
                            Transaction Hash -{" "}
                            <small className="text-warning">
                              {" "}
                              0xb5c8bd9430b6cc87a0e2fe110ece6bf527fa4f170a4bc8cd032f768fc5219838
                            </small>{" "}
                          </h6>
                        </p>
                        <p class="card-text">
                          <h6>
                            Is mined -{" "}
                            <small className="text-warning">
                              {" "}
                              <FcIcons.FcApproval color="darkorange" />
                            </small>{" "}
                          </h6>
                        </p>
                        <p class="card-text">
                          <small class="text-muted">
                            <MdIcons.MdTimelapse color="darkorange" />3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="d-sm-none d-xs-none d-md-none d-lg-block d-inline-flex weather">
              <Cryptos className="rounded" />
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

export default Home;
