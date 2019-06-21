import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar(props) {
  const { user } = props;
  // console.log(user);

  // Links to be displayed with condition of user login
  const linkList =
    user !== null
      ? [
          <li className='appName' key={0} onClick={props.clickFunc}>
            <Link to='/feed'>Kalrav</Link>
          </li>,
          <li key={1}>
            <Link to='/settings'>Settings</Link>
          </li>,
          <li key={2}>
            <button
              type='button'
              onClick={() => {
                props.logoutUser().then(props.history.push('/'));
              }}
            >
              Logout
            </button>
          </li>,
          <li key={3}>
            <Link to='/tweet'>Tweet</Link>
          </li>,
          <li key={4}>
            <Link to='/about'>About</Link>
          </li>
        ]
      : [
          <li className='appName' key={5}>
            <Link to='/'>Kalrav</Link>
          </li>,
          <li key={6}>
            <Link to='/Login'>Login</Link>
          </li>,
          <li key={7}>
            <Link to='/about'>About</Link>
          </li>
        ];

  return (
    <nav className='navbar'>
      <ul className='Navlinks'>{linkList}</ul>
    </nav>
  );
}

export default Navbar;
