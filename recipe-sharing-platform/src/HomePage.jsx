const { data } = require("autoprefixer");
const { useState, useEffect } = require("react");
// import data from './data.json';
// import React from 'react';
// const
useState= require("react").useState;

function HomePage() {data                                              
  const [recipes, setRecipes] = useState([
    {       
        "id": 1,
        "title": "Spaghetti Carbonara",
        "summary": "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
        "image": "https://via.placeholder.com/150" 
    },
    {       
        "id": 2,      
        "title": "Chicken Tikka Masala",
        "summary": "Chunks of grilled chicken (tikka) cooked in a smooth buttery & creamy tomato based gravy.",
        "image": "https://via.placeholder.com/150" 
    },
    {
        "id": 3,
        "title": "Vegetable Stir Fry",
        "summary": "A quick and healthy mix of vegetables stir-fried with soy sauce and garlic.",
        "image": "https://via.placeholder.com/150"
    }
  ]);


    return (
    <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Recipe Sharing Platform</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes.map((recipe) => (
                <div key={recipe.id} className="border rounded-lg p-4 shadow-md">   
                    <img src={recipe.image} alt={recipe.title} className="w-full h-32 object-cover mb-4 rounded" />
                    <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                    <p className="text-gray-700">{recipe.summary}</p>
                </div>
            ))}
        </div>      
    </div>
    );
}
export default HomePage;

