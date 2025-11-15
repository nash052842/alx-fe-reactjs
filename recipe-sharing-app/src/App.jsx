// App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import SearchBar from './SearchBar';
import IngredientFilter from './IngredientFilter';
import PrepTimeFilter from './PrepTimeFilter';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import AddRecipeForm from './AddRecipeForm';

const sampleRecipes = [
  { id: 1, title: 'Pasta Carbonara', ingredients: ['pasta', 'egg', 'bacon'], prepTime: 20 },
  { id: 2, title: 'Chicken Curry', ingredients: ['chicken', 'curry powder'], prepTime: 40 },
  { id: 3, title: 'Avocado Toast', ingredients: ['bread', 'avocado'], prepTime: 10 },
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

        {/* Navigation */}
        <nav className="mb-4 flex gap-4">
          <Link to="/" className="text-blue-500">Home</Link>
          <Link to="/add" className="text-blue-500">Add Recipe</Link>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Recipe List with search & filters */}
          <Route
            path="/"
            element={
              <div>
                <div className="flex flex-col md:flex-row gap-2 mb-4">
                  <SearchBar />
                  <IngredientFilter />
                  <PrepTimeFilter />
                </div>
                <RecipeList />
              </div>
            }
          />

          {/* Add Recipe Form */}
          <Route path="/add" element={<AddRecipeForm />} />

          {/* Recipe Details */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
