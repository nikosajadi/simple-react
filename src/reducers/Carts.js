

const CartReducer = (state, action) => {
console.log("action", action, state);
let newCarts = []
    switch (action.type) {
      case 'ADD_TO_CART': 
        return {
          ...state,
          // Add logic here to handle adding an item to the cart
          carts: [
            ...state.carts,
            action.id
          ]
        };

        case 'REMOVE_FROM_CART':
          newCarts = state.carts
          newCarts.splice(
            state.carts.findIndex((cartId) => cartId === action.id),
            1
          );
          localStorage.setItem("carts", JSON.stringify(newCarts));
          return {
            ...state,
            carts: newCarts,
          };
      default:
          break;
  }
}

export default CartReducer