import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
  </svg>
);

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-xl mx-auto">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ex: Vendedor, Motorista, Jovem Aprendiz..."
        className="flex-grow w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-secondary focus:border-brand-secondary transition duration-150 ease-in-out"
      />
      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-secondary text-brand-dark font-semibold rounded-md shadow-md hover:bg-brand-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary transition duration-150 ease-in-out"
      >
        <SearchIcon />
        Buscar Vagas
      </button>
    </form>
  );
};

export default SearchBar;