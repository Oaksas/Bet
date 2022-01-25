import { useState } from "react";
import Axios from "axios";
import Hypnosis from "react-cssfx-loading/lib/Hypnosis";
const Transaction = () => {
  const [news, setNews] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const Pnews = JSON.stringify({ news: news });
    Axios.post("http://127.0.0.1:8000/predict/", Pnews, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setResult(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="create container">
      <form onSubmit={handleSubmit}>
        <div className="form-group container-fluid">
          <input
            type="text"
            className="form-control"
            value={news}
            onChange={(e) => setNews(e.target.value)}
            placeholder="Type the news"
          />
          <button type="submit" className="btn btn-warning mt-3">
            Test
          </button>
        </div>
      </form>

      <h2 className="my-5 offset-6">
        {" "}
        {result ? (
          result
        ) : (
          <Hypnosis
            color="#ff5b00"
            width="100px"
            height="100px"
            duration="1s"
          />
        )}
      </h2>
    </div>
  );
};

export default Transaction;
