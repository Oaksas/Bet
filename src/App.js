import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useState } from "react";
import "./App.css";
import TicketCheck from "./Components/ticketCheck";
import PayTable from "./Components/payTable";
import AdminShop from "./Components/shopAdmin";
function App() {
  const [stake, setStake] = useState(5);

  const [bets, setBet] = useState({ bets: "none" });
  const [ticketCheck, setTicketCheck] = useState(false);
  const [payTable, setPayTable] = useState(false);
  const [shopAdmin, setshopAdmin] = useState(false);
  const [ticketID, setTicketID] = useState(null);

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
        <TicketCheck
          trigger={ticketCheck}
          setTrigger={(value) => setTicketCheck(value)}
          ticketID={ticketID}
          setTicketID={(value) => setTicketID(value)}
        />
        <PayTable
          payTable={payTable}
          setPayTable={(value) => setPayTable(value)}
        />
        <AdminShop
          shopAdmin={shopAdmin}
          setshopAdmin={(value) => setshopAdmin(value)}
        />

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
                trigger={ticketCheck}
                setTrigger={(value) => setTicketCheck(value)}
                payTable={payTable}
                setPayTable={(value) => setPayTable(value)}
                shopAdmin={shopAdmin}
                setshopAdmin={(value) => setshopAdmin(value)}
                ticketID={ticketID}
                setTicketID={(value) => setTicketID(value)}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
