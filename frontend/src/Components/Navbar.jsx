import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-primary h-16 flex items-center justify-around">
      <Link to="/dashboard" className="text-white">Dashboard</Link>
      <Link to="/favorites" className="text-white">Favorites</Link>
      <Link to="/profile" className="text-white">Profile</Link>
    </nav>
  );
}

export default Navbar;
