/* eslint-disable array-callback-return */
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GET_DETAIL_TRANSACTION } from "../redux/actions/transaction"
import { GET_DETAIL_USER } from "../redux/actions/users"
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/history/body.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useHistory, useParams} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import { API_URL } from '../helper/env'

const HistoryDetails =(props)=>{
  const transaction = useSelector(state => state.transaction.getDetailTr)
  const user = useSelector(state => state.user.getDetail)
  const dispatch = useDispatch()
  const history = useHistory();
  const params = useParams();
  const id = params.id
  const getData =()=>{
    dispatch(GET_DETAIL_TRANSACTION(id))
    dispatch(GET_DETAIL_USER())
  }
  useEffect(()=>{
    getData()
    console.log(transaction)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return(
    <body className="bodyhistory">
      <Navbar logsign={false} product={true}/>
      <div className="container-fluid">
        <div className="row">
          {transaction.length<1 ? null :
            <div className="col-12 mt-5 titleHistory">
              <h1 className="mt-5">Let’s see what you have bought!</h1>
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
              <div key={i} className="card p-3" style={{marginInline:"15px", marginTop:'0px', height:'fit-content', width:'fit-content'}}>
                <div className="cardrow d-flex align-items-center">
                  <div className="delimg w-25 d-flex">
                    <img src={`${API_URL}${e.img}`} className="rounded-circle w-100 h-75" alt=""/>
                  </div>
                  <div className="txt w-75 ps-4">
                    <h2 className="inv">{`Inv/${e.id}/${user.username}`}</h2>
                    <p>{e.prdname}</p>
                    <p>Price:&nbsp;
                    <CurrencyFormat className="hargaTr" value={e.price} displayType={'text'} thousandSeparator={true} hunderedSeparator={true} prefix={'Rp. '}/></p>
                    <p>Qty: {e.qty}</p>
                  </div>
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

export default HistoryDetails