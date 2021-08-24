import "../App.css";
const Search = ({ search, setSearch }) => {
  const changeSearch = (e) => {
    const value = e.target.value;
    setSearch(value.toLowerCase());
  };
  return (
    <div className="search">
      <input
        type="search"
        value={search}
        placeholder="search..."
        onChange={changeSearch}
      />
    </div>
  );
};

export default Search;
