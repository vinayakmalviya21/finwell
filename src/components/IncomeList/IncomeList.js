import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState.js";
import IncomeTransaction from "../IncomeTransaction/IncomeTransaction.js";
// import IncomeList from "./components/IncomeList/IncomeList.js";

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  console.log(incomeTransactions);

  return (
    <div className="transactions transactions-income">
      <h2 className="text-3xl text-center text-[#CECCDA] mt-4 mb-2">Transaction History</h2>
      <ul className="transaction-list text-[#CECCDA]">
        {incomeTransactions.map(incomeTransaction => (
          <IncomeTransaction
            key={incomeTransaction.id} 
            incomeTransaction={incomeTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;