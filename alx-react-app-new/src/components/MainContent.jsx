import React from 'react';

const MainContent = () => {
  return (
    <main style={{ padding: '20px', backgroundColor: '#eef', borderRadius: '8px' }}>
      <h2 style={{ color: 'darkgreen', fontSize: '22px' }}>Top 5 Favorite Cities</h2>
      
      {/* Adding the required sentence here */}
      <p style={{ fontSize: '18px', color: 'darkblue' }}>
        I love to visit New York, Paris, and Tokyo.
      </p>

      <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
        <li style={{ fontSize: '18px' }}>Paris</li>
        <li style={{ fontSize: '18px' }}>Tokyo</li>
        <li style={{ fontSize: '18px' }}>New York</li>
        <li style={{ fontSize: '18px' }}>London</li>
        <li style={{ fontSize: '18px' }}>Sydney</li>
      </ul>
    </main>
  );
};

export default MainContent;
