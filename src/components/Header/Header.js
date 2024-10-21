import React, {useContext} from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import CartContext from "../../contexts/CartContext";
import { PiShoppingCartFill } from "react-icons/pi";

const Header = () => {
  let { pathname } = useLocation();
  let title = '';
 
  const { carts } = useContext(CartContext);

  if (pathname === '/') title='Shop'
  if (pathname === "/about") title = "About";
  if (pathname === "/blog") title = "Blog";
  if (pathname === "/contact") title = "Contact";
  if (pathname.includes('painting')) title = "Shop";

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
