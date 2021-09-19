import { getAllProduct, getAllProductPending, getAllProductError, getDetailProduct, getDetailProductPending, getDetailProductError, categoryProduct, categoryProductPending, categoryProductError} from "../../helper/var";

const productState = {
  getAll: [],
  loadAll: false,
  errorAll: false,
  errorMessageAll: '',
  getDetail: {},
  loadDetail: false,
  errorDetail: false,
  errorMessageDetail: '',
  category: [],
  loadCategory: false,
  errorCategory: false,
  errorMessageCategory: '',
  cart: {},
  loadCart: false,
  errorCart: false,
  errorMessageCart: ''
}

const productReducer = (state=productState, action) => {
  switch (action.type) {
    case getAllProductPending:
      return {...state, loadAll: true}
    case getAllProduct:
      return {...state, loadAll: false, getAll: action.payload}
    case getAllProductError:
      return {...state, loadAll: false, errorAll: true, errorMessageAll: action.payload}
    case getDetailProductPending:
      return {...state, loadDetail: true}
    case getDetailProduct:
      return {...state, loadDetail: false, getDetail: action.payload}
    case getDetailProductError:
      return {...state, loadDetail: false, errorDetail: true, errorMessageDetail: action.payload}
    case categoryProductPending:
      return {...state, loadCategory: true}
    case categoryProduct:
      return {...state, loadCategory: false, category: action.payload}
    case categoryProductError:
      return {...state, loadCategory: false, errorCategory: true, errorMessageCategory: action.payload}
    default:
      return state
  }
}

export default productReducer