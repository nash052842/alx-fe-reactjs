import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

const [search, setSearch] = useState('');
const filteredRecipes = recipes.filter((r) =>
  r.title.toLowerCase().includes(search.toLowerCase())
);


// App.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import SearchBar from './SearchBar';
import IngredientFilter from './IngredientFilter';
import PrepTimeFilter from './PrepTimeFilter';
import RecipeList from './RecipeList';

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
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Recipe Finder</h1>
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <SearchBar />
        <IngredientFilter />
        <PrepTimeFilter />
      </div>
      <RecipeList />
    </div>
  );
};
export default App;
