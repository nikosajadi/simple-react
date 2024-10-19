import React, { useState, useContext} from "react";
import Button from "./../Button/Button";
import './Painting.css';
import { MdOutlineAdd } from 'react-icons/md';
import { HiMinus } from 'react-icons/hi';
import ThemeContext from '../../contexts/ThemContext'; 






const Painting = (props) => {
  console.log("Props", props); // Logs the props being passed to this component

  const themValues = useContext(ThemeContext); // Grabs the context values from ThemeContext
  console.log('themValues :', themValues); // Logs the current theme context values for debugging

  const [addedItems, setAddedItems] = useState({}); // Initializes state to keep track of added items in an object

  const addToCart = (id) => {
    setAddedItems((prevAddedItems) => ({
      ...prevAddedItems,
      [id]: !prevAddedItems[id], // Toggles the 'added' state for the item with the given 'id'
    }));
  };

  // JSX rendering 


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
