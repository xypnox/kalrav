import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <div className="logo">
        <h1>Kalrav</h1>
        <p>© 2019 xypnox</p>
      </div>
      <div className="footer-links">
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link>
        <a href="https://github.com/xypnox/kalrav/">Github Repo</a>
      </div>
    </footer>
  );
}

export default Footer;
