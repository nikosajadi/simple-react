import React, {useContext} from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import CartContext from "../../contexts/CartContext";
import { PiShoppingCartFill } from "react-icons/pi";

const Header = () => {
  let { pathname } = useLocation();
  let title = '';
 
  const {carts} = useContext (CartContext);

  switch (pathname) {
    case '/':
      title = 'Shop';
      break;
    case '/about':
      title = 'About';
      break;
    case '/blog':
      title = 'Blog';
      break;
    case '/contact':
      title = 'Contact';
      break;
    default:
      title = 'Page';
      break;
  }

  return (
    <div className="Header">
      <div className="TopBar">
        <Navbar />
        <div>
         <h4>{carts.length}</h4>
        </div>
        <PiShoppingCartFill />

      </div>
      <h3>{title}</h3> 
    </div>
  );
};

export default Header;
