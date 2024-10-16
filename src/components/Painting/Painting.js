import React from "react";
import Button from "./../Button/Button"
import './Painting.css';

const Painting = (props) =>  {
    console.log("Props", props)
    return(
<div >
    <ul className="paintings">
    {props.data.map((item) => 
    (
     <li>
      <h3>{item.name}</h3>
      <img src={`/assets/img/${item.image}`} alt={item.name} />
      <span>
        <h4>Price: {item.price}</h4></span> 
      <Button>
        Add to box 
      </Button>
     </li>
    ))}
    </ul>
    </div>
    )

}

export default Painting;