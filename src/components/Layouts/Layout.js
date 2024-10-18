import React, { useReducer } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CartContext from "../../contexts/CartContext";
import CartReducer from "../../reducers/Carts";
import './Layout.css';

const Layouts = ({ children }) => {
  // Initial state should be wrapped correctly
  const [state, dispatch] = useReducer(CartReducer, {
    carts: [],  // Initial state with carts as an empty array
  });

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
}

export default Layouts;
