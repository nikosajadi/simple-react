import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CartContext from "../Contexts/CartContext";
import './Layout.css';

const Layouts = ({ children }) => {
  return (
    <CartContext.Provider
      value={{
        carts: []
      }}>
      <div className='Layout'>
        <Header />
        {children}
        <Footer />
      </div>
    </CartContext.Provider>
  );
}

export default Layouts;