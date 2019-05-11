import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ status }) {
  console.log(status);
  const linkList =
    status === 'Logged'
      ? [
          <li className="appName" key={0}>
            <Link to="/feed">Kalrav</Link>
          </li>,
          <li key={1}>
            <Link to="/settings">Settings</Link>
          </li>,
          <li key={2}>
            <Link to="/tweet">Tweet</Link>
          </li>,
          <li key={3}>
            <Link to="/about">About</Link>
          </li>,
        ]
      : [
          <li className="appName" key={4}>
            <Link to="/">Kalrav</Link>
          </li>,
          <li key={5}>
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
