import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState.js";
import ExpenseTransaction from "../ExpenseTransaction/ExpenseTransaction.js";

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);

  console.log(expenseTransactions);

  return (
    <div className="transactions transactions-expense">
      <h2 className="text-3xl text-center text-[#CECCDA] mt-4 mb-2">Transaction History</h2>
      <ul className="transaction-list text-[#ff716e]">
        {expenseTransactions.map(expenseTransaction => (
          <ExpenseTransaction
            key={expenseTransaction.id}
            expenseTransaction={expenseTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;