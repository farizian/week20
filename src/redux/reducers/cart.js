import { insertCart, deleteCart, resetCart } from "../../helper/var";

const cartState = {
  cart: [],
}

const cartReducer = (state=cartState, action) => {
  switch (action.type) {
    case insertCart:
      return {cart: [...state.cart, action.payload]}
    case deleteCart:
      return {cart: action.payload}
    case resetCart:
      return {cart: []}
    default:
      return state
  }
}

export default cartReducer