// src/components/EditRecipeForm.jsx
import React, { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title || '');
  const [description, setDescription] = useState(recipe.description || '');
  const [ingredientsText, setIngredientsText] = useState((recipe.ingredients || []).join(', '));
  const [prepTime, setPrepTime] = useState(recipe.prepTime ?? '');

  const handleSubmit = (event) => {
    event.preventDefault();

    const ingredients = ingredientsText
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    updateRecipe(recipe.id, {
      title: title.trim(),
      description: description.trim(),
      ingredients,
      prepTime: prepTime === '' ? null : Number(prepTime),
    });

    if (typeof onClose === 'function') onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Edit Recipe</h2>

      <label className="block mb-2">
        Title
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full border p-2 rounded mt-1"
          required
        />
      </label>

      <label className="block mb-2">
        Description
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="w-full border p-2 rounded mt-1"
        />
      </label>

      <label className="block mb-2">
        Ingredients (comma separated)
        <input
          value={ingredientsText}
          onChange={(event) => setIngredientsText(event.target.value)}
          className="w-full border p-2 rounded mt-1"
        />
      </label>

      <label className="block mb-2">
        Prep Time (minutes)
        <input
          type="number"
          value={prepTime}
          onChange={(event) => setPrepTime(event.target.value)}
          className="w-full border p-2 rounded mt-1"
          min="0"
        />
      </label>

      <div className="flex gap-2 mt-3">
        <button type="submit" className="px-3 py-1 bg-green-500 text-white rounded">
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
