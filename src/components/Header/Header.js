import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  // Object to map paths to titles
  const titles = {
    '/': 'Shop',
    '/about': 'About',
    '/JokeBlog': 'JokBlog',
    '/contact': 'Contact',
  };

   // Use the pathname to get the correct title, with a default fallback
   const title = titles[pathname] || 'Page';

  // Check if the pathname exists in the titles object
//   if (pathname in titles) {
//     title = titles[pathname];
//   }

  return (
    <div className="Header">
      <div className="TopBar">
        <Navbar />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default Header;