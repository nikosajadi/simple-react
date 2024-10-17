import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <ul className="Navbar">
            <li>
        <Link to="/">
        <button className='button'>Shop</button>
        
        </Link>
      </li>
      <li>
        <Link to="/about">
        <button className='button'>About me</button>
        
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <button className='button'>Contact</button>
        </Link>
      </li>
      <li>
        <Link to="/JokeBlog">    
          <button className='button' >JokeBlog</button>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
