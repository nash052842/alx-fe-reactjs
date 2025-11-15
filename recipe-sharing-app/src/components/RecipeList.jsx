import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const [editingId, setEditingId] = useState(null);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          {editingId === recipe.id ? (
            <EditRecipeForm recipe={recipe} onClose={() => setEditingId(null)} />
          ) : (
            <>
              <button onClick={() => setEditingId(recipe.id)}>Edit</button>
              <DeleteRecipeButton recipeId={recipe.id} />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
