import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Recipe not found</h2>
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Link
        to="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back to Home
      </Link>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          {recipe.ingredients && (
            <>
              <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
              <ul className="list-disc list-inside mb-6 text-gray-700">
                {recipe.ingredients.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {recipe.instructions && (
            <>
              <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
              <p className="text-gray-700">{recipe.instructions}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
