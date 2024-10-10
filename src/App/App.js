import React from "react";
import './App.css';
import Layouts from "../Layouts/Layout";
import PAINTING from './PAINTING.json';
import About from '../About/About'
import Painting from "../Painting/Painting";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "../Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
          <Layouts>
              <Painting data={PAINTING} />
              </Layouts>
            </>
          } />
          <Route path="/about" element={
            <Layouts><About /></Layouts>} />

          <Route path="/contact" element={
            <Layouts><Contact /></Layouts>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
