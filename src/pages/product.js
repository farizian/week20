import { useState, useEffect } from "react"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import "../css/product/section.css"
import "../css/product/aside.css"
import "bootstrap/dist/css/bootstrap.min.css"
import CurrencyFormat from 'react-currency-format'


const Product=()=>{
const product = [
{
  id: 1,
  idStyle: "prd1",
  img: "https://raw.githubusercontent.com/farizian/week5/master/img/sayur.png",
  disc: "10%",
  prdname: "Veggie tomato mix",
  price: 34000,
  qty: 1
},
{
  id: 2,
  idStyle: "prd2",
  img: "https://raw.githubusercontent.com/farizian/week5/master/img/hazelnut%20latte.png",
  disc: "",
  prdname: "Hazelnut Latte",
  price: 25000,
  qty: 1
},
{
  id: 3,
  idStyle: "prd3",
  img: "https://raw.githubusercontent.com/farizian/week5/master/img/summer%20fried%20rice.png",
  disc: "13%",
  prdname: "Summer Fried Rice",
  price: 32000,
  qty: 1
},
{
  id: 4,
  idStyle: "prd4",
  img: "https://raw.githubusercontent.com/farizian/week5/master/img/creamy.png",
  disc: "",
  prdname: "Creamy Ice Latte",
  price: 27000,
  qty: 1
},
{
  id: 5,
  idStyle: "prd5",
  img: "https://raw.githubusercontent.com/farizian/week5/master/img/drum%20stick.png",
  disc: "20%",
  prdname: "Drum Stick",
  price: 34000,
  qty: 1
},
{
  id: 6,
  idStyle: "prd6",
  img: "https://raw.githubusercontent.com/farizian/week5/master/img/salty%20rice.png",
  disc: "10%",
  prdname: "Salty Rice",
  price: 34000,
  qty: 1
},
{
  id: 7,
  idStyle: "prd7",
  img: "https://raw.githubusercontent.com/farizian/week5/master/img/summer%20fried%20rice.png",
  disc: "13%",
  prdname: "Summer Fried Rice",
  price: 32000,
  qty: 1
},
{
  id: 8,
  idStyle: "prd8",
  img: "https://raw.githubusercontent.com/farizian/week5/master/img/creamy.png",
  disc: "",
  prdname: "Creamy Ice Latte",
  price: 27000,
  qty: 1
},
{
  id: 9,
  idStyle: "prd9",
  img: "https://raw.githubusercontent.com/farizian/week5/master/img/sayur.png",
  disc: "10%",
  prdname: "Veggie tomato mix",
  price: 34000,
  qty: 1
},
{
  id: 10,
  idStyle: "prd10",
  img: "https://raw.githubusercontent.com/farizian/week5/master/img/hazelnut%20latte.png",
  disc: "",
  prdname: "Hazelnut Latte",
  price: 25000,
  qty: 1
},
{
  id: 11,
  idStyle: "prd11",
  img: "https://raw.githubusercontent.com/farizian/week5/master/img/summer%20fried%20rice.png",
  disc: "13%",
  prdname: "Summer Fried Rice",
  price: 32000,
  qty: 1
},
{
  id: 12,
  idStyle: "prd12",
  img: "https://raw.githubusercontent.com/farizian/week5/master/img/creamy.png",
  disc: "",
  prdname: "Creamy Ice Latte",
  price: 27000,
  qty: 1
}]
localStorage.setItem('data', JSON.stringify(product))
const local = localStorage.getItem('data')
const prd = JSON.parse(local)
const [prdData, setData]=useState(prd)
const [search, setSearch]=useState("")
const searchGet=(search)=>{
  setSearch(search)
}
useEffect(()=>{
  if(search && search !== ""){
    // eslint-disable-next-line array-callback-return
    const prdSearch = prd.filter((e)=>{
      if(e.prdname === search){
        return e
      }
    })
    setData(prdSearch)
  }else{
    setData(prd)
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [search])

  return(
    <div>
      <Navbar logsign={false} product={true} search={searchGet}/>
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
              <li>Coffee</li>
              <li>Non Coffee</li>
              <li>Foods</li>
              <li>Add-on</li>
            </ul>
          </nav>
          <div className="row">
            {prdData.map((e, i)=>{
              return(
                <div key={i} className="card col-lg-2 col-md-4 col-6" id={e.idStyle}>
                  <Link className="link" to={`/detailprd/${e.id}`}>
                  <img src={e.img} alt=""/>
                  {e.disc!==""?
                  <p className="disc">{e.disc}</p>:null
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