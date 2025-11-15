// PrepTimeFilter.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const PrepTimeFilter = () => {
  const setMaxPrepTime = useRecipeStore((state) => state.setMaxPrepTime);

  return (
    <input
      type="number"
      placeholder="Max preparation time (min)"
      onChange={(e) => setMaxPrepTime(Number(e.target.value))}
      className="border p-2 rounded w-full"
    />
  );
};

export default PrepTimeFilter;
