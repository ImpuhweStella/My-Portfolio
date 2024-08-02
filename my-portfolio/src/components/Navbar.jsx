import React from 'react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 flex justify-between items-center">
      <Logo />
      <ul className="flex space-x-4">
        <li><a href="#about" className="hover:text-secondary">About</a></li>
        <li><a href="#skills" className="hover:text-secondary">Skills</a></li>
        <li><a href="#projects" className="hover:text-secondary">Projects</a></li>
        <li><a href="#experience" className="hover:text-secondary">Experience</a></li>
        <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
