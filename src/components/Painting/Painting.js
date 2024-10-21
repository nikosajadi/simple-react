import React, { useState, useContext } from "react";
import Button from "./../Button/Button";
import './Painting.css';
import { MdOutlineAdd } from 'react-icons/md';
import { HiMinus } from 'react-icons/hi';
import ThemeContext from "../../contexts/ThemeContext";
import CartContext from "../../contexts/CartContext";

const Painting = ({ data }) => {
  console.log("Props", data); // Logs the props being passed to this component

  const themeValues = useContext(ThemeContext); // Grabs the context values from ThemeContext
  console.log('themeValues:', themeValues); // Logs the current theme context values for debugging

  const { carts, dispatchCart } = useContext(CartContext);
  
  const handleAdd = (id) => {
    const added = carts.includes(id); // Check if item is in the cart
    if (added) {
      dispatchCart({
        type: "REMOVE_FROM_CART",
        id,
      });
    } else {
      dispatchCart({
        type: "ADD_TO_CART",
        id,
      });
    }
  };

  return (
    <div>
      <ul className="paintings">
        {data.map((item) => (
          <li key={item.id}> {/* Add unique key */}
            <h3>{item.name}</h3>
            <img src={`/assets/img/${item.image}`} alt={item.name} />
            <span>
              <h4>Price: {item.price}</h4>
            </span>

            <Button
              handleClick={() => handleAdd(item.id)}
              style={{
                color: themeValues.theme.color,
                borderColor: themeValues.theme.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {carts.includes(item.id) ? (
                <>
                  <HiMinus /> Remove
                </>
              ) : (
                <>
                  <MdOutlineAdd /> Add to Cart
                </>
              )}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Painting;
