import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'category', text: 'Category' },
  ];
  return (
    <nav>
      <Link to="/">
        <img src={logo} id="logo" alt="Logo" />
      </Link>
      <ul className="nav-items">
        {links.map((link) => <li key={link.text} className="nav-item"><NavLink to={link.path}>{link.text}</NavLink></li>)}
      </ul>
    </nav>
  );
}

export default Navbar;
