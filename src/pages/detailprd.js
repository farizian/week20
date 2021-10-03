/* eslint-disable array-callback-return */
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GET_DETAIL_PRODUCT, UPDATE, GET_CATEGORY_PRODUCT} from "../redux/actions/product"
import { INSERT_CART } from "../redux/actions/cart"
import { GET_DETAIL_USER } from "../redux/actions/users"
import {Input} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/detail/body.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useHistory, useParams} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import { API_URL } from '../helper/env'

const Detail =(props)=>{
  const dispatch = useDispatch()
  const product = useSelector(state => state.product)
  const user = useSelector(state => state.user.getDetail)
  const [toggle, setToggle]=useState()
  const history = useHistory();
  const params = useParams();
  const id = params.id
  const category = product.category
  const prd = product.getDetail
  
  const getData = async()=>{
    await dispatch(GET_DETAIL_PRODUCT(id))
    await dispatch(GET_DETAIL_USER())
    await dispatch(GET_CATEGORY_PRODUCT())
  }
  useEffect(()=>{
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const [updData, setUpd]=useState({
    disc: "",
    name: "",
    price: "",
  })
  useEffect(() =>{
    setUpd({
      img: prd.img,
      disc: prd.disc,
      name: prd.prdname,
      price: prd.price,
      size: prd.size,
    })
  }, [prd])
  
  const [qty, setQty]=useState({
    qty: 1
  })
  const btnQty = (data)=>{
    if(data === "add") {
      setQty({
        qty: qty.qty+=1
      })
    } else if (data === "min") {
      setQty({
        qty: qty.qty<=1?1:qty.qty-=1
      })
    }
  }
  const clicked=(data)=>{
    setToggle(data)
  }
  // update
  const setChange=(event)=>{
    setUpd({
      ...updData,
      [event.target.name]: event.target.value,
    })
  }
  const setFile = (event)=>{
    setUpd({
      ...updData,
      img: event.target.files[0]
    })
  }
  const addCart=()=>{
    const data = {
      user_id: user.Id,
      img: prd.img,
      prdname: prd.prdname,
      product_id: prd.id,
      qty: qty.qty,
      size: prd.size==="XL"?"Extra Large":prd.size==="L"?"Large":"Regular",
      price: prd.price,
      subtotal: prd.price*qty.qty,
      tax: 200,
      shipping: 1000,
      total: prd.price*qty.qty+200+1000
    }
    console.log(data)
    dispatch(INSERT_CART(data))
    history.push('/product')
  }
  const checkout = () => {
    const data = {
      user_id: user.Id,
      img: prd.img,
      prdname: prd.prdname,
      product_id: prd.id,
      qty: qty.qty,
      size: prd.size==="XL"?"Extra Large":prd.size==="L"?"Large":"Regular",
      price: prd.price,
      subtotal: prd.price*qty.qty,
      tax: 200,
      shipping: 1000,
      total: prd.price*qty.qty+200+1000
    }
    dispatch(INSERT_CART(data))
    history.push('/payment')
  }
  const updatePrd=(event)=>{
    event.preventDefault();
    const {img, disc, name, price, size, category}=updData
    const formData = new FormData()
    formData.append("img", img)
    formData.append("disc", disc===undefined||""||null?"":disc)
    formData.append("prdname", name===undefined||""||null?"":name)
    formData.append("price", price===undefined||""||null?"":price)
    formData.append("size", size===undefined||""||null?prd.size:size)
    formData.append("category_id", category===undefined||""||null?prd.category: category)
    UPDATE(formData, id).then((response) => {
      alert(response.data.message)
      history.push("/product");
    }).catch((err) =>{
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
              <p className="textdtl" id="p2" >{`> ${prd.prdname}`}</p>
            </div>
              <div className="dtlproduct">
                <img className="prdimg" src={API_URL+prd.img} alt=""/>
                <h1 className="prdname">{prd.prdname}</h1>
                <CurrencyFormat className="prdprice" value={prd.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '}/>
              </div>
            <div className="dtlbutton">
              {user.status===0?(<button className="btn" id="btn1" onClick={()=>clicked('update')}>Update Product</button>):null}
              {user.status===1?(<button className="btn" onClick={addCart}>Add to Cart</button>):null}
            </div>
          </div>
          {toggle==="update"?
          <div className="col-lg-7 col-12 desc">
            <div className="descbox2">
              <form className="insert" >
                <div className="textbox" id="txtbox1">
                  <h3>Picture :</h3>
                  <Input type="file" name="img" onChange={setFile}></Input>
                </div>
                <div className="textbox">
                  <h3>Discount :</h3>
                  <Input type="text" placeholder="Enter your discount" name="disc" value={updData.disc} onChange={setChange}></Input>
                </div>
                <div className="textbox">
                  <h3>Product Name :</h3>
                  <Input type="text" placeholder="Enter product name" name="name" value={updData.name} onChange={setChange}></Input>
                </div>
                <div className="textbox">
                  <h3>Price :</h3>
                  <Input type="number" placeholder="Enter your price" name="price" value={updData.price} onChange={setChange}></Input>
                </div>
                <div className="textbox">
                  <h3>Size :</h3>
                  <select name="size" value={updData.size} class="form-control" onChange={setChange}>
                    <option value="R" >Regular</option>
                    <option value="L" >Large</option>
                    <option value="XL" >Extra Large</option>
                  </select>
                </div>
                <div className="textbox">
                  <h3>Category :</h3>
                  <select name="category" class="form-control" onChange={setChange}>{category.map((e)=>{return(<option value={e.id}>{e.category}</option>)})}</select>
                </div>
                <button type="submit" onClick={updatePrd}>submit</button>
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
                  <div className="sizebox">
                    <div onClick="" className="size">{prd.size}</div>
                  </div>
                </div>
              </div>
              {/* <div className="delivery">
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
              </div> */}
            </div>
          }
        </div>
      </div>
      {user.status===1?(
        <div className="dtlprdcard">
        <div className="card">
          <img src={API_URL+prd.img} alt="">
          </img>
          <div className="text">
            <h1 className="header">{prd.prdname}</h1>
            <div className="boxPrd" style={{display: "flex"}}>
            <p className="qty" style={{marginRight: "10px"}}>x{qty.qty}</p>
            <p>{prd.size==="XL"?"(Extra Large)":prd.size==="L"?"(Large)":"(Regular)"}</p>
            </div>
          </div>
          <div className="qtybtn">
            <button onClick={()=>btnQty("min")} className="btn">-</button>
            <p className="qty">{qty.qty}</p>
            <button onClick={()=>btnQty("add")} className="btn">+</button>
          </div>
        </div>
        <button className="btncard" onClick={checkout}>CHECKOUT</button>
      </div>
      ):null}
      <Footer/>
    </div>
  )
}

export default Detail