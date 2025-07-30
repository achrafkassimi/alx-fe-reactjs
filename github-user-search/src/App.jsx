import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Analytics } from '@vercel/analytics/next';

import Search from './components/Search';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-700 text-white p-4 text-center text-xl font-bold shadow">
        GitHub User Search
      </header>
      <main>
        <Search />
      </main>
      <Analytics />
    </div>
  );
};

export default App;
