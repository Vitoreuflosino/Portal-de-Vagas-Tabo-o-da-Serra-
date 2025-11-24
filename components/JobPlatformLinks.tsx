import React from 'react';
import { JOB_PLATFORMS } from '../constants';

interface JobPlatformLinksProps {
  query: string;
}

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);

const JobPlatformLinks: React.FC<JobPlatformLinksProps> = ({ query }) => {
  if (!query) {
    return (
      <div className="text-center py-12 px-6 bg-white rounded-lg border border-dashed border-gray-300">
        <h3 className="text-lg font-medium text-gray-500">Pronto para começar?</h3>
        <p className="mt-1 text-gray-500">Digite um cargo ou clique em uma categoria para ver os links de busca.</p>
      </div>
    );
  }

  const encodedQuery = encodeURIComponent(query);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-bold text-brand-primary mb-4">
        Resultados da busca para: <span className="text-brand-accent">{query}</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {JOB_PLATFORMS.map((platform) => (
          <a
            key={platform.name}
            href={platform.searchUrlTemplate.replace('{query}', encodedQuery)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg hover:border-brand-secondary hover:-translate-y-1 transition-all duration-200 ease-in-out group"
          >
            <div className="flex-shrink-0 mr-4 h-8 w-12 flex items-center justify-center">
              {platform.logo}
            </div>
            <div className="flex-grow">
              <p className="font-semibold text-brand-dark group-hover:text-brand-accent">
                {platform.name}
              </p>
              <p className="text-sm text-gray-500">Buscar vagas de {query}</p>
            </div>
            <ExternalLinkIcon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default JobPlatformLinks;