import React, { useState, useContext, useReducer } from "react";
import Button from "./../Button/Button";
import './Painting.css';
import { MdOutlineAdd } from 'react-icons/md';
import { HiMinus } from 'react-icons/hi';

const Painting = (props) => {
  console.log("Props", props);

  const [addedItems, setAddedItems] = useState({}); // Object to track added items

  const addToCart = (id) => {
    setAddedItems((prevAddedItems) => ({
      ...prevAddedItems,
      [id]: !prevAddedItems[id], // Toggle the added state for the specific item
    }));
  };

  return (
    <div>
      <ul className="paintings">
        {props.data.map((item) => (
          <li key={item.id}> {/* Add unique key */}
            <h3>{item.name}</h3>
            <img src={`/assets/img/${item.image}`} alt={item.name} />
            <span>
              <h4>Price: {item.price}</h4>
            </span>
            <Button handleClick={() => addToCart(item.id)}>
              {addedItems[item.id] ? (
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
