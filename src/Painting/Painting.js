import React from "react";
import Button from "./../Button/Button"

const Painting = (props) =>  {
    console.log("Props", props)
    return(
<div>
    <ul>
    {props.data.map((item) => 
    (
     <li>
      <h3>{item.name}</h3>
      <img src={`/assets/img/${item.image}`} alt={item.name} />
      <span>Price: {item.price}</span> 
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