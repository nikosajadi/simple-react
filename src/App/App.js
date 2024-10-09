import React from "react";
import './App.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import PAINTING from './PAINTING.json'

function App() {
  return(
    <div className="App">
      <Header />
      <ul>
      {PAINTING.map((item) => 
      (
       <li>
        <h3>{item.name}</h3>
        <img src={item.image} />
        <span>Price: {item.price}</span> 
       </li>
      ))}
      </ul>
      <Footer />
    </div>
  )
}

export default App;