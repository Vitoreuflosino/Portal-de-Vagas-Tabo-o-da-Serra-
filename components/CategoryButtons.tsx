import React from 'react';
import { PREDEFINED_CATEGORIES } from '../constants';

interface CategoryButtonsProps {
  onCategoryClick: (category: string) => void;
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({ onCategoryClick }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
      <span className="text-sm font-medium text-gray-600 mr-2">Buscas populares:</span>
      {PREDEFINED_CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryClick(category)}
          className="px-3 py-1 text-sm bg-brand-secondary/20 text-brand-primary font-semibold rounded-full hover:bg-brand-secondary/40 transition duration-150 ease-in-out"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;