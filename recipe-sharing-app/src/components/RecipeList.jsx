// src/components/RecipeDetails.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

// RecipeDetails component
export const RecipeDetails = () => {
  const { id } = useParams(); // get recipe ID from URL
  const recipeId = parseInt(id, 10);

  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === recipeId)
  );

  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="p-4 border rounded shadow">
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
          {recipe.description && <p className="mb-2">{recipe.description}</p>}
          <p className="mb-2">
            <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
          </p>
          <p className="mb-2">
            <strong>Prep Time:</strong> {recipe.prepTime} min
          </p>
          <button
            onClick={() => setIsEditing(true)}
            className="mr-2 px-3 py-1 bg-yellow-400 rounded"
          >
            Edit
          </button>
          <DeleteRecipeButton recipeId={recipe.id} />
          <div className="mt-4">
            <Link to="/" className="text-blue-600 hover:underline">
              ← Back to Recipes
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

// RecipeList component
export const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {filteredRecipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border p-4 rounded shadow hover:shadow-lg transition"
        >
          <h2 className="font-bold text-lg text-blue-600 hover:underline">
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h2>
          <p>
            <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
          </p>
          <p>
            <strong>Prep Time:</strong> {recipe.prepTime} min
          </p>
        </div>
      ))}
    </div>
  );
};
export default RecipeList;