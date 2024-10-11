import React from "react";
import './App.css';
import Layouts from "../Layouts/Layout";
import PAINTING from './PAINTING.json';
import About from '../About/About'
import Painting from "../Painting/Painting";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "../Contact/Contact";
import JockBlog from "../JockBlog/JokeBlog";

function App() {
  return (
    <div className="App">
      <Router>
        <Layouts>
          <Routes>
            <Route path="/" element={<Painting data={PAINTING} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/JokeBlog" element={<JockBlog />} />
          </Routes>
        </Layouts>
      </Router>
    </div>
  );
}

export default App;