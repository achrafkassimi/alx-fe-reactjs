// src/pages/Profile.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Profile;
