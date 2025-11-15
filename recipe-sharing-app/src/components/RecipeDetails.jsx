// src/components/RecipeDetails.jsx
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id, 10);
  const navigate = useNavigate();

  // find the recipe in the store
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === recipeId));
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) {
    return (
      <div className="p-4">
        <p>Recipe not found.</p>
        <Link to="/">← Back</Link>
      </div>
    );
  }

  // refresh recommendations whenever this page loads (optional)
  React.useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onClose={() => setIsEditing(false)} />
      ) : (
        <div className="border rounded p-4 shadow">
          <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
          {recipe.description && <p className="mb-2">{recipe.description}</p>}
          <p className="mb-2"><strong>Ingredients:</strong> {(recipe.ingredients || []).join(', ')}</p>
          <p className="mb-2"><strong>Prep Time:</strong> {recipe.prepTime ?? 'N/A'} min</p>

          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 bg-yellow-400 rounded"
            >
              Edit
            </button>

            <DeleteRecipeButton
              recipeId={recipe.id}
              onDeleted={() => navigate('/')}
            />

            <Link to="/" className="px-3 py-1 border rounded self-center">
              Back
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
