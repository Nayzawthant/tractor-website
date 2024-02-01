'use client'

import { useState } from 'react';
import { format } from 'date-fns';

const Search = ({ onSearch }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = () => {
    // Validate input and convert dates to the desired format
    const formattedStartDate = format(new Date(startDate), 'yyyy-MM-dd');
    const formattedEndDate = format(new Date(endDate), 'yyyy-MM-dd');

    // Pass the search criteria to the parent component
    onSearch({
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    });
  };

  return (
    <div>
      <label>Start Date:</label>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

      <label>End Date:</label>
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
