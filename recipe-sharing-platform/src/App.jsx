import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';


// src/App.jsx
function App() {
  return (
    // <div className="min-h-screen bg-gray-50">
    //   <HomePage />
    // </div>
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
    </Routes>
  </Router>
  );
}

export default App;
