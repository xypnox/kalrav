import React from 'react';
import '../styles/About.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function About({ user, logoutUser, history }) {
  return (
    <div className='about container'>
      <Navbar user={user} logoutUser={logoutUser} history={history} />
      <h1>About Us</h1>
      <p>
        When Twitter started its humble beginnings, it was just a simple app to
        compose tweets of 140 characters. But as days went by, several new
        features ( or <em>distractions</em> ) were added to Twitter. With the
        increasing number of distractions such as Images, Links, Advertisemnts,
        etc. The vanilla Twitter experience faded. Gone were the witty, sharp
        and funny tweets.
      </p>
      <p>
        Kalrav is an attempt to restore Twitter back to it&apos;s glory days!
      </p>
      <div className='btn-below'>
        <Link to='/login' className='action-button'>
          Get Started
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default About;
