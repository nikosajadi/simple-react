

const CartReducer = (state, action) => {
console.log("action", action);

    switch (action.type) {
      case 'ADD_TO_CART': 
        return {
          ...state,
          // Add logic here to handle adding an item to the cart
        };
         
      case 'REMOVE_FROM_CART': 
        return {
          ...state,
          // Add logic here to handle removing an item from the cart
        }; 
  
      default:
        return state; // Return the current state if no action matches
    }
  }
  
  export default CartReducer;