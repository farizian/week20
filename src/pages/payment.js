/* eslint-disable array-callback-return */
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GET_DETAIL_PRODUCT, GET_CATEGORY_PRODUCT } from "../redux/actions/product"
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



  const getData =()=>{
    dispatch(GET_DETAIL_PRODUCT(id))
    dispatch(GET_DETAIL_USER())
    dispatch(GET_CATEGORY_PRODUCT())
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
        <div className="row" id="dtlrow1">
          <div className="col-lg-7 col-12 viewprd">
            
          </div>
          
            <div className="col-lg-5 col-12 desc">
              <div className="descbox">
                <div className="textbox">
                  <p className="text" id="text1">Delivery only on <b>Monday to friday at  1 - 7 pm</b></p>
                  <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="sizemenu">
                  <p className="text">Choose a size</p>
                  <div className="sizebox">
                    <div onClick="" className="size">R</div>
                    <div onClick="" className="size">L</div>
                    <div onClick="" className="size" id="xl">XL</div>
                  </div>
                </div>
              </div>
              <div className="delivery">
                <p className="txtmenu">Choose Delivery Methods</p>
                <div className="buttonbox">
                  <button onClick="" className="btn">Dine in</button>
                  <button onClick="" className="btn" id="deliv2">Door Delivery</button>
                  <button onClick="" className="btn">Pick up</button>
                </div>
                <div className="inputbox">
                  <p className="text">Set time :</p>
                  <Input className="Input" placeholder="Enter the time you’ll arrived"></Input>
                </div>
              </div>
            </div>
          
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Payment