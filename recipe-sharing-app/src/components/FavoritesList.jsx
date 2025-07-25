// src/components/FavoritesList.jsx
import { useEffect, useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const { favorites, recipes } = useRecipeStore(state => ({
    favorites: state.favorites,
    recipes: state.recipes
  }));
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Handle error within effect
      if (favorites.length > 0) {
        generateRecommendations();
      }
    } catch (e) {
      setError(e.message);
      console.error("Error during favorites update:", e);
    }
  }, [favorites, generateRecommendations]);

  const favoriteRecipes = favorites.map(id => recipes.find(recipe => recipe.id === id));

  if (error) {
    return <div>Error: {error}</div>; // Display error in the component UI
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorite recipes yet!</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
