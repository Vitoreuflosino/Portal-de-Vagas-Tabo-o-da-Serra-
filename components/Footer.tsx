
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white mt-12">
      <div className="container mx-auto py-4 px-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Vagas Taboão da Serra. Todos os direitos reservados.</p>
        <p className="mt-1 opacity-70">Facilitando sua busca por um novo emprego.</p>
      </div>
    </footer>
  );
};

export default Footer;
