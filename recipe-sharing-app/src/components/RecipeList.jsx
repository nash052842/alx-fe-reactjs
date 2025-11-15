// src/components/RecipeDetails.jsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

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

export default RecipeDetails;
