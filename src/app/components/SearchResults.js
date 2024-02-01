
// components/SearchResults.js
const SearchResults = ({ results }) => {
    return (
      <div>
        <h2>Search Results</h2>
        <ul>
          {results.map((item) => (
            <li key={item.id}>{item.name} - {item.date}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SearchResults;
  