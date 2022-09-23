import React from "react";
import Header from "./components/Header/Header.js";
import Balance from "./components/Balance/Balance.js";
import IncomeList from "./components/IncomeList/IncomeList.js";
import ExpenseList from "./components/ExpenseList/ExpenseList.js";
import AddTransaction from "./components/AddTransaction/AddTransaction.js";
import { GlobalContextProvider } from "./context/globalState.js";
// import IncomeTransaction from "./components/IncomeTransaction/IncomeTransaction.js";
// import "./components/calculator/calculator.css";

const calculator = () => {
  return (
    <GlobalContextProvider>
      {/* <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <IncomeList />
          <ExpenseList />
          <AddTransaction />
        </div>
      </div> */}
      <div className="md:grid md:grid-cols-2 border mt-32 py-8 px-8 mx-8 border-4 bg-[#16142D]">
        <div>
          <Header />
          <Balance />
        </div>
        <div>

          <AddTransaction />
          {/* <IncomeTransaction/> */}
          <div className="grid grid-cols-2">
            <IncomeList />
            <ExpenseList />
          </div>
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default calculator;