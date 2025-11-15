import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
}));

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    ),
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),
  setRecipes: (recipes) => set({ recipes }),
}));


import create from 'zustand';

export const useRecipeStore = create((set) => ({
  // State
  recipes: [],

  // Actions
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  setRecipes: (recipes) => set({ recipes }),
}));
const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
}));


// recipeStore.js
import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],              // All recipes
  searchTerm: '',           // Search input
  ingredientFilter: '',     // Ingredient filter
  maxPrepTime: null,        // Max preparation time filter
  filteredRecipes: [],      // Filtered recipes

  // Setters
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
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

  // Filter recipes dynamically
  filterRecipes: () => {
    const { recipes, searchTerm, ingredientFilter, maxPrepTime } = get();

    const filtered = recipes.filter(recipe => {
      const matchesTitle = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesIngredient = ingredientFilter
        ? recipe.ingredients.some(ing =>
            ing.toLowerCase().includes(ingredientFilter.toLowerCase())
          )
        : true;
      const matchesPrepTime = maxPrepTime
        ? recipe.prepTime <= maxPrepTime
        : true;

      return matchesTitle && matchesIngredient && matchesPrepTime;
    });

    set({ filteredRecipes: filtered });
  },
}));
import create from 'zustand'

const useRecipeStore = create(set => ({ 
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })), 
  setRecipes: (recipes) => set({ recipes }) 
}));  
export default useRecipeStore;


// src/recipeStore.js
import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],          // All recipes
  favorites: [],        // Favorite recipe IDs
  recommendations: [],  // Recommended recipes

  // Set recipes
  setRecipes: (recipes) => set({ recipes }),

  // Favorites management
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])], // Avoid duplicates
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate mock recommendations based on favorites
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) => !favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));
