import NavBar from "./Components/NavBar";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Transaction from "./Pages/Transaction";
import Detail from "./Pages/Detail";
import Tech from "./Pages/Tech";
import Africa from "./Pages/AllAboutAfrica";
import { useState } from "react";

import "./App.css";
// import axios from "axios";
// import { useEffect, useState } from "react";

function App() {
  const [transactionSearched, setTransactionSearched] = useState("");
  function searchTransaction(transactionNumber) {
    setTransactionSearched(transactionNumber);
  }
  function executeTransaction() {
    console.log(transactionSearched);
  }
  return (
    <>
      <Router>
        <NavBar
          search={(transactionNo) => searchTransaction(transactionNo)}
          execute={() => executeTransaction()}
        />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/predict" element={<Transaction />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/africa" element={<Africa />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
