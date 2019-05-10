import React from 'react';
// import Link from 'react-router-dom';
import Features from './Features';

function Home() {
  return (
    <div className="home">
      <header>
        <div className="intro">
          <h1>Kalrav</h1>
          <h2>A tweet app</h2>
          {/* <Link to="/login" component={}>Get Started</Link> */}
        </div>
        <div className="know-more">
          <p>Know More</p>
        </div>
      </header>

      <Features />
    </div>
  );
}

export default Home;
