import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import recipesData from '../data.json';
import AddRecipeForm from './AddRecipeForm'; 

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulating data fetch from data.json
    setRecipes(recipesData);
  }, []);

  // Add new recipe
  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [
      ...prevRecipes,
      { ...newRecipe, id: prevRecipes.length + 1, image: 'https://via.placeholder.com/150' },
    ]);
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>

      {/* Add Recipe Form */}
      <AddRecipeForm addRecipe={addRecipe} />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Link to Recipe Detail */}
            <Link to={`/recipe/${recipe.id}`} className="block">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.summary}</p>
                <button className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-medium">
                  View Details →
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
