/* eslint-disable array-callback-return */
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GET_DETAIL_PRODUCT, GET_CATEGORY_PRODUCT} from "../redux/actions/product"
import { INSERT_CART, DELETE_CART } from "../redux/actions/cart"
import { GET_DETAIL_TRANSACTION_MASTER, DEL_TRANS } from "../redux/actions/transaction"
import { GET_DETAIL_USER } from "../redux/actions/users"
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/history/body.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AiOutlineDelete } from "react-icons/ai";
import {useHistory, useParams} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import { API_URL } from '../helper/env'

const History =(props)=>{
  const transaction = useSelector(state => state.transaction.getDetailMaster)
  const dispatch = useDispatch()
  const history = useHistory()
  const getData =()=>{
    dispatch(GET_DETAIL_TRANSACTION_MASTER())
  }
  useEffect(()=>{
    getData()
    console.log(transaction)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  const delTrans = (id) => {
    DEL_TRANS(id).then((response) => {
      getData()
      console.log(response)
    }).catch((err) => {
      console.log(err)
    })
  }
  return(
    <body className="bodyhistory">
      <Navbar logsign={false} product={true}/>
      <div className="container-fluid">
        <div className="row">
          {transaction.length<1 ? null :
            <div className="col-12 mt-5 titleHistory">
              <h1 className="mt-5">Let’s see what you have bought!</h1>
              <small className="noteHistory">Click trash to delete</small>
            </div>
          }
          <div className="rowcard d-flex flex-wrap justify-content-center">
            {transaction.length <1 ?
              <div className="d-flex flex-column align-items-center">
              <img src="https://www.klipplastik.co.id/assets/img/empty_cart.png" alt=""/>
              <p className="text-center" style={{color:'white'}}>Your history transaction was empty</p>
              <button className="btempty" onClick={()=>history.push('/product')}>add your transaction now!</button>
              </div> :
            transaction.map((e, i) => (
              <div key={i} className="card2 p-3" style={{marginInline:"15px", marginBottom:'30px'}}>
                <div className="cardrow d-flex">
                  <div className="txt w-75">
                    <h2 className="inv">{`Inv/${e.id}/${e.username}`}</h2>
                    <p>Total:&nbsp;
                    <CurrencyFormat className="harga" value={e.total} displayType={'text'} thousandSeparator={true} hunderedSeparator={true} prefix={'Rp. '}/></p>
                    <p>Address: {e.address}</p>
                    <p>Payment Method: {e.payment}</p>
                    <p>Status: {e.status===1?"delivered":"pending"}</p>
                  </div>
                  <div className="delimg w-25 d-flex justify-content-end">
                    <AiOutlineDelete
                      size={28}
                      onClick={()=>delTrans(e.id)}
                      style={{cursor:'pointer'}}
                      className="icon ms-2 text-danger"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <p 
                    className="m-0"
                    style={{cursor:'pointer', color:'red', fontWeight:'500'}}
                    onClick={()=>history.push(`detailhistory/${e.id}`)}
                  >Details</p>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </div>
      <Footer/>
    </body>
  )
}

export default History