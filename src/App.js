import { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import CardForm from "./components/CardForm";
import Cards from "./components/Cards";
import Transaction from "./components/Transaction";
import History from "./components/History";
import { Route, Routes } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv2, setCvv2] = useState("");
  const [month, setMonth] = useState("");
  const [balance, setBalance] = useState("");
  const [formData, setFormData] = useState([]);
  const [transactionHistory, setTransactionHistory] = useState([]);

  console.log(formData);

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <div className="flex flex-row ">
        <SideBar className="m-24" />
        <div className="flex  w-full">
          <Routes>
            <Route
              path="/"
              element={
                <CardForm
                  setName={setName}
                  setBalance={setBalance}
                  setCardNumber={setCardNumber}
                  setCvv2={setCvv2}
                  setMonth={setMonth}
                  cardNumber={cardNumber}
                  cvv2={cvv2}
                  month={month}
                  balance={balance}
                  formData={formData}
                  setFormData={setFormData}
                  name={name}
                />
              }
            />
            
            <Route
              path="/transaction"
              element={
                <Transaction
                  formData={formData}
                  setFormData={setFormData}
                  transactionHistory={transactionHistory}
                  setTransactionHistory={setTransactionHistory}
                />
              }
            />
            <Route
              path="/history"
              element={<History transactionHistory={transactionHistory} />}
            />
          </Routes>
          <Cards formData={formData} className="min-w-screen" />
            
        </div>
      </div>
    </div>
  );
}

export default App;
