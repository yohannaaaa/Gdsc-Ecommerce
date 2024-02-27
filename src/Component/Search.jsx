import React, { useState } from 'react';
import './Search.css'
const Search = ({ items }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    const filteredResults = items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="search-conatiner">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className='search-input'
        placeholder="Search..."
      />
      <button onClick={handleSearch} className=" search-button">
        Search
      </button>
      <ul className="search-results">
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
