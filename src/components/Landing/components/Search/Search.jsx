import React from 'react';
import { Input } from 'semantic-ui-react';

import './search.css';

const Search = props => {
  const { searchWord, handleInputChange, handleClick } = props;

  return (
    <div className="search-wrapper">
      <Input
        size='massive'
        value={searchWord}
        placeholder='Type city: lviv, kyiv..'
        onChange={handleInputChange}
      />
      <button className="search-button" disabled={searchWord} type="submit" onClick={handleClick}>Search</button>
    </div>
  );
};

export default Search;