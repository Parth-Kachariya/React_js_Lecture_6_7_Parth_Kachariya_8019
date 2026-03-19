import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center my-6">
      <input
        type="text"
        placeholder="Search APIs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 w-80 rounded"
      />
    </div>
  );
};

export default SearchBar;
