import { useState } from 'react';

type JobSearchProps = {
  onSearch: (searchQuery: string) => void;
};

const JobSearch = ({ onSearch }: JobSearchProps) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);  // Arama fonksiyonunu tetikliyoruz
  };

  return (
    <div className="max-w-md mx-auto mb-6">
      <form onSubmit={handleSearchSubmit} className="flex items-center border rounded-lg shadow-lg">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          className="px-4 py-2 w-full rounded-l-lg text-black"
          placeholder="Search for jobs..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default JobSearch;
