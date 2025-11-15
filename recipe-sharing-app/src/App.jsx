// App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import IngredientFilter from './components/IngredientFilter';
import PrepTimeFilter from './components/PrepTimeFilter';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const sampleRecipes = [
  { id: 1, title: 'Pasta Carbonara', description: 'Creamy pasta...', ingredients: ['pasta', 'egg', 'bacon'], prepTime: 20 },
  { id: 2, title: 'Chicken Curry', description: 'Spicy curry...', ingredients: ['chicken', 'curry powder'], prepTime: 40 },
  { id: 3, title: 'Avocado Toast', description: 'Simple toast...', ingredients: ['bread', 'avocado'], prepTime: 10 },
];

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <Router>
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="flex flex-col md:flex-row gap-2 mb-4">
                  <SearchBar />
                  <IngredientFilter />
                  <PrepTimeFilter />
                </div>
                <FavoritesList />
                <RecommendationsList />
                <RecipeList />
              </div>
            }
          />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
