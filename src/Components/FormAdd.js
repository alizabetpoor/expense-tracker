import { useState } from "react";
import "../App.css";
const FormAdd = ({ setTransactions, transactions, setFormStatus }) => {
  const [amount, setAmount] = useState(0);
  const [description, setDiscription] = useState("");
  const [type, setType] = useState("expense");
  const changeAmount = (e) => {
    setAmount(Number(e.target.value));
  };
  const changeDesc = (e) => {
    setDiscription(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (amount !== 0 && description !== "") {
      setTransactions([
        ...transactions,
        { amount: amount, description: description, type: type },
      ]);
      setFormStatus(false);
    }
  };
  const changeType = (e) => {
    setType(e.target.value);
  };
  return (
    <form onSubmit={submitForm} className="form">
      <input
        type="number"
        onChange={changeAmount}
        placeholder="amout"
        value={amount}
      />
      <input
        type="text"
        onChange={changeDesc}
        placeholder="description"
        value={description}
      />
      <div className="radios">
        <input
          type="radio"
          value="expense"
          name="type"
          id="expense"
          onChange={changeType}
          checked={type === "expense"}
        />
        <label htmlFor="expense">expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          id="income"
          onChange={changeType}
          checked={type === "income"}
        />
        <label htmlFor="income">income</label>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default FormAdd;
