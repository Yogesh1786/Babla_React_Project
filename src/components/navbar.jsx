import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/parent">Parent</Link> | <Link to="/stoppage">Stoppage</Link>
  </nav>
);

export default Navbar;
