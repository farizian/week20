/* eslint-disable array-callback-return */
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GET_DETAIL_PRODUCT, GET_CATEGORY_PRODUCT, GET_CART } from "../redux/actions/product"
import { GET_DETAIL_USER } from "../redux/actions/users"
import {Input} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/payment/body.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useHistory, useParams} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import { API_URL } from '../helper/env'

const Payment =(props)=>{
  const dispatch = useDispatch()
  const product = useSelector(state => state.product)
  const user = useSelector(state => state.user.getDetail)
  const [toggle, setToggle]=useState()
  const history = useHistory();
  const params = useParams();
  const token = localStorage.getItem('token')
  const id = params.id
  const category = product.category
  const prd = product.getDetail
  const cart = product.cart



  const getData =async()=>{
    await dispatch(GET_DETAIL_PRODUCT(id))
    await dispatch(GET_DETAIL_USER())
    await dispatch(GET_CATEGORY_PRODUCT())
    await dispatch(GET_CART())
  }
  useEffect(()=>{
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  // const cartData = localStorage.getItem("cart")
  // const cart = JSON.parse(cartData)
  return(
    <div>
      <Navbar logsign={false} product={true}/>
      <div className="container-fluid">
        <div className="row" id="dtlrow2">
          <div className="col-lg-7 col-12 summary">
              <div className="titlebox">
                <h1>Checkout your item now!</h1>
              </div>
              <div className="descbox">
                <div className="textbox bg-info" >
                  <h1 className="text" id="text1" >Order Summary</h1>
                </div>
                <div className="prdbox" >
                  <img src="" alt=""></img>
                  <div className="txt" style={{display: "flex", flexDirection: "column"}}>
                    <p>Text</p>
                    <p>x1</p>
                    <p>Reg</p>
                  </div>
                  <div className="txt">
                    <p>price</p>
                  </div>
                </div>
                <div className="pricemenu" style={{display: "flex"}}>
                  <div className="txt">
                    <p>SUBTOTAL</p>
                    <p>TAX</p>
                    <p>SHIPPING</p>
                  </div>
                  <div className="txt">
                    <p>PRICE</p>
                    <p>PRICE</p>
                    <p>PRICE</p>
                  </div>
                </div>
                <div className="sizebox" style={{display: "flex"}}>
                  <h1 onClick="" className="total">TOTAL</h1>
                  <h1 onClick="" className="pricettl">RP.</h1>
                </div>
              </div>
          </div>
          
            <div className="col-lg-5 col-12 method">
              <div className="text" style={{display:"flex", width:"88%"}}>
                <h3>Address details</h3>
                <p>edit</p>
              </div>
              <div className="descbox">
                
              </div>
              <div className="text" style={{display:"flex", width:"88%"}}>
                <h3>Address details</h3>
                <p>edit</p>
              </div>
              <div className="descbox">
                
              </div>
              <div className="button">
                <button>Confirm and Pay</button>
              </div>
            </div>
          
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Payment