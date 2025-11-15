// src/components/FavoritesList.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter(Boolean) // Remove undefined if recipe was deleted
  );

  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (favorites.length === 0) return <p>No favorite recipes yet.</p>;

  return (
    <div className="p-4 border rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id} className="mb-2">
          <Link
            to={`/recipe/${recipe.id}`}
            className="text-blue-600 hover:underline font-semibold"
          >
            {recipe.title}
          </Link>
          <p>{recipe.description}</p>
          <button
            onClick={() => removeFavorite(recipe.id)}
            className="mt-1 px-2 py-1 bg-red-400 text-white rounded"
          >
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
