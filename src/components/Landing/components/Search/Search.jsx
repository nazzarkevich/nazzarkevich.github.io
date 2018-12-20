import React from 'react';

const Search = props => {
  const { searchWord, handleInputChange, handleClick } = props;

  return (
    <div>
      <input type="text" value={searchWord} onChange={handleInputChange} />
      <button type="submit" onClick={handleClick}>Search</button>
    </div>
  );
};

export default Search;