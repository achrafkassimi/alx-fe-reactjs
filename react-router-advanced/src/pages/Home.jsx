// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the React Router Advanced Demo</h1>
      <nav>
        <ul>
          <li><Link to="/profile">Go to Profile</Link></li>
          <li><Link to="/blog/1">Go to Blog Post 1</Link></li>
          <li><Link to="/blog/2">Go to Blog Post 2</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
