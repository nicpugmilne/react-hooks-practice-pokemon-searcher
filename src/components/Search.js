import React from "react";

function Search({ searchTerm, onSearchTerm }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          value={searchTerm}
          onChange={(e) => onSearchTerm(e.target.value)}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
