import { useState, useEffect } from "react"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import "../css/product/section.css"
import "../css/product/aside.css"
import "bootstrap/dist/css/bootstrap.min.css"
import CurrencyFormat from 'react-currency-format'
import axios from "axios"


const Product=()=>{
const [localdata, setLocal]=useState([])
const [search, setSearch]=useState("")
const token = localStorage.getItem('token')
const getData =()=>{
  axios.get(`${process.env.REACT_APP_URL_PRODUCT}?field=id`, {headers: {token: token} })
  .then((response)=>{
    setLocal(response.data.field.data)
  }).catch((err)=>{
    console.log(err)
  })
}
useEffect(()=>{
  getData()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

const deletePrd=(id)=>{
  const headers={
    headers: {
      token: token
    }
  }
  axios.delete(`${process.env.REACT_APP_URL_PRODUCT}/${id}`,headers)
  .then(getData())
  .catch((err)=>{
    console.log(err)
  })
}

const searchPrd=(data)=>{
  setSearch(data)
  axios.get(`${process.env.REACT_APP_URL_PRODUCT}?search=${search}&field=id`, {headers: {token: token} })
  .then((response)=>{
    setLocal(response.data.field.data)
  }).catch((err)=>{
    console.log(err)
  })
}

  return(
    <div>
      <Navbar logsign={false} product={true} search={searchPrd}/>
      <main className="prdmain">
        <aside className="prdaside">
          <div className="header">
              <h1>Promo Today</h1>
              <p>Coupons will be updated every weeks. Check them out!</p>
          </div>
          <div className="content">
            <div className="promo">
              <div className="prmcard green">
                <img className="image" src="https://raw.githubusercontent.com/farizian/week5/master/img/image%2046.png" alt="" srcSet=""/>
                <div className="title">
                  <strong>HAPPY MOTHER'S DAY!</strong>
                  <p>Get one of our favorite menu free!</p>
                </div>
              </div>
              <div className="prmcard yellow">
                  <img className="image" src="https://raw.githubusercontent.com/farizian/week5/master/img/image%2043.png" alt="" srcSet=""/>
                  <div className="title">
                      <strong>Get a cup of coffee for free on sunday morning</strong>
                      <p>Only at 7 to 9 AM</p>
                  </div>
              </div>
              <div className="prmcard green">
                  <img className="image" src="https://raw.githubusercontent.com/farizian/week5/master/img/image%2046.png" alt="" srcSet=""/>
                  <div className="title">
                      <strong>HAPPY MOTHER'S DAY!</strong>
                      <p>Get one of our favorite menu free!</p>
                  </div>
              </div>
              <div className="prmcard red">
                  <img className="image" src="https://raw.githubusercontent.com/farizian/week5/master/img/image%2045.png" alt="" srcSet=""/>
                  <div className="title">
                      <strong>HAPPY MOTHER'S DAY!</strong>
                      <p>Get one of our favorite menu free!</p>
                  </div>
              </div>
            </div>
            <div className="action">
             <button className="btn">Apply Coupon</button>
            </div>
          </div>
          <div className="terms">
              <ol>
                  <b>Terms and Condition</b>
                  <li>You can only apply 1 coupon per day</li>
                  <li>It only for dine in</li>
                  <li>Buy 1 get 1 only for new user</li>
                  <li>Should make member card to apply coupon</li>
              </ol>
          </div>
        </aside>
        <section className="productitem">
          <nav className="prdmenu">
            <ul className="navprd">
              <li>Favorite & Promo</li>
              <li>Add Product</li>
              <li>Edit Product</li>
              <li>Foods</li>
              <li>Add-on</li>
            </ul>
          </nav>
          <div className="row">
            {localdata.map((e, i)=>{
              return(
                <div key={i} className="card col-lg-2 col-md-4 col-6" id={e.idStyle}>
                  <button onClick={()=>deletePrd(e.id)} className="remove">-</button>
                  <Link className="link" to={`/detailprd/${e.id}`}>
                  <img className="prdimg" src={e.img} alt=""/>
                  {e.disc===null?
                  null:e.disc===""?null:<p className="disc">{e.disc}</p>
                  }
                  <p className="prdname">{e.prdname}</p>
                  <CurrencyFormat className="harga" value={e.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '}/>
                  </Link>
                </div>
              )
            })}
          </div>
          <p className="end">*the price has been cutted by discount appears</p>
        </section>
      </main>
      <Footer/>
    </div>
  )

}

export default Product