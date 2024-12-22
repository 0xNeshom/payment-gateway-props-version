import React from "react";

const History = ({ transactionHistory }) => {
  return (
    <div className="flex items-center justify-center mx-auto w-full my-7">
      <div className="flex flex-col gap-6 w-full  p-6  rounded-3xl bg-[#222222] text-white shadow-lg h-full">
        <h2 className="text-2xl mb-4 justify-center flex">Transaction History</h2>
        {transactionHistory.length === 0 ? (
          <p>No transactions available.</p>
        ) : (
          <ul className="pl-5">
            {transactionHistory.map((transaction) => (
              <li key={transaction.id} className="mb-2">
                <div className="flex justify-between gap-7">
                  <span className="font-semibold">{transaction.date}</span>
                  <span>Amount: ${transaction.amount}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default History;
