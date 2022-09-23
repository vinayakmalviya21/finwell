import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState.js";

const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="grid text-center">
      <li className="transaction">
        <span className="transaction-text">{expenseTransaction.expenseText}</span>
        <span className="transaction-amount">
          &nbsp;&nbsp;Rs.{expenseTransaction.expenseAmount}
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          onClick={() => deleteTransaction(expenseTransaction.id)}
          className="delete-btn"
        >
          <i className="fas fa-trash text-[#CECCDA]"></i>
        </button>
      </li>
    </div>
  );
};

export default ExpenseTransaction;