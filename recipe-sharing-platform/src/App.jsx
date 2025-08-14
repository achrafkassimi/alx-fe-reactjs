import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage';


// src/App.jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HomePage />
    </div>
  );
}

export default App;
