// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <nav>
        <Link to="/">Home</Link>  {/* Link to home */}
      </nav>
      
      {/* Define the routes for different views */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />   {/* Form to add a new recipe */}
              <RecipeList />      {/* List of recipes */}
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Recipe details view */}
      </Routes>
    </div>
  );
}

export default App;
