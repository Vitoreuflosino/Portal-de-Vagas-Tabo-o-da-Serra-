import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryButtons from './components/CategoryButtons';
import JobPlatformLinks from './components/JobPlatformLinks';
import CareerAdvisor from './components/CareerAdvisor';
import Footer from './components/Footer';

function App() {
  const [query, setQuery] = useState('');

  const handleSearch = useCallback((searchTerm: string) => {
    setQuery(searchTerm);
  }, []);

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <section id="search" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-primary mb-2">Encontre sua próxima vaga.</h2>
            <p className="text-center text-gray-600 mb-6">Digite um cargo e nós geramos os links de busca para você!</p>
            <SearchBar onSearch={handleSearch} />
            <CategoryButtons onCategoryClick={handleSearch} />
          </section>

          <JobPlatformLinks query={query} />

          <CareerAdvisor onSuggestionClick={handleSearch} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;