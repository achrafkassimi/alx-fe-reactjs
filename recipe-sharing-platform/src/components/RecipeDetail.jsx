// src/components/RecipeDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipesData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams(); // Access the recipe ID from URL
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the recipe based on the ID
    const selectedRecipe = recipesData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>; // Loading state

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={() => navigate('/')}
        className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
      >
        &larr; Back to Home
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Spaghetti</li>
            <li>Eggs</li>
            <li>Bacon</li>
            <li>Cheese</li>
            <li>Black Pepper</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Cooking Instructions:</h2>
          <ol className="list-decimal pl-6 text-gray-700">
            <li>Boil the spaghetti.</li>
            <li>Cook the bacon until crispy.</li>
            <li>Mix eggs and cheese, then combine with pasta.</li>
            <li>Top with crispy bacon and black pepper.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
