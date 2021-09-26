import axios from "axios";
import { API_URL } from "../../helper/env";
import { getAllUser, getAllUserPending, getAllUserError, getDetailUser, getDetailUserPending, getDetailUserError } from "../../helper/var";



export const LOGIN = (data)=> {
  return new Promise((resolve, reject) =>{
    axios.post(`${API_URL}login`, data)
    .then((response) => {
      resolve(response.data)
      const tokenLogin = response.data.token
      const img = response.data.field[0].img
      const status = response.data.field[0].status
      console.log(img)
      localStorage.setItem("token", tokenLogin)
      localStorage.setItem("img", img)
      localStorage.setItem("status", status)
    }).catch ((err) => {
      reject(err)
    })
  })
}
export const REGISTER = (data)=> {
  return new Promise((resolve, reject) =>{
    axios.post(`${API_URL}register`, data)
    .then((response) => {
      resolve(response.data.success)
    }).catch ((err) => {
      reject(err)
    })
  })
}

export const GET_ALL_USER = (data) => {
  return (dispatch) => {
    dispatch({
      type: getAllUserPending
    })
    axios.get(`${API_URL}user?search=${data === undefined ? '' : data}&field=id`).then((response) => {
      dispatch({
        type: getAllUser,
        payload: response.data.field.data
      })
    }).catch((err) => {
      dispatch({
        type: getAllUserError,
        payload: `terjadi kesalahan, ${err}`
      })
    })
  }
}
export const GET_DETAIL_USER = () => {
  const token = localStorage.getItem("token")
  return (dispatch) => {
    dispatch({
      type: getDetailUserPending
    })
    axios.get(`${API_URL}userdetails`, {headers: {token: token} }).then((response) => {
      dispatch({
        type: getDetailUser,
        payload: response.data.field[0]
      })
    }).catch((err) => {
      dispatch({
        type: getDetailUserError,
        payload: `terjadi kesalahan, ${err}`
      })
    })
  }
}
