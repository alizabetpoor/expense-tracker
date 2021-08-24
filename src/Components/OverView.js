import { useState } from "react";
import "./../App.css";
import FormAdd from "./FormAdd";
const OverView = ({
  income,
  expense,
  setIncome,
  setExpense,
  setTransactions,
  transactions,
}) => {
  const [formStatus, setFormStatus] = useState(false);
  const changeFormStatus = () => {
    setFormStatus((prev) => !prev);
  };
  return (
    <div>
      <div className="topoverview">
        <h3>balance : {income - expense} $</h3>
        <button
          onClick={changeFormStatus}
          className={formStatus ? "cancel" : null}
        >
          {formStatus ? "Cancle" : "Add"}
        </button>
      </div>
      {formStatus && (
        <FormAdd
          setTransactions={setTransactions}
          transactions={transactions}
          setFormStatus={setFormStatus}
        />
      )}
      <div className="bottomoverview">
        <p>
          expense:<span className="red-color">{expense} $</span>
        </p>
        <p>
          income:<span className="green-color">{income} $</span>
        </p>
      </div>
    </div>
  );
};

export default OverView;
