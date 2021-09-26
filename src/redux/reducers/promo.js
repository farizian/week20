import { getAllPromo, getAllPromoPending, getAllPromoError, getDetailPromo, getDetailPromoPending, getDetailPromoError} from "../../helper/var";

const promoState = {
  getAll: [],
  loadAll: false,
  errorAll: false,
  errorMessageAll: '',
  getDetail: {},
  loadDetail: false,
  errorDetail: false,
  errorMessageDetail: '',
}

const promoReducer = (state=promoState, action) => {
  switch (action.type) {
    case getAllPromoPending:
      return {...state, loadAll: true}
    case getAllPromo:
      return {...state, loadAll: false, getAll: action.payload}
    case getAllPromoError:
      return {...state, loadAll: false, errorAll: true, errorMessageAll: action.payload}
    case getDetailPromoPending:
      return {...state, loadDetail: true}
    case getDetailPromo:
      return {...state, loadDetail: false, getDetail: action.payload}
    case getDetailPromoError:
      return {...state, loadDetail: false, errorDetail: true, errorMessageDetail: action.payload}
    default:
      return state
  }
}

export default promoReducer