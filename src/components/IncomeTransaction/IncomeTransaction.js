import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState.js";

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="grid text-center">
      <li className="transaction text-[#00ff00]">
        <div className="">
          <span className="transaction-text">{incomeTransaction.incomeText}</span>
          <span className="transaction-amount">
          &nbsp;&nbsp;Rs.{incomeTransaction.incomeAmount}
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            onClick={() => deleteTransaction(incomeTransaction.id)}
            className="delete-btn"
          >
            <i className="fas fa-trash text-[#CECCDA]"></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default IncomeTransaction;