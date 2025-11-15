// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // redirect after delete
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
