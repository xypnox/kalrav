import React from 'react';
import { Link } from 'react-router-dom';
import Features from './Features';
import Footer from './Footer';
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
          <p>
            <i className="icon-down-open" />
          </p>
        </div>
      </header>

      <div className="problems">
        <h1>Problem</h1>
        <h2>Twitter isnt the same anymore!</h2>
        <p>
          When Twitter started its humble beginnings, it was just a simple app to compose tweets of
          140 characters. But as days went by, several new features ( or <em>distractions</em> )
          were added to Twitter. With the increasing number of distractions such as Images, Links,
          Advertisemnts, etc. The vanilla Twitter experience faded. Gone were the witty, sharp and
          funny tweets.
        </p>
        <p>Kalrav is an attempt to restore Twitter back to it&apos;s glory days!</p>
      </div>

      <Features />
      <div className="btn-below">
        <Link to="/login" className="action-button">
          Get Started
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
