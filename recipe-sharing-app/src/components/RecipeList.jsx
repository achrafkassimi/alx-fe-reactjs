// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes); // Use filteredRecipes
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Run filterRecipes when component mounts or when recipes change
  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
