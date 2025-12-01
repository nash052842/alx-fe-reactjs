import React, { useState, useEffect } from "react";
import data from "../data.json"; // import JSON file

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border rounded-lg p-4 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-32 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-700">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
