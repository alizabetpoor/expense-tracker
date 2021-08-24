import "./../App.css";
import Search from "./Search";
const TransActions = ({ transactions, filtered, search, setSearch }) => {
  if (!transactions.length) return <h3>Add something</h3>;
  return (
    <div className="trans">
      <Search search={search} setSearch={setSearch} />
      <hr />
      {filtered.length === 0 ? <h3>no item matchs</h3> : null}
      {filtered.map((item, index) => {
        return (
          <div
            key={index}
            className={`tran ${item.type === "expense" ? "expense" : "income"}`}
          >
            <p>{item.description}</p>
            <p>{item.amount}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TransActions;
