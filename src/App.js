import { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import CardForm from './components/CardForm';
import Cards from './components/Cards';
import Transaction from './components/Transaction';
import History from './components/History';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv2, setCvv2] = useState('');
  const [month, setMonth] = useState('');
  const [balance, setBalance] = useState('');
  const [formData, setFormData] = useState([
    {
      name: 'John Doe',
      balance: '5000',
      cardNumber: '1234123412341234',
      cvv2: '123',
      month: '12',
    },
    {
      name: 'Jane Smith',
      balance: '3000',
      cardNumber: '5678567856785678',
      cvv2: '456',
      month: '11',
    },
  ]);
  const [transactionHistory, setTransactionHistory] = useState([]);

  console.log(formData);

  return (
    <div className='h-screen bg-[#1a1a1a] flex flex-row gap-9 '>
        <SideBar />
        <Routes>
          <Route
            path='/'
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
            path='/transaction'
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
            path='/history'
            element={<History transactionHistory={transactionHistory} />}
          />
        </Routes>
        <Cards formData={formData} />
    
    </div>
  );
}

export default App;
