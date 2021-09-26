import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import productReducer from './reducers/product'
import userReducer from './reducers/users'
import cartReducer from './reducers/cart'
import transactionReducer from './reducers/transaction'
import promoReducer from './reducers/promo'

const reducers = combineReducers({
  product: productReducer,
  user: userReducer,
  cart: cartReducer,
  promo: promoReducer,
  transaction: transactionReducer

})

const middleware = applyMiddleware(thunk, logger)
const store = createStore(reducers, middleware)

export default store