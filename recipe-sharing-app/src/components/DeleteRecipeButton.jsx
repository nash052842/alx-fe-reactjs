// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore';

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (!confirm('Are you sure you want to delete this recipe?')) return;
    deleteRecipe(recipeId);
    if (typeof onDeleted === 'function') onDeleted();
  };

  return (
    <button
      onClick={handleDelete}
      className="px-3 py-1 bg-red-500 text-white rounded"
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
