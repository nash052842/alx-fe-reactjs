// src/components/RecipeDetails.jsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams(); // get recipe ID from URL
  const recipeId = parseInt(id, 10);
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <DeleteRecipeButton recipeId={recipe.id} />
        </>
      )}
    </div>
  );
};

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded shadow">
            <h2 className="font-bold text-lg">{recipe.title}</h2>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            <p>Prep Time: {recipe.prepTime} min</p>
          </div>
        ))
      )}
    </div>
  );
};  
export default RecipeDetails;
