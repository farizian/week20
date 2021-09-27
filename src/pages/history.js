/* eslint-disable array-callback-return */
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GET_DETAIL_PRODUCT, GET_CATEGORY_PRODUCT} from "../redux/actions/product"
import { INSERT_CART, DELETE_CART } from "../redux/actions/cart"
import { GET_DETAIL_TRANSACTION_MASTER } from "../redux/actions/transaction"
import { GET_DETAIL_USER } from "../redux/actions/users"
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/history/body.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useHistory, useParams} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import { API_URL } from '../helper/env'

const History =(props)=>{
  const transaction = useSelector(state => state.transaction.getDetailMaster)
  const dispatch = useDispatch()
  const getData =()=>{
    dispatch(GET_DETAIL_TRANSACTION_MASTER())
  }
  useEffect(()=>{
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  

  return(
    <body className="bodyhistory">
      <Navbar logsign={false} product={true}/>
      <div className="container-fluid">
        <div className="row">
          <table class="table table-bordered bg-white history">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Inv</th>
                <th scope="col">User</th>
                <th scope="col">Address</th>
                <th scope="col">Payment</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Tax</th>
                <th scope="col">Shipping</th>
                <th scope="col">Total</th>
                <th scope="col">Status</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {transaction.map((e, i) => (
                <tr>
                  <th scope="row">{i+1}</th>
                  <td>{`inv/${e.id}/${e.username}`}</td>
                  <td>{e.username}</td>
                  <td>{e.address}</td>
                  <td>{e.payment}</td>
                  <td>{e.subtotal}</td>
                  <td>{e.tax}</td>
                  <td>{e.shipping}</td>
                  <td>{e.total}</td>
                  <td>{e.status===1?"delivered":"pending"}</td>
                  <td><button>Details</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </body>
  )
}

export default History