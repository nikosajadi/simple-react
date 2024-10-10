// The handleClick prop is given a default value of an empty function to avoid errors.
// If no handleClick function is provided when using this Button component, 
// the empty function will be used, preventing errors when the button is clicked.
const Button = ({ children, handleClick = () => {} }) => {
  return (
    <button onClick={handleClick} className='button'>
      {children}
    </button>
  );
}

export default Button;
