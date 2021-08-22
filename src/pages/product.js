import { useState, useEffect } from "react"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {Link, useHistory, useLocation} from 'react-router-dom'
import "../css/product/section.css"
import "../css/product/aside.css"
import "bootstrap/dist/css/bootstrap.min.css"
import CurrencyFormat from 'react-currency-format'
import axios from "axios"


const Product=()=>{
const [localdata, setLocal]=useState([])
const [updData, setUpd]=useState({
  img: "",
  disc: "",
  name: "",
  price: "",
  category: ""
})
const [toggle, setToggle]=useState()
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
const navproduct=(data)=>{
  setToggle(data)
}
const addImg=(event)=>{
  setUpd({
    img: event.target.value
  })
}
const addDisc=(event)=>{
  setUpd({
    ...updData,
    disc: event.target.value
  })
}
const addName=(event)=>{
  setUpd({
    ...updData,
    name: event.target.value
  })
}
const addPrice=(event)=>{
  setUpd({
    ...updData,
    price: event.target.value
  })
}
const addCategory=(event)=>{
  setUpd({
    ...updData,
    category: event.target.value
  })
}
const inputData=async()=>{
  try{
    const input1 = await addImg()
    const input2 = await addDisc(input1)
    const input3 = await addName(input2)
    const input4 = await addPrice(input3)
    const input5 = await addCategory(input4)
    return input5
  }catch(error){
    console.log(error)
  }
}

const insertPrd=(event)=>{
  inputData()
  event.preventDefault();
  console.log(updData)
  const {img, disc, name, price, category}=updData
  const body={
    img: img,
    disc: disc,
    prdname: name,
    price: price,
    category_id: category,
    qty: 1
  }
  const headers={
    headers: {
      token: token
    }
  }
  axios.post(`${process.env.REACT_APP_URL_PRODUCT}`, body, headers)
  .then((response)=>{
    getData()
    alert("input data berhasil")
    setToggle("product")
  }).catch((err)=>{
    console.log(err)
  })
}
const deletePrd=(id)=>{
  const headers={
    headers: {
      token: token
    }
  }
  axios.delete(`${process.env.REACT_APP_URL_PRODUCT}/${id}`,headers)
  .then((response)=>{
    getData()
  })
  .catch((err)=>{
    console.log(err)
  })
}
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
const location= useLocation()
const history = useHistory()
const [search, setSearch]=useState("")
const query = new URLSearchParams(location.search)
const hasilSearch = query.get("search")

const searchGet=(search)=>{
  setSearch(search)
  history.push(`/product?search=${search}`)
}
useEffect(()=>{
  if(hasilSearch && hasilSearch !== ""){
    // eslint-disable-next-line array-callback-return
    const prdSearch = prd.filter((e)=>{
      if(e.prdname === hasilSearch){
        return e
      }
    })
    setLocal(prdSearch)
  }else{
    setLocal(prd)
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
              <li onClick={()=>navproduct("product")}>Favorite & Promo</li>
              <li onClick={()=>navproduct("addprd")}>Add Product</li>
              <li>Edit Product</li>
              <li>Foods</li>
              <li>Add-on</li>
            </ul>
          </nav>
          <div className="row">
            {toggle==="addprd"?
            <form className="insert" onSubmit={insertPrd}>
            <div className="textbox" id="txtbox1">
              <h3>Product Img Link :</h3>
              <input type="text" placeholder="Enter your img address" name="" onChange={addImg}></input>
            </div>
            <div className="textbox">
              <h3>Discount :</h3>
              <input type="text" placeholder="Enter your discount" name="" onChange={addDisc}></input>
            </div>
            <div className="textbox">
              <h3>Product Name :</h3>
              <input type="text" placeholder="Enter product name" name="" onChange={addName}></input>
            </div>
            <div className="textbox">
              <h3>Price :</h3>
              <input type="number" placeholder="Enter your price" name="" onChange={addPrice}></input>
            </div>
            <div className="textbox">
              <h3>Category :</h3>
              <input type="number" placeholder="Enter category" name="" onChange={addCategory}></input>
            </div>
            <button onClick={insertPrd}>submit</button>
          </form>:
            localdata.map((e, i)=>{
              return(
                <div key={i} className="card col-lg-2 col-md-4 col-6" id={e.idStyle}>
                  <button onClick={()=>deletePrd(e.id)} className="remove">-</button>
                  <Link className="link" to={`/detailprd/${e.id}`}>
                  <img className="prdimg" src={e.img} alt=""/>
                  {e.disc!==null?
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