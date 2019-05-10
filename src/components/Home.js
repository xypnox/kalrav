import React from 'react';
import { Link } from 'react-router-dom';
import Features from './Features';
import '../styles/Home.css';
import reading from '../images/undraw_absorbed.svg';

function Home() {
  return (
    <div className="home container">
      <header>
        <div className="intro">
          <div>
            <h1>Kalrav</h1>
            <h2>A tweet app</h2>
            <Link to="/login" className="action-button">
              Get Started
            </Link>
          </div>
          <img src={reading} alt="Reading Content" srcSet="" />
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
