'use client'
import { useState } from 'react';

import SearchResults from '@/app/components/SearchResults';
import Search from '@/app/components/Search';

const mockData = [
  { id: 1, name: 'Item 1', date: '2024-01-31' },
  { id: 2, name: 'Item 2', date: '2024-01-015' },
  { id: 3, name: 'Item 3', date: '2024-01-019' },
  // Add more data as needed
];

const SearchData = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = ({ startDate, endDate }) => {
    // Filter the data based on the search criteria
    const filteredResults = mockData.filter((item) => {
      return item.date >= startDate && item.date <= endDate;
    });

    // Update the search results state
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h1>Next.js Search App</h1>
      <Search onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </div>
  );
};

export default SearchData;
