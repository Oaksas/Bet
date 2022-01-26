import NavBar from "./Components/NavBar";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Transaction from "./Pages/Transaction";
import TransactionSummary from "./Components/graph";

import { useState } from "react";

import "./App.css";

function App() {
  const [transactionSearched, setTransactionSearched] = useState("business");
  function searchTransaction(transactionNumber) {
    setTransactionSearched(transactionNumber);
  }
  function executeTransaction() {
    console.log(transactionSearched);
    return transactionSearched.trim();
  }
  return (
    <>
      <Router>
        <NavBar
          search={(transactionNo) => searchTransaction(transactionNo)}
          execute={() => executeTransaction()}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={<Home execute={() => executeTransaction()} />}
          />
          <Route
            path="/transactions"
            element={<Transaction execute={() => executeTransaction()} />}
          />
          <Route path="/summary" element={<TransactionSummary />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
