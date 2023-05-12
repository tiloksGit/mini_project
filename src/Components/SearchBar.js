const SearchBar = () => {
  return (
    <>
      <label htmlFor="search"></label>
      <input
        type="text"
        className="search"
        placeholder="search"
        style={{
          margin: "20px",
        }}
      />
      <button> search </button>
    </>
  );
};

export default SearchBar;
