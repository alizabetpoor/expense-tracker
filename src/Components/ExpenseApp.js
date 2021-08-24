import { useEffect, useState } from "react";
import OverView from "./OverView";
import TransActions from "./TransActions";
import "./../App.css";

const ExpenseApp = () => {
  const [search, setSearch] = useState("");

  const [income, setIncome] = useState(0);

  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([
    { amount: 19000, description: "hoghogh", type: "income" },
    { amount: 3000, description: "bastani", type: "expense" },
    { amount: 1000, description: "top", type: "expense" },
  ]);
  const [filtered, setFiltered] = useState(transactions);
  useEffect(() => {
    const expense = transactions
      .filter((items) => items.type === "expense")
      .reduce((sum, item) => sum + item.amount, 0);
    const income = transactions
      .filter((items) => items.type === "income")
      .reduce((sum, item) => sum + item.amount, 0);
    setExpense(expense);
    setIncome(income);
  }, [transactions]);
  useEffect(() => {
    setFiltered(transactions);
    const newlist = transactions.filter((item) =>
      item.description.toLowerCase().includes(search)
    );
    setFiltered(newlist);
  }, [search, transactions]);

  return (
    <div className="container">
      <OverView
        income={income}
        expense={expense}
        setIncome={setIncome}
        setExpense={setExpense}
        setTransactions={setTransactions}
        transactions={transactions}
      />
      <TransActions
        filtered={filtered}
        transactions={transactions}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
};

export default ExpenseApp;
