// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) return <p>No recommendations yet.</p>;

  return (
    <div className="p-4 border rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} className="mb-2">
          <Link
            to={`/recipe/${recipe.id}`}
            className="text-blue-600 hover:underline font-semibold"
          >
            {recipe.title}
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
