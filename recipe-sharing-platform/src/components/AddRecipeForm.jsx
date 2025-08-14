// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

const AddRecipeForm = ({ addRecipe }) => {
  // Define state for each form field
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  
  // Errors state for storing validation errors
  const [errors, setErrors] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  // Validation function
  const validate = () => {
    const newErrors = {};
    
    // Validate Title
    if (!title) {
      newErrors.title = 'Title is required';
    }
    
    // Validate Ingredients
    if (!ingredients) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      const ingredientsList = ingredients.split(',').map(item => item.trim());
      if (ingredientsList.length < 2) {
        newErrors.ingredients = 'Please provide at least two ingredients';
      }
    }

    // Validate Steps
    if (!steps) {
      newErrors.steps = 'Preparation steps are required';
    }

    // Update errors state
    setErrors(newErrors);
    
    // If no errors, return true, else false
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (validate()) {
      // Split ingredients into an array
      const ingredientsList = ingredients.split(',').map(item => item.trim());

      // Add the new recipe
      addRecipe({ title, ingredients: ingredientsList, steps });

      // Reset form and errors
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({
        title: '',
        ingredients: '',
        steps: '',
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add New Recipe</h2>

      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients Input */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients (comma-separated)</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., flour, sugar, butter, eggs"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps Input */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">Preparation Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="6"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Step-by-step instructions"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
