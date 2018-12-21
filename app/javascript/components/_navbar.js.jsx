import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <Link to="/" className="name">KNOW YOUR VOTE</Link>
  </div>
);

export default NavBar;