/* eslint-disable array-callback-return */
import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/detail/body.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useHistory} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import axios from "axios"

const Detail =(props)=>{
const [toggle, setToggle]=useState()
const [prd, setPrd]=useState([])
const history = useHistory();
const token = localStorage.getItem('token')
const id = props.match.params.id
const [updData, setUpd]=useState({
  img: "",
  disc: "",
  name: "",
  price: "",
  category: ""
})
const getData =()=>{
  axios.get(`${process.env.REACT_APP_URL_PRODUCT}/${id}`, {headers: {token: token} })
  .then((response)=>{
    setPrd(response.data.field)
    console.log(response.data.field)
  }).catch((err)=>{
    console.log(err)
  })
}
useEffect(()=>{
  getData()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
const clicked=(data)=>{
  setToggle(data)
}
// update
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
    idStyle: `prd${Math.random()}`,
    img: img===undefined?"":img,
    disc: disc===undefined?"":disc,
    prdname: name===undefined?"":name,
    price: price===undefined?"":price,
    category_id: category==="main course"?1:category===undefined?"":2,
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
    setUpd({
      img: "",
      disc: "",
      name: "",
      price: "",
      category: ""
    })
    history.push("/product");
  }).catch((err)=>{
    console.log(err)
  })
}
const updatePrd=(event)=>{
  inputData()
  event.preventDefault();
  console.log(updData)
  const {img, disc, name, price, category}=updData
  const body={
    img: img===undefined?"":img,
    disc: disc===undefined?"":disc,
    prdname: name===undefined?"":name,
    price: price===undefined?"":price,
    category_id: category==="Main Course"?1:category===undefined?"":2
  }
  const headers={
    headers: {
      token: token
    }
  }
  axios.put(`${process.env.REACT_APP_URL_PRODUCT}/${id}`, body, headers)
  .then((response)=>{
    getData()
    alert("Update data berhasil")
    setUpd({
      img: "",
      disc: "",
      name: "",
      price: "",
      category: ""
    })
    history.push("/product");
  }).catch((err)=>{
    console.log(err)
  })
}

  return(
    <div>
      <Navbar logsign={false} product={true}/>
      <div className="container-fluid">
        <div className="row" id="dtlrow1">
          <div className="col-lg-5 col-12 viewprd">
            <div className="txt">
              <p className="textdtl" id="p1" onClick={()=>clicked('prd')}>Favorite & Promo</p>
              <p className="textdtl" id="p2" >{`> ${prd.map((e)=>(e.prdname))}`}</p>
            </div>
            {prd.map((e)=>{
              return(
              <div className="dtlproduct">
                <img className="prdimg" src={e.img} alt=""/>
                <h1 className="prdname">{e.prdname.toUpperCase()}</h1>
                <CurrencyFormat className="prdprice" value={e.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '}/>
              </div>
              )
            })}
            <div className="dtlbutton">
              <button className="btn" id="btn1" onClick={()=>clicked('update')}>Update Product</button>
              <button className="btn" onClick={()=>clicked('add')}>Add Product</button>
            </div>
          </div>
          {toggle==="update"?
          <div className="col-lg-7 col-12 desc">
            <div className="descbox2">
              <form className="insert" onSubmit={updatePrd}>
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
                  <input type="text" placeholder="Enter category" name="" onChange={addCategory}></input>
                </div>
                <button onClick={updatePrd}>submit</button>
              </form>
            </div>
          </div>:
          toggle==="add"?
          <div className="col-lg-7 col-12 desc">
            <div className="descbox2">
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
                  <input type="text" placeholder="Enter category" name="" onChange={addCategory}></input>
                </div>
                <button onClick={insertPrd}>submit</button>
              </form>
            </div>
          </div>:
            <div className="col-lg-7 col-12 desc">
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
                  <input onChange="" className="input" placeholder="Enter the time you’ll arrived"></input>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <div className="dtlprdcard">
          {prd.map((e)=>{
            return(
            <div className="card">
              <img src={e.img} alt="">
              </img>
              <div className="text">
                <h1 className="header">{e.prdname.toUpperCase()}</h1>
              </div>
              <div className="qtybtn">
                <button onClick="" className="btn">-</button>
                <p className="qty">1</p>
                <button onClick="" className="btn">+</button>
              </div>
            </div>
            )
          })}
        <button className="btncard">CHECKOUT</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Detail