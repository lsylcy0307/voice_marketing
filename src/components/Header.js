import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="header-left">
      <h1>Interactive Research Demo</h1>
      <p className="subtitle">Explore item purchase likelihood using voice input</p>
    </div>
    <nav className="header-nav">
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a href="#paper">Research Paper</a>
    </nav>
  </header>
);

export default Header; 