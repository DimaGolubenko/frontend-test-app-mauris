import React from "react";

const Search = ({ searchQuery, onSearchQuery }) => {
  return (
    <div className="section-search">
      <span>Введите данные для поиска: </span>
      <input
        type="text"
        value={searchQuery}
        onChange={e => onSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
