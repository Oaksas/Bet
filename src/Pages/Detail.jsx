import { React } from "react";
import { useLocation } from "react-router-dom";
import "../Components/Css/homeCss.css";
import Messaging from "react-cssfx-loading/lib/Messaging";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";

function Detail() {
  // const [tempNews, setNews] = useState(null);

  const location = useLocation();
  const { Selectednews } = location.state ? location.state : "null";
  if (Selectednews)
    return (
      <div className="news  container-fluid py-5 px-3 mx-4">
        <h1>
          <RiIcons.RiNewspaperFill color="black" />
          {Selectednews.title}
        </h1>
        <img
          src={Selectednews.urlToImage}
          className="img-fluid"
          alt="News Image"
        />
        <div className="d-flex mt-2 ">
          <h3>
            <MdIcons.MdPersonalInjury color="darkorange" />
            {Selectednews.author}
          </h3>
        </div>
        <div className="mt-2 ">
          <h5>
            <BsIcons.BsFillClockFill color="darkorange" />
            {Selectednews.publishedAt}
          </h5>
        </div>
        <div className="container-fluid p-4 mt-3">
          <p>{Selectednews.content}</p>
        </div>
      </div>
    );
  else {
    return (
      <div className="news container-fluid">
        <Messaging color="#ff8500" width="25px" height="25px" duration="1s" />

        <h1>Loading News</h1>
      </div>
    );
  }
}

export default Detail;
