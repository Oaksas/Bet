import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useState } from "react";
import "./App.css";
import TicketCheck from "./Components/ticketCheck";
import PayTable from "./Components/payTable";
import TerminalCheck from "./Components/terminalCheck";
import LogIn from "./Components/logIn";
import Status from "./Components/status";
import Kuno from "./Pages/kuno";
import AdminShopKuno from "./Components/shopAdminKuno";
import AdminShop from "./Components/shopAdmin";
function App() {
  const [stake, setStake] = useState(5);

  const [bets, setBet] = useState({ bets: "none" });
  const [ticketCheck, setTicketCheck] = useState(false);
  const [payTable, setPayTable] = useState(false);
  const [shopAdmin, setshopAdmin] = useState(false);
  const [shopAdminKuno, setshopAdminKuno] = useState(false);

  const [ticketID, setTicketID] = useState(null);
  const [total, setTotal] = useState(0);
  const [maxWin, setMaxWin] = useState(50000);
  const [status, setStatus] = useState(false);
  const [kunoActive, setKunoActive] = useState(false);
  const [gameTypeKuno, setGameTypeKuno] = useState("allIn");

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
        <Status status={status} setStatus={(value) => setStatus(value)} />

        <AdminShop
          shopAdmin={shopAdmin}
          setshopAdmin={(value) => setshopAdmin(value)}
        />

        <AdminShopKuno
          shopAdminKuno={shopAdminKuno}
          setshopAdminKuno={(value) => setshopAdminKuno(value)}
        />

        <Routes>
          <Route
            path='/'
            element={
              <Home
                shopAdminKuno={shopAdminKuno}
                setshopAdminKuno={(value) => setshopAdminKuno(value)}
                kunoActive={kunoActive}
                setKunoActive={(value) => setKunoActive(value)}
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
                setTotal={(value) => setTotal(value)}
                total={total}
                maxWin={maxWin}
              />
            }
          />
          <Route
            path='/kuno'
            element={
              <Kuno
                gameTypeKuno={gameTypeKuno}
                setGameTypeKuno={(value) => setGameTypeKuno(value)}
                shopAdminKuno={shopAdminKuno}
                setshopAdminKuno={(value) => setshopAdminKuno(value)}
                kunoActive={kunoActive}
                setKunoActive={(value) => setKunoActive(value)}
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
                setTotal={(value) => setTotal(value)}
                total={total}
                maxWin={maxWin}
              />
            }
          />
          <Route
            path='/:id'
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
                setTotal={(value) => setTotal(value)}
                total={total}
                maxWin={maxWin}
                setStatus={(value) => setStatus(value)}
              />
            }
          />
          <Route path='/login' exact element={<LogIn />} />
          <Route path='/terminal' exact element={<TerminalCheck />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
