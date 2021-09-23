/* eslint-disable array-callback-return */
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GET_DETAIL_PRODUCT, GET_CATEGORY_PRODUCT} from "../redux/actions/product"
import { INSERT_CART, DELETE_CART } from "../redux/actions/cart"
import { GET_DETAIL_USER } from "../redux/actions/users"
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
  const category = product.category
  const prd = product.getDetail
  const cart = useSelector(state => state.cart.cart)
  const subtotal = cart.reduce((total, e) => total + e.qty * e.price, 0)
  const tax = 200
  const shipping = cart.reduce((total, e) => total + e.shipping, 0)

  const getData =()=>{
    dispatch(GET_DETAIL_USER())
    dispatch(GET_CATEGORY_PRODUCT())
  }
  useEffect(()=>{
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const deleteBtn =(id)=>{
    dispatch(DELETE_CART(id))
  }
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
                <div className="textbox" >
                  <h1 className="text" id="text1" >Order Summary</h1>
                </div>
                {cart.map((e, i) => (
                  <div key={i} id={`idbox${i}`} className="prdbox" >
                    <img src={API_URL+e.img} alt=""></img>
                    <div className="txt" style={{display: "flex", flexDirection: "column"}}>
                      <p>{e.prdname}</p>
                      <p>x{e.qty}</p>
                      <p>{e.size}</p>
                    </div>
                    <div className="txt2">
                      <button onClick={()=>deleteBtn(e.product_id)}>-</button>
                      <CurrencyFormat className="num" value={e.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '}/>
                    </div>
                  </div>
                ))}
                <div className="pricemenu" style={{display: "flex"}}>
                  <div className="txt">
                    <p>SUBTOTAL</p>
                    <p>TAX</p>
                    <p>SHIPPING</p>
                  </div>
                  <div className="txt2">
                    <CurrencyFormat className="num mt-0" value={subtotal} displayType={'text'} thousandSeparator={true} prefix={'Rp. '}/>
                    <CurrencyFormat className="num" value={tax} displayType={'text'} thousandSeparator={true} prefix={'Rp. '}/>
                    <CurrencyFormat className="num" value={shipping} displayType={'text'} thousandSeparator={true} prefix={'Rp. '}/>
                  </div>
                </div>
                <div className="totalbox" style={{display: "flex"}}>
                  <h1 onClick="" className="total">TOTAL</h1>
                  <CurrencyFormat className="pricettl" value={subtotal+tax+shipping} displayType={'text'} thousandSeparator={true} prefix={'Rp. '}/>
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