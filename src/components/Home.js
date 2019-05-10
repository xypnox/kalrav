import React from 'react';
// import Link from 'react-router-dom';
import Features from './Features';

function Home() {
  return (
    <div className="home">
      <header>
        <h1>Kalrav</h1>
        <h2>A tweet app</h2>
        {/* <Link to="/app" component={}>Get Started</Link> */}
      </header>

      <Features />
    </div>
  );
}

export default Home;
