/* eslint-disable array-callback-return */
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GET_DETAIL_PRODUCT, GET_CATEGORY_PRODUCT} from "../redux/actions/product"
import { INSERT_CART, DELETE_CART } from "../redux/actions/cart"
import { INSERT_TRANSACTION } from "../redux/actions/transaction"
import { GET_DETAIL_USER } from "../redux/actions/users"
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/userProfile/body.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useHistory, useParams} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import { API_URL } from '../helper/env'

const History =(props)=>{


  const getData =()=>{
    
  }
  useEffect(()=>{
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  

  return(
    <div>
      <Navbar logsign={false} product={true}/>
      <div className="container-fluid">
        
      </div>
      <Footer/>
    </div>
  )
}

export default History