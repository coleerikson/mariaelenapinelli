import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header className="flex justify-between px-8 py-6 w-full bg-orange-100">
    <Link to="/" className="font-bold text-lg text-gray-800">
      Induba SRL
    </Link>
    <nav>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
