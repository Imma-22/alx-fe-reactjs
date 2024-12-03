import React, { useState } from 'react';
import { Link } from "react-router-dom"; 

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!title || !ingredients || !instructions) {
      setError('All fields are required.');
      return;
    }

    const ingredientsList = ingredients.split('\n').map((item) => item.trim()).filter(Boolean);
    if (ingredientsList.length < 2) {
      setError('Please provide at least two ingredients.');
      return;
    }

    const newRecipe = {
      title,
      ingredients: ingredientsList,
      instructions: instructions.split('\n').map((step) => step.trim()).filter(Boolean),
    };

    // Mock submission logic
    console.log('New Recipe Submitted:', newRecipe);
    
    setSuccess(true);
    setError('');
    
    // Clear form
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-semibold text-center mb-4">Add a New Recipe</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {success && <p className="text-green-500 text-center mb-4">Recipe added successfully!</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter recipe title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium" htmlFor="ingredients">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            placeholder="Enter ingredients, one per line"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium" htmlFor="instructions">
            Instructions (one per line)
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="6"
            placeholder="Enter instructions, one per line"
          />
        </div>

        <div className="mb-4 text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;