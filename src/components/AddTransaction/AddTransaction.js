import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../context/globalState.js";
const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1,
      };

      addIncome(newIncomeTransaction);

      setIncome({
        incomeText: "",
        incomeAmount: 0,
      });
    }
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };

      addExpense(newExpenseTransaction);

      setExpense({
        expenseText: "",
        expenseAmount: 0,
      });
    }
  };



  return (
    <div className="form-wrapper grid grid-cols-2 mt-4">
      <div>
        <form onSubmit={onSubmitIncome}>
          <div className="input-group income grid grid-cols-1 border-2">
            <input
              type="text"
              name="incomeText"
              value={incomeText}
              placeholder="Name of Income..."
              autoComplete="off"
              onChange={onChangeIncome}
              className="border-b-2  text-[#CECCDA] md:mx-auto mt-2 w-[90%] outline-0 mb-2 bg-transparent"
            />
            <input
              type="number"
              name="incomeAmount"
              value={incomeAmount}
              placeholder="Amount"
              autoComplete="off"
              onChange={onChangeIncome}
              className="border-b-2 text-[#CECCDA] md:mx-auto w-[90%] outline-0 mb-2 bg-transparent"
            />
            <input type="submit" value="Submit" className="px-4 py-2 w-25 md:mx-auto mb-2  bg-[#CECCDA] mt-2 rounded" />
          </div>
        </form>

      </div>
      <div>
        <form onSubmit={onSubmitExpense} className="ml-2 text-black">
          <div className="input-group expense grid grid-cols-1 border-2 ">
            <input
              type="text"
              name="expenseText"
              value={expenseText}
              placeholder="Name of Expense..."
              autoComplete="off"
              onChange={onChangeExpense}
              className="border-b-2 text-[#CECCDA] outline-0 w-[90%] md:mx-auto mt-2 mb-2 bg-transparent"
            />
            <input
              type="number"
              name="expenseAmount"
              value={expenseAmount}
              placeholder="Amount"
              autoComplete="off"
              onChange={onChangeExpense}
              className="border-b-2 text-[#CECCDA] outline-0 mb-2 w-[90%] md:mx-auto bg-transparent"
            />
            <input type="submit" value="Submit" className="px-4 text-center py-2 md:mx-auto mb-2 w-25 bg-[#CECCDA] mt-2 rounded" />
          </div>
        </form>


      </div>
    </div>
  );
};

export default AddTransaction;