import React, {useContext} from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import CartContext from "../../contexts/CartContext";
import { PiShoppingCartFill } from "react-icons/pi";
import PropTypes from 'prop-types'; // Import PropTypes

const Header = () => {
  let { pathname } = useLocation();
  let title = '';
 
  const { carts } = useContext(CartContext);

  if (pathname === '/') title='MyPaintings'
  if (pathname === "/about") title = "About me";
  if (pathname === "/JokeBlog") title = "Programming Jocke Blog";
  if (pathname === "/contact") title = "Contact me";
  if (pathname.includes('painting')) title='My Paintings';

  return (
    <div className="Header">
    <div className="TopBar">
      <Navbar />
    </div>
    <div className="cart-container">
      <PiShoppingCartFill className="shopping-cart-icon" />
      <h4 className="cart-count">{carts.length}</h4>
    </div>
    <h3>{title}</h3>
  </div>
  );
};

Header.propTypes = {
  carts: PropTypes.arrayOf(PropTypes.object) // Specify the type for carts array
}; 
export default Header;
