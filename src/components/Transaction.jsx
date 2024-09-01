import React, { useState } from "react";
import { showToast } from "../helper/showToast";
const Transaction = ({
  formData,
  setFormData,
  transactionHistory,
  setTransactionHistory,
}) => {
  const [amount, setAmount] = useState("");
  const [inputCvv2, setInputCvv2] = useState("");
  const [selectCard, setSelectCard] = useState(1);

  const handlerTransaction = (e) => {
    e.preventDefault();

    const selectedCard = formData[selectCard];

    if (inputCvv2.length < 3) {
      showToast("error", "CVV2 should be 3 or 4 digits");
    } else if (inputCvv2 !== selectedCard.cvv2) {
      showToast("error", "CVV2 is incorrect");
    } else if (amount > selectedCard.balance) {
      showToast("error", "The amount is more than your balance");
    } else {
      const updatedFormData = formData.map((card, index) => {
        if (index === selectCard) {
          return {
            ...card,
            balance: card.balance - amount,
          };
        }
        return card;
      });

      const transactionRecord = {
        id: Date.now(),
        cardIndex: selectCard,
        amount: amount,
        date: new Date().toLocaleString(),
      };

      setFormData(updatedFormData);
      setTransactionHistory([...transactionHistory, transactionRecord]);

      showToast("success", "Transaction successful!");
      setAmount("");
      setInputCvv2("");
      console.log( selectCard);
      console.log( selectedCard);
    }
  };

  return (
    <div className="flex items-center justify-center mx-auto">
      <form
        className="flex flex-col gap-6 w-[464px] max-w-lg p-6 border border-[#4ef09d] rounded-3xl bg-[#222222] text-white"
        onSubmit={handlerTransaction}
      >
        <div className="flex flex-col">
          <label className="mb-2 text-sm">Choose a card:</label>
          <select
            className="bg-[#333333] block w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            value={selectCard}
            onChange={(e) => setSelectCard(e.target.value)}
          >
            {formData.map((card, index) => (
              <option key={index} value={index}>
                {card.name} & {card.cardNumber}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm">Enter CVV2:</label>
          <input
            className="bg-[#333333] block w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            type="text"
            value={inputCvv2}
            onChange={(e) => setInputCvv2(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm">Amount:</label>
          <input
            className="bg-[#333333] block w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          className="bg-[#4ef09d] text-[#333333] font-bold text-lg py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 hover:bg-[#3ec88b] transition-colors"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Transaction;
