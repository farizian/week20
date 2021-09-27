import { getAllTransaction, getAllTransactionPending, getAllTransactionError, getDetailMasterTrPending, getDetailMasterTr, getDetailMasterTrError, getDetailTrPending, getDetailTr, getDetailTrError} from "../../helper/var";

const transactionState = {
  getAll: [],
  loadAll: false,
  errorAll: false,
  errorMessageAll: '',
  getDetailMaster: [],
  loadDetailMaster: false,
  errorDetailMaster: false,
  errorMessageDetailMaster: '',
  getDetailTr: [],
  loadDetailTr: false,
  errorDetailTr: false,
  errorMessageDetailTr: '',
}

const transactionReducer = (state=transactionState, action) => {
  switch (action.type) {
    case getAllTransactionPending:
      return {...state, loadAll: true}
    case getAllTransaction:
      return {...state, loadAll: false, getAll: action.payload}
    case getAllTransactionError:
      return {...state, loadAll: false, errorAll: true, errorMessageAll: action.payload}
    case getDetailMasterTrPending:
      return {...state, loadDetailMaster: true}
    case getDetailMasterTr:
      return {...state, loadDetailMaster: false, getDetailMaster: action.payload}
    case getDetailMasterTrError:
      return {...state, loadDetailMaster: false, errorDetailMaster: true, errorMessageDetailMaster: action.payload}
    case getDetailTrPending:
      return {...state, loadDetailTr: true}
    case getDetailTr:
      return {...state, loadDetailTr: false, getDetailTr: action.payload}
    case getDetailTrError:
      return {...state, loadDetailTr: false, errorDetailTr: true, errorMessageDetailTr: action.payload}
    default:
      return state
  }
}

export default transactionReducer