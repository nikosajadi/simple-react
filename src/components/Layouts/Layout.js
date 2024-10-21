import React, { useReducer, useEffect } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CartContext from "../../contexts/CartContext";
import CartReducer from "../../reducers/Carts";
import './Layout.css';
import PropTypes from 'prop-types';

const Layouts = ({ children }) => {
  let carts = JSON.parse(localStorage.getItem("carts")) || []; // Fallback to empty array if localStorage is empty

  const [state, dispatch] = useReducer(CartReducer, {
    carts: carts,
  });

  // Save carts to localStorage whenever the carts state changes
  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(state.carts));
  }, [state.carts]);

  return (
    <CartContext.Provider
      value={{
        carts: state.carts,
        dispatchCart: dispatch,
      }}>
      <div className='Layout'>
        <Header />
        {children}
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

Layouts.propTypes = {
  children: PropTypes.node.isRequired, // Validates that children is passed and is of the correct type
};

export default Layouts;

