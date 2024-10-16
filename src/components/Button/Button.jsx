import './Button.css';
import React from 'react';



// The handleClick prop is given a default value of an empty function to avoid errors.
// If no handleClick function is provided when using this Button component, 
// the empty function will be used, preventing errors when the button is clicked.

const Button = ({
  children, handleClick = () => {}, className, ...props
}) => (
  <button onClick={handleClick} className={`button ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
