import React from "react";
import { showToast } from "../helper/showToast";

const CardForm = ({
  name,
  balance,
  cvv2,
  month,
  setName,
  setBalance,
  setCvv2,
  setMonth,
  cardNumber,
  setCardNumber,
  formData,
  setFormData,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      showToast("error", "Please enter your name");
      return;
    }

    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
      showToast("error", "Please enter a valid 16-digit card number");
      return;
    }

    if (cvv2.length !== 3 || !/^\d+$/.test(cvv2)) {
      showToast("error", "Please enter a valid 3-digit CVV2");
      return;
    }

    if (month === "" || isNaN(month) || month < 1 || month > 12) {
      showToast("error", "Please enter a valid expiry month");
      return;
    }

    if (balance === "" || isNaN(balance) || balance < 0) {
      showToast("error", "Please enter a valid balance");
      return;
    }

    const newCard = {
      name,
      balance,
      cardNumber,
      cvv2,
      month,
    };

    setFormData([...formData, newCard]);

    setName("");
    setBalance("");
    setCardNumber("");
    setCvv2("");
    setMonth("");

    showToast("success", "Card added successfully!");
  };

  return (
    <div className="flex items-center justify-center my-7 mx-auto w-full ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full p-6  rounded-3xl bg-[#222222] h-full text-white shadow-lg"
      >
        <div className="flex flex-col">
          <label className="mb-2 text-sm">First Name & Last Name:</label>
          <input
            maxLength={10}
            className="bg-[#333333] w-full px-4 py-3 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-sm">Card Number:</label>
          <input
            className="bg-[#333333] w-full px-4 py-3 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            type="text"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-sm">Enter CVV2:</label>
          <input
            className="bg-[#333333] w-full px-4 py-3 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            type="text"
            placeholder="CVV2"
            value={cvv2}
            onChange={(e) => setCvv2(e.target.value)}
          />
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col w-1/2">
            <label className="mb-2 text-sm">Expiry Month:</label>
            <input
              className="bg-[#333333] w-full px-4 py-3 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              type="text"
              placeholder="Month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="mb-2 text-sm">Expiry Year:</label>
            <input
              className="bg-[#333333] w-full px-4 py-3 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              type="text"
              placeholder="Year"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-sm">Enter Your Balance:</label>
          <input
            className="bg-[#333333] w-full px-4 py-3 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            type="text"
            placeholder="0$"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />
        </div>

        <button
          className="bg-[#4ef09d] text-[#333333] font-bold text-lg py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 hover:bg-[#3ec88b] transition-colors mt-6 w-2/3 mx-auto"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CardForm;
