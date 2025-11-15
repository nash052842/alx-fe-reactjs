// IngredientFilter.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const IngredientFilter = () => {
  const setIngredientFilter = useRecipeStore((state) => state.setIngredientFilter);

  return (
    <input
      type="text"
      placeholder="Filter by ingredient..."
      onChange={(e) => setIngredientFilter(e.target.value)}
      className="border p-2 rounded w-full"
    />
  );
};

export default IngredientFilter;
