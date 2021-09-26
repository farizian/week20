import axios from "axios";
import { API_URL } from "../../helper/env";
import { getAllProduct, getAllProductPending, getAllProductError, getDetailProduct, getDetailProductPending, getDetailProductError, categoryProduct, categoryProductPending, categoryProductError} from "../../helper/var";



export const UPDATE = (form, id)=> {
  const token = localStorage.getItem("token")
  return new Promise((resolve, reject) =>{
    const headers = {
      "Content-Type": "multipart/form-data",
      "token": token
    }
    axios.put(`${API_URL}product/${id}`, form, {headers})
    .then((response) => {
      resolve(response)
    }).catch ((err) => {
      reject(err)
    })
  })
}

export const INSERT = (form)=> {
  const token = localStorage.getItem("token")
  return new Promise((resolve, reject) =>{
    const headers = {
      "Content-Type": "multipart/form-data",
      "token": token
    }
    axios.post(`${API_URL}product`, form, {headers})
    .then((response) => {
      resolve(response)
    }).catch ((err) => {
      reject(err)
    })
  })
}
export const GET_CATEGORY_PRODUCT = () => {
  const token = localStorage.getItem("token")
  return (dispatch) => {
    dispatch({
      type: categoryProductPending
    })
    axios.get(`${API_URL}category`, {headers: {token: token} }).then((response) => {
      dispatch({
        type: categoryProduct,
        payload: response.data.field.data
      })
    }).catch((err) => {
      dispatch({
        type: categoryProductError,
        payload: `terjadi kesalahan, ${err}`
      })
    })
  }
}
export const GET_ALL_PRODUCT = (data) => {
  const token = localStorage.getItem("token")
  return (dispatch) => {
    dispatch({
      type: getAllProductPending
    })
    axios.get(`${API_URL}product?search=${!data ? '' : data}&field=id`, {headers: {token: token} }).then((response) => {
      dispatch({
        type: getAllProduct,
        payload: response.data.field.data
      })
    }).catch((err) => {
      dispatch({
        type: getAllProductError,
        payload: `terjadi kesalahan, ${err}`
      })
    })
  }
}
export const GET_DETAIL_PRODUCT = (id) => {
  const token = localStorage.getItem("token")
  return (dispatch) => {
    dispatch({
      type: getDetailProductPending
    })
    axios.get(`${API_URL}product/${id}`, {headers: {token: token} }).then((response) => {
      dispatch({
        type: getDetailProduct,
        payload: response.data.field[0]
      })
    }).catch((err) => {
      dispatch({
        type: getDetailProductError,
        payload: `terjadi kesalahan, ${err}`
      })
    })
  }
}

export const deletePrd = (id)=>{
  const token = localStorage.getItem("token")
  return new Promise((resolve, reject) => {
    const headers={
      "token": token
    }
    axios.delete(`${API_URL}product/${id}`, { headers })
    .then((response) => {
      resolve(response.data)
    })
    .catch((err)=>{
      reject(err)
    })
  })
  
}