import { insertCart, deleteCart} from "../../helper/var";

export const INSERT_CART = (data) => {
  return (dispatch) => {
    dispatch({
      type: insertCart,
      payload: data
    })
  }
}
export const DELETE_CART = (id)=>{
  return (dispatch, getState) => {
    // eslint-disable-next-line array-callback-return
    const newCart = getState().cart.cart.filter((e) =>{
      if(e.product_id !== id) {
        return e
      }
    })
    dispatch({
      type: deleteCart,
      payload: newCart
    })
  }
}