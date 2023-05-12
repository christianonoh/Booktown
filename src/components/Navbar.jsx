import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import logo from '../assets/logo.png';
import Button from './Button';

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
        <Button title={<CgProfile />} handleClick={null} className="btn-icon" />
      </ul>
    </nav>
  );
}

export default Navbar;
