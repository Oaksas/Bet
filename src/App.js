import NavBar from "./Components/NavBar";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Transaction from "./Pages/Transaction";

import { useState } from "react";

import "./App.css";
// import axios from "axios";
// import { useEffect, useState } from "react";

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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
