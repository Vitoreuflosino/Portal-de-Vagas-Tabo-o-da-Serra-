import React from 'react';

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 inline-block mr-3" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

const Header: React.FC = () => {
  return (
    <header className="bg-brand-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
            <MapPinIcon />
            Vagas Taboão da Serra
        </h1>
        <p className="mt-1 text-brand-secondary">Seu portal de empregos na cidade.</p>
      </div>
    </header>
  );
};

export default Header;