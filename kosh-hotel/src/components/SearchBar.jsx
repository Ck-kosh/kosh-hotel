function SearchBar({
  search,
  setSearch
}) {

  return (
    <input
      type="text"
      placeholder="view services..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="w-full p-3 border rounded-lg mb-6"
    />
  );
}

export default SearchBar;