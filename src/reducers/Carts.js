const CartReducer = (state, action) => {
  let newCarts = []; // Initialize newCarts as an empty array

  switch (action.type) {
    case 'ADD_TO_CART':
      newCarts = [...state.carts, action.id]; // Add the new item to the cart
      return {
        ...state,
        carts: newCarts, // Update the state with the new cart
      };

    case 'REMOVE_FROM_CART':
      // Remove the item from the cart by filtering it out (without mutation)
      newCarts = state.carts.filter(cartId => cartId !== action.id);
      return {
        ...state,
        carts: newCarts, // Update the state with the filtered cart
      };

    default:
      return state; // Always return the state in case of an unknown action
  }
};

export default CartReducer;
