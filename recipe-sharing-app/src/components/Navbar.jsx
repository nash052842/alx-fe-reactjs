// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="mb-4 flex gap-4 text-blue-600 font-semibold">
    <Link to="/">Home</Link>
    <Link to="/add">Add Recipe</Link>
  </nav>
);

export default Navbar;
