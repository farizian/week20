import axios from "axios";
import { API_URL } from "../../helper/env";
import { getAllPromo, getAllPromoPending, getAllPromoError, getDetailPromo, getDetailPromoPending, getDetailPromoError} from "../../helper/var";



export const UPDATE_PROMO = (form, id)=> {
  const token = localStorage.getItem("token")
  return new Promise((resolve, reject) =>{
    const headers = {
      "Content-Type": "multipart/form-data",
      "token": token
    }
    axios.put(`${API_URL}promo/${id}`, form, {headers})
    .then((response) => {
      resolve(response)
    }).catch ((err) => {
      reject(err)
    })
  })
}

export const INSERT_PROMO = (form)=> {
  const token = localStorage.getItem("token")
  return new Promise((resolve, reject) =>{
    const headers = {
      "Content-Type": "multipart/form-data",
      "token": token
    }
    axios.post(`${API_URL}promo`, form, {headers})
    .then((response) => {
      resolve(response)
    }).catch ((err) => {
      reject(err)
    })
  })
}
export const GET_ALL_PROMO = (data) => {
  const token = localStorage.getItem("token")
  return (dispatch) => {
    dispatch({
      type: getAllPromoPending
    })
    axios.get(`${API_URL}promo?search=${!data ? '' : data}&field=id`, {headers: {token: token} }).then((response) => {
      dispatch({
        type: getAllPromo,
        payload: response.data.field.data
      })
    }).catch((err) => {
      dispatch({
        type: getAllPromoError,
        payload: `terjadi kesalahan, ${err}`
      })
    })
  }
}
export const GET_DETAIL_PROMO = (id) => {
  const token = localStorage.getItem("token")
  return (dispatch) => {
    dispatch({
      type: getDetailPromoPending
    })
    axios.get(`${API_URL}promo/${id}`, {headers: {token: token} }).then((response) => {
      dispatch({
        type: getDetailPromo,
        payload: response.data.field[0]
      })
    }).catch((err) => {
      dispatch({
        type: getDetailPromoError,
        payload: `terjadi kesalahan, ${err}`
      })
    })
  }
}

export const DELETE_PROMO = (id)=>{
  const token = localStorage.getItem("token")
  return new Promise((resolve, reject) => {
    const headers={
      "token": token
    }
    axios.delete(`${API_URL}promo/${id}`, { headers })
    .then((response) => {
      resolve(response.data)
    })
    .catch((err)=>{
      reject(err)
    })
  })
  
}