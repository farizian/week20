/* eslint-disable array-callback-return */
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GET_DETAIL_PRODUCT, GET_CATEGORY_PRODUCT} from "../redux/actions/product"
import { INSERT_CART, DELETE_CART } from "../redux/actions/cart"
import { INSERT_TRANSACTION } from "../redux/actions/transaction"
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
  const [edit, setEdit]=useState(true)
  const history = useHistory();
  const params = useParams();
  const token = localStorage.getItem('token')
  const category = product.category
  const prd = product.getDetail
  const cart = useSelector(state => state.cart.cart)
  const transaction = useSelector(state => state.transaction)
  const subtotal = cart.reduce((total, e) => total + e.qty * e.price, 0)
  const tax = 200
  const shipping = cart.reduce((total, e) => total + e.shipping, 0)
  const total = subtotal+tax+shipping

  const getData =()=>{
    dispatch(GET_DETAIL_USER())
    dispatch(GET_CATEGORY_PRODUCT())
  }
  useEffect(()=>{
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect(()=>{
    setData({
      ...transState,
      address: user.address
    })
  }, [user])

  const [transState, setData] = useState({
    address: ''
  })
  const deleteBtn =(id)=>{
    dispatch(DELETE_CART(id))
  }
  const updAddress =(e)=>{
    setData({
      ...transState,
      address: e.target.value
    })
  }
  const updMethod=(e)=>{
    setData({
      ...transState,
      payment: e.target.value
    })
  }
  const editAddress=()=> setEdit(!edit)
  const submitTransaction=(e)=>{
    e.preventDefault();
    const { address, payment }=transState
    const body = {
      master: {
        user_id: user.Id,
      	address: address,
      	payment: payment,
      	subtotal: subtotal,
      	tax: tax,
      	shipping: shipping,
      	total: total
      },
      details: cart
    }
    console.log(body)
    INSERT_TRANSACTION(body).then((response) =>{
      alert("Transaksi Berhasil")
      const dataTr = transaction.getDetailMaster.map((e) => e)
      const dataTrPrd = transaction.getDetailTr.map((e) => e)
      console.log(dataTr)
      console.log(dataTrPrd)
    }).catch((err) =>{
      console.log(err)
    })
  }

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
                    <img src={!e.img||e.img===''?'https://raw.githubusercontent.com/farizian/week20/master/img/default.png':API_URL+e.img} alt=""></img>
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
                  <CurrencyFormat className="pricettl" value={total} displayType={'text'} thousandSeparator={true} prefix={'Rp. '}/>
                </div>
              </div>
          </div>
          
            <div className="col-lg-5 col-12 method">
              <div className="text d-flex" style={{width:"88%"}}>
                <h3>Address details</h3>
                <p onClick={editAddress} style={{cursor:'pointer'}}>edit</p>
              </div>
              <div className="descbox">
                <div className="textbox">
                  <p><strong>Delivery</strong>&nbsp;to:</p>
                  {edit?<textarea name="text" wrap="soft" value={transState.address} onChange={updAddress}></textarea>:<textarea name="text" wrap="soft" onChange={updAddress}></textarea>}
                </div>
              </div>
              <div className="text d-flex" style={{width:"88%", marginTop: '60px'}}>
                <h3 style={{width: "100%"}}>Payment Method</h3>
              </div>
              <div className="descbox pb-2" style={{height:'unset'}}>
                <ul className="paybox">
                  <li className="list-group-item rounded-0 pay">
                    <div className="custom-control custom-radio custom">
                      <input className="custom-control-input" id="customRadio1" type="radio" name="customRadio" value="card" onChange={updMethod}/>
                      <label className="custom-control-label d-flex" for="customRadio1">
                        <div className='imgbox d-flex align-items-center justify-content-center me-2' style={{width:'40px', height:'40px', borderRadius:'10px', backgroundColor:'#F47B0A'}}>
                          <img src="https://raw.githubusercontent.com/farizian/week20/master/img/bi_credit-card-2-front-fill.png" alt=""></img>
                        </div>
                        <p className="mb-0">Card</p>
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item rounded-0 d-flex align-items-center justify-content-between pay">
                    <div className="custom-control custom-radio custom">
                      <input className="custom-control-input" id="customRadio2" type="radio" name="customRadio" value="bank" onChange={updMethod}/>
                      <label className="custom-control-label d-flex" for="customRadio2">
                        <div className='imgbox d-flex align-items-center justify-content-center me-2' style={{width:'40px', height:'40px', borderRadius:'10px', backgroundColor:'#F47B0A'}}>
                          <img src="https://raw.githubusercontent.com/farizian/week20/master/img/dashicons_bank.png" alt=""></img>
                        </div>
                        <p className="mb-0">Bank account</p>
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item rounded-0 d-flex align-items-center justify-content-between pay">
                    <div className="custom-control custom-radio custom">
                      <input className="custom-control-input" id="customRadio3" type="radio" name="customRadio" value="cod" onChange={updMethod}/>
                      <label className="custom-control-label d-flex" for="customRadio3">
                        <div className='imgbox d-flex align-items-center justify-content-center me-2' style={{width:'40px', height:'40px', borderRadius:'10px', backgroundColor:'#FFBA33'}}>
                          <img src="https://raw.githubusercontent.com/farizian/week20/master/img/fast-delivery%203.png" alt=""></img>
                        </div>
                        <p className="mb-0">Cash on delivery</p>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="button">
                <button onClick={submitTransaction}>Confirm and Pay</button>
              </div>
            </div>
          
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Payment