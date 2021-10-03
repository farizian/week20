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
export const UPDATE_USER = (form, id)=> {
  const token = localStorage.getItem("token")
  return new Promise((resolve, reject) =>{
    const headers = {
      "Content-Type": "multipart/form-data",
      "token": token
    }
    axios.put(`${API_URL}user/${id}`, form, {headers})
    .then((response) => {
      resolve(response)
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
      const data = {
        Id: response.data.field[0].Id,
        img: response.data.field[0].img,
        first_name: response.data.field[0].first_name,
        last_name: response.data.field[0].last_name,
        birth_date: response.data.field[0].birth_date.slice(0, 10),
        gender: response.data.field[0].gender,
        username: response.data.field[0].username,
        email: response.data.field[0].email,
        password: response.data.field[0].password,
        address: response.data.field[0].address,
        phone_number: response.data.field[0].phone_number,
        status: response.data.field[0].status,
      }
      dispatch({
        type: getDetailUser,
        payload: data
      })
    }).catch((err) => {
      dispatch({
        type: getDetailUserError,
        payload: `terjadi kesalahan, ${err}`
      })
    })
  }
}
