import React, { useContext } from "react";
import './Footer.css';
import ThemeContext from "../../contexts/ThemeContext";

const Footer = () => {
  const themValues = useContext(ThemeContext);
  
  return (
    <div className="Footer">
      <h5>Developed By Niko</h5>
      <div>
        <button onClick={() => themValues.setActiveTheme('green')} className="green">Green</button>
        <button onClick={() => themValues.setActiveTheme('blue')} className="blue">Blue</button>
      </div>
    </div>
  );
};

export default Footer;
