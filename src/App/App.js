import React from "react";
import './App.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
//import PAINTING from './PAINTING.json'
import Painting from "./../Painting/Painting"

function App() {
  return(
    <div className="App">
      <Header />
      <Painting />
      <Footer />
    </div>
  )
}

export default App;