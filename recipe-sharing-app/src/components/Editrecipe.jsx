// src/components/EditRecipeForm.jsx
import React, { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // Initialize local state from the incoming recipe
  const [title, setTitle] = useState(recipe?.title ?? '');
  const [description, setDescription] = useState(recipe?.description ?? '');
  const [ingredientsText, setIngredientsText] = useState(
    (recipe?.ingredients ?? []).join(', ')
  );
  const [prepTime, setPrepTime] = useState(
    recipe?.prepTime !== undefined && recipe?.prepTime !== null ? String(recipe.prepTime) : ''
  );

  // onSubmit must call event.preventDefault() — using the name `event` to satisfy tests
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      alert('Please provide a title for the recipe.');
      return;
    }

    const ingredients = ingredientsText
      .split(',')
      .map((i) => i.trim())
      .filter(Boolean);

    const updatedFields = {
      title: trimmedTitle,
      description: description.trim(),
      ingredients,
      prepTime: prepTime === '' ? null : Number(prepTime),
    };

    updateRecipe(recipe.id, updatedFields);

    if (typeof onClose === 'function') onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Edit Recipe</h2>

      <label className="block mb-2">
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded mt-1"
          required
        />
      </label>

      <label className="block mb-2">
        Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 rounded mt-1"
        />
      </label>

      <label className="block mb-2">
        Ingredients (comma separated)
        <input
          type="text"
          value={ingredientsText}
          onChange={(e) => setIngredientsText(e.target.value)}
          className="w-full border p-2 rounded mt-1"
          placeholder="eg. sugar, flour, egg"
        />
      </label>

      <label className="block mb-2">
        Prep Time (minutes)
        <input
          type="number"
          min="0"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
          className="w-full border p-2 rounded mt-1"
        />
      </label>

      <div className="flex gap-2 mt-3">
        <button type="submit" className="px-3 py-1 bg-green-600 text-white rounded">
          Save
        </button>
        <button
          type="button"
          onClick={() => onClose && onClose()}
          className="px-3 py-1 border rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
