import React from "react";
import PAINTING from "./../App/PAINTING.json"

const Painting = () => {

    <ul>
    {PAINTING.map((item) => 
    (
     <li>
      <h3>{item.name}</h3>
      <img src={`/assets/img/${item.image}`} alt={item.name} />

      <span>Price: {item.price}</span> 
     </li>
    ))}
    </ul>
}

export default Painting;