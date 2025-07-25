// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Make sure this line exists
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // optional if you have styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
