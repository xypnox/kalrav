import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="appName">
        Kalrav
      </a>

      <ul className="Navlinks">
        <li>
          <a href="/tweet">Tweet</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
