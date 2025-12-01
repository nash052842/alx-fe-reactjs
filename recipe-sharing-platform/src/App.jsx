import React, { useState } from "react";

function HomePage() {
  const [recipes] = useState([
    {
      id: 1,
      title: "Spaghetti Carbonara",
      summary: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      image: "https://source.unsplash.com/600x400/?spaghetti"
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      summary: "Chunks of grilled chicken (tikka) cooked in a smooth buttery & creamy tomato based gravy.",
      image: "https://source.unsplash.com/600x400/?chicken-curry"
    },
    {
      id: 3,
      title: "Vegetable Stir Fry",
      summary: "A quick and healthy mix of vegetables stir-fried with soy sauce and garlic.",
      image: "https://source.unsplash.com/600x400/?vegetables"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        🍽️ Recipe Sharing Platform
      </h1>

      {/* Grid of Recipe Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
