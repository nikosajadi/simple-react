import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className="Navbar">
      <li>
        <Link to="/">
          <button className='nav-btn'>Paintings</button>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <button className='nav-btn'>AboutMe</button>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <button className='nav-btn'>Contact</button>
        </Link>
      </li>
      <li>
        <Link to="/JokeBlog">    
          <button className='nav-btn'>JokeBlog</button>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
