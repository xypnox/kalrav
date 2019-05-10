import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ status }) {
  console.log(status);
  const linkList =
    status === 'Logged'
      ? [
          <li className="appName">
            <Link to="/feed">Kalrav</Link>
          </li>,
          <li>
            <Link to="/settings">Settings</Link>
          </li>,
          <li>
            <Link to="/tweet">Tweet</Link>
          </li>,
          <li>
            <Link to="/about">About</Link>
          </li>,
        ]
      : [
          <li className="appName">
            <Link to="/">Kalrav</Link>
          </li>,
          <li>
            <Link to="/about">About</Link>
          </li>,
        ];
  return (
    <nav className="navbar">
      <ul className="Navlinks">{linkList}</ul>
    </nav>
  );
}

export default Navbar;
