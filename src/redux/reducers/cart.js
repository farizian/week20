import { insertCart, deleteCart} from "../../helper/var";

const cartState = {
  cart: [],
}

const cartReducer = (state=cartState, action) => {
  switch (action.type) {
    case insertCart:
      return {cart: [...state.cart, action.payload]}
    case deleteCart:
      return {cart: action.payload}
    default:
      return state
  }
}

export default cartReducer