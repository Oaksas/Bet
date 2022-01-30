import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

import { useState } from "react";

import "./App.css";

function App() {
  const [stake, setStake] = useState(5);

  const [bets, setBet] = useState({ bets: "none" });
  //stake function

  const setStakeValue = (value) => {
    setStake(value);
    console.log(stake);
  };
  const getStake = () => {
    return stake;
  };
  //bets function

  const getBets = () => {
    return bets;
  };
  const setBets = (bet) => {
    setBet(bet);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                setValue={(value) => setStakeValue(value)}
                getValue={() => getStake()}
                setBet={(value) => setBets(value)}
                getBet={() => getBets()}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
