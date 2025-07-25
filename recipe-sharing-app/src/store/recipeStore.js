// src/store/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [], // Filtered recipes based on search term
  favorites: [], // List of favorite recipe IDs
  recommendations: [], // List of recommended recipes

    // Debugging helper to log state changes
  debugState: () => {
      console.log("Current State:", get());
  },

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // recipes: [],  // All recipes
  searchTerm: '', // Search term to filter recipes
  setSearchTerm: (term) => set({ searchTerm: term }), // Action to update search term

  filterRecipes: () => 
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  
  addFavorite: (recipeId) => {
    set((state) => {
      const updatedFavorites = [...state.favorites, recipeId];
      console.log("Adding to favorites:", updatedFavorites); // Log when adding
      return { favorites: updatedFavorites };
    });
  },

  removeFavorite: (recipeId) => {
    set((state) => {
      const updatedFavorites = state.favorites.filter(id => id !== recipeId);
      console.log("Removing from favorites:", updatedFavorites); // Log when removing
      return { favorites: updatedFavorites };
    });
  },

  // Only generate recommendations when favorites change
  generateRecommendations: () => {
    const state = get();
    if (state.favorites.length === 0) {
      console.log("No favorites to generate recommendations.");
      return;
    }
    
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    console.log("Generated recommendations:", recommended); // Log recommendations
    set({ recommendations: recommended });
  },

  // setRecipes: (recipes) => set({ recipes }),

  setRecipes: (recipes) => {
    console.log("Setting recipes:", recipes); // Log when setting recipes
    set({ recipes });
  },

}));
