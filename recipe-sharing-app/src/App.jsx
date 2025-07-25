// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    
    <div>
      <center>
      <h1>Recipe Sharing App</h1>
      <nav>
        <Link to="/">Home</Link> {/* Link to home */}
      </nav>
      
      <SearchBar /> {/* Search Bar component */}
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />  {/* Form to add a new recipe */}
              <RecipeList />     {/* List of recipes */}
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Recipe details view */}
      </Routes>
      </center>
    </div>
  );
}

export default App;
