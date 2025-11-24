import React, { useState } from 'react';
import { getCareerSuggestions } from '../services/geminiService';
import { CareerSuggestions } from '../types';

interface CareerAdvisorProps {
    onSuggestionClick: (suggestion: string) => void;
}

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM9 2a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V6H6a1 1 0 010-2h1V3a1 1 0 011-1zm8.293 8.293a1 1 0 011.414 0l1 1a1 1 0 010 1.414l-1 1a1 1 0 01-1.414-1.414L17.586 13l-1.293 1.293a1 1 0 01-1.414-1.414l1-1a1 1 0 010-1.414l-1-1a1 1 0 011.414-1.414L17.586 11l1.293-1.293zM9 10a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1H6a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
);

const SuggestionItem: React.FC<{text: string; onClick: (text: string) => void;}> = ({ text, onClick }) => (
    <button 
        onClick={() => onClick(text)}
        className="block w-full text-left px-3 py-1.5 text-sm bg-brand-secondary/20 text-brand-dark rounded hover:bg-brand-secondary/40 transition duration-150"
    >
        {text}
    </button>
);


const CareerAdvisor: React.FC<CareerAdvisorProps> = ({ onSuggestionClick }) => {
  const [skills, setSkills] = useState('');
  const [suggestions, setSuggestions] = useState<CareerSuggestions | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateSuggestions = async () => {
    if (!skills.trim()) {
      setError('Por favor, descreva suas habilidades.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setSuggestions(null);
    try {
      const result = await getCareerSuggestions(skills);
      setSuggestions(result);
    } catch (err) {
      setError('Ocorreu um erro ao buscar sugestões. Tente novamente mais tarde.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="advisor" className="mt-12">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-xl font-bold text-brand-primary mb-2 flex items-center">
            <SparklesIcon />
            Assistente de Carreira com IA
        </h3>
        <p className="text-gray-600 mb-4">
          Não sabe o que procurar? Descreva suas habilidades (ex: "comunicação, organização, planilhas") e receba sugestões de cargos.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Descreva suas habilidades aqui..."
            className="flex-grow w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-secondary focus:border-brand-secondary transition duration-150 ease-in-out"
            rows={2}
          />
          <button
            onClick={handleGenerateSuggestions}
            disabled={isLoading}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-dark text-white font-semibold rounded-md shadow-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Analisando...' : 'Obter Sugestões'}
          </button>
        </div>
        
        {error && <p className="text-red-600 mt-3 text-sm">{error}</p>}

        {isLoading && (
            <div className="mt-6 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-secondary"></div>
                <p className="text-gray-600 mt-2">Nossa IA está pensando nas melhores opções para você...</p>
            </div>
        )}

        {suggestions && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-brand-primary mb-2">Cargos Sugeridos</h4>
              <div className="space-y-2">
                {suggestions.suggestedTitles.map((title) => (
                    <SuggestionItem key={title} text={title} onClick={onSuggestionClick} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-brand-primary mb-2">Palavras-chave para Busca</h4>
              <div className="space-y-2">
                {suggestions.searchKeywords.map((keyword) => (
                    <SuggestionItem key={keyword} text={keyword} onClick={onSuggestionClick} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareerAdvisor;