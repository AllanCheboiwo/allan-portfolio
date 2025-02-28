import React from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-yellow-400">Allan Cheboiwo</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#experience" className="hover:text-yellow-400 transition">Experience</a>
          <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
          <a href="#skills" className="hover:text-yellow-400 transition">Skills</a>
          <Link to="/blog" className="hover:text-yellow-400 transition">Blog</Link>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>
        <Bars3Icon className="md:hidden w-6 h-6 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;