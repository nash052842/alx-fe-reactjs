// src/recipeStore.js
import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  // Data
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  ingredientFilter: '',
  maxPrepTime: null,
  favorites: [],
  recommendations: [],

  // --- Initialization / helpers ---
  setRecipes: (recipes) =>
    set(() => ({
      recipes,
      filteredRecipes: recipes,
    })),

  // --- CRUD actions ---
  addRecipe: (recipe) =>
    set((state) => {
      const newRecipes = [...state.recipes, recipe];
      return {
        recipes: newRecipes,
        filteredRecipes: applyFilters(newRecipes, state),
      };
    }),

  updateRecipe: (recipeId, updatedFields) =>
    set((state) => {
      const newRecipes = state.recipes.map((r) =>
        r.id === recipeId ? { ...r, ...updatedFields } : r
      );
      return {
        recipes: newRecipes,
        filteredRecipes: applyFilters(newRecipes, state),
      };
    }),

  deleteRecipe: (recipeId) =>
    set((state) => {
      const newRecipes = state.recipes.filter((r) => r.id !== recipeId);
      return {
        recipes: newRecipes,
        filteredRecipes: applyFilters(newRecipes, state),
        // also remove from favorites if present
        favorites: state.favorites.filter((id) => id !== recipeId),
      };
    }),

  // --- Search / Filters ---
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  setIngredientFilter: (ingredient) => {
    set({ ingredientFilter: ingredient });
    get().filterRecipes();
  },
  setMaxPrepTime: (time) => {
    set({ maxPrepTime: time });
    get().filterRecipes();
  },
  filterRecipes: () => {
    const state = get();
    const filtered = applyFilters(state.recipes, state);
    set({ filteredRecipes: filtered });
  },

  // --- Favorites + Recommendations ---
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...new Set([...state.favorites, recipeId])] })),
  removeFavorite: (recipeId) =>
    set((state) => ({ favorites: state.favorites.filter((id) => id !== recipeId) })),

  generateRecommendations: () => {
    const state = get();
    // Simple rule: recommend recipes not favorited that share any ingredient
    const favRecipes = state.recipes.filter((r) => state.favorites.includes(r.id));
    const favIngredients = new Set(favRecipes.flatMap((r) => r.ingredients || []));
    const recommended = state.recipes
      .filter((r) => !state.favorites.includes(r.id))
      .map((r) => ({ recipe: r, score: intersectionCount(r.ingredients || [], favIngredients) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.recipe)
      .slice(0, 10); // cap
    set({ recommendations: recommended });
  },
}));

// -----------------
// Helpers (private)
// -----------------
function applyFilters(recipes, state) {
  const s = (state.searchTerm || '').toLowerCase();
  const ing = (state.ingredientFilter || '').toLowerCase();
  const maxTime = state.maxPrepTime;

  return recipes.filter((r) => {
    const matchesTitle = r.title?.toLowerCase().includes(s);
    const matchesIngredient = ing
      ? (r.ingredients || []).some((i) => i.toLowerCase().includes(ing))
      : true;
    const matchesPrepTime = maxTime ? (r.prepTime || 0) <= maxTime : true;
    return matchesTitle && matchesIngredient && matchesPrepTime;
  });
}

function intersectionCount(arr = [], set) {
  if (!set || set.size === 0 || !Array.isArray(arr)) return 0;
  return arr.reduce((acc, v) => (set.has(v) ? acc + 1 : acc), 0);
}
