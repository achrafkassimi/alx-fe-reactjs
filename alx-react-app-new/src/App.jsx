import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <div className="App">

      <Header />
      <MainContent />
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <div style={{ textAlign: 'center', paddingTop: '50px' }}>
        <h1>Simple Counter Application</h1>
        <Counter />
      </div>

      // Provide userData to the context
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>


      <WelcomeMessage />

      <Footer />
    </div>

    
    
  );
}

export default App;
