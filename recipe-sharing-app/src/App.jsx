// // src/App.jsx
// import ErrorBoundary from './components/ErrorBoundary';
// import FavoritesList from './components/FavoritesList';
// import RecommendationsList from './components/RecommendationsList';

// // Mocked Data in App.jsx
// const mockRecipes = [
//   { id: 1, title: "Spaghetti", description: "Delicious pasta with tomato sauce" },
//   { id: 2, title: "Pizza", description: "Classic cheese pizza" }
// ];

// const mockFavorites = [1];


// function App() {
//   return (
//     <div>
//       <h1>Recipe Sharing App</h1>
        
//         <FavoritesList recipes={mockRecipes} favorites={mockFavorites} />
        
//         <ErrorBoundary>
//           <RecommendationsList />
//         </ErrorBoundary>

//     </div>
//   );
// }

// export default App;
// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './store/recipeStore';

function App() {
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <nav>
        <Link to="/">Home</Link> {/* Link to home */}
      </nav>

      <button onClick={generateRecommendations}>Generate Recommendations</button>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
              <FavoritesList />
              <RecommendationsList />
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
      

      <h1>Recipe Sharing App</h1>
        
        <FavoritesList recipes={mockRecipes} favorites={mockFavorites} />
        
        <ErrorBoundary>
          <RecommendationsList />
        </ErrorBoundary>

      
    </div>
  );
}

export default App;
