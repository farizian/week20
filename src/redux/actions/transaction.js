import axios from "axios";
import { API_URL } from "../../helper/env";
import { getDetailMasterTrPending, getDetailMasterTr, getDetailMasterTrError, getDetailTrPending, getDetailTr, getDetailTrError} from "../../helper/var";



export const INSERT_TRANSACTION = (data)=> {
  const token = localStorage.getItem("token")
  return new Promise((resolve, reject) =>{
    axios.post(`${API_URL}transaction`, data, {headers: {token: token} })
    .then((response) => {
      resolve(response)
    }).catch ((err) => {
      reject(err)
    })
  })
}
export const GET_DETAIL_TRANSACTION_MASTER = () => {
  const token = localStorage.getItem("token")
  return (dispatch) => {
    dispatch({
      type: getDetailMasterTrPending
    })
    axios.get(`${API_URL}mytransaction`, {headers: {token: token} }).then((response) => {
      dispatch({
        type: getDetailMasterTr,
        payload: response.data.field
      })
    }).catch((err) => {
      dispatch({
        type: getDetailMasterTrError,
        payload: `terjadi kesalahan, ${err}`
      })
    })
  }
}

export const GET_DETAIL_TRANSACTION = (id) => {
  const token = localStorage.getItem("token")
  return (dispatch) => {
    dispatch({
      type: getDetailTrPending
    })
    axios.get(`${API_URL}transaction/${id}`, {headers: {token: token} }).then((response) => {
      dispatch({
        type: getDetailTr,
        payload: response.data.field
      })
    }).catch((err) => {
      dispatch({
        type: getDetailTrError,
        payload: `terjadi kesalahan, ${err}`
      })
    })
  }
}

