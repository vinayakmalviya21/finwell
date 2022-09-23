import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState.js";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    incomeTransaction => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    expenseTransaction => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalExpenses = expenseAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  

  
  return (
    <div className="balance md:mb-20 text-white">
      <h2 className="md:text-3xl sm:2xl  text-center text-[#CECCDA]">Your Balance</h2>
      <h3 className="text-3xl text-[#CECCDA] text-center">Rs.{(totalIncome - totalExpenses).toFixed(2)}</h3>
      <div className="balance md:mb-20 text-white">
      <h2 className="text-3xl mt-4 text-center text-[#CECCDA]">Your Weekly Spend Rate</h2>
      <h3 className="text-3xl text-[#CECCDA] text-center">Rs.{(totalExpenses)/7}</h3>
      </div>
      <div className="income-expense grid grid-cols-2 text-3xl text-center mt-20">
        <div className="plus text-[#00ff00]">
          <h3 className="text-[#CECCDA]">Income</h3>
          <p className="text-[#00ff00]">+Rs.{totalIncome}</p>
        </div>
        <div className="minus text-[#ff716e]">
          <h3 className="text-[#CECCDA]">Expenses</h3>
          <p className="text-[#ff716e]">-Rs.{totalExpenses}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;