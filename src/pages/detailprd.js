import "bootstrap/dist/css/bootstrap.min.css"
import '../css/detail/body.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CurrencyFormat from 'react-currency-format'
import { useState } from "react"

const Detail =(props)=>{
const {dataprd, setdataprd}=useState([{
  qty: 1
}])
const local = localStorage.getItem('data')
const prd = JSON.parse(local)
const id = props.match.params.id
// eslint-disable-next-line array-callback-return
const product = prd.find((e)=>{
  // eslint-disable-next-line eqeqeq
  if(e.id==id){
    return e
  }
})
const sizebtn =(data)=>{
  if(dataprd.length<=0){
    setdataprd({
      size: data
    })
  }else{
    setdataprd({
      ...dataprd,
      size: data
    })
  }
}
const delivbtn =(data)=>{
  if(dataprd.length<=0){
    setdataprd({
      delivery: data
    })
  }else{
    setdataprd({
      ...dataprd,
      delivery: data
    })
  }
}
const setTime=(event)=>{
  if(dataprd.length<=0){
    setdataprd({
      time: event.target.value,
      qty: 1
    })
  }else{
    setdataprd({
      ...dataprd,
      time: event.target.value,
      qty: 1
    })
  }
}
const setQty=()=>{
  const find = dataprd.findIndex((e=> e.qty <= 1))
  dataprd[find].qty +=1
}
const inputData=async()=>{
  try{
    const input1 = await sizebtn()
    const input2 = await delivbtn(input1)
    const input3 = await setTime(input2)
    return input3
  }catch(error){
    console.log(error)
  }
}
const addqty=()=>{
  inputData()
  setQty()
  setdataprd({
    qty: dataprd
  })
}
  return(
    <div>
      <Navbar logsign={false} product={true}/>
      <div className="container-fluid">
        <div className="row" id="dtlrow1">
          <div className="col-lg-5 col-12 viewprd">
            <div className="txt">
              <p className="textdtl" id="p1">Favorite & Promo</p>
              <p className="textdtl" id="p2" >{">"} Cold Brew</p>
            </div>
            <div className="dtlproduct">
              <img className="prdimg" src={product.img} alt=""/>
              <h1 className="prdname">{product.prdname.toUpperCase()}</h1>
              <CurrencyFormat className="prdprice" value={product.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '}/>
            </div>
            <div className="dtlbutton">
              <button className="btn" id="btn1">Add to Cart</button>
              <button className="btn">Ask a Staff</button>
            </div>
          </div>
          <div className="col-lg-7 col-12 desc">
            <div className="descbox">
              <div className="textbox">
                <p className="text" id="text1">Delivery only on <b>Monday to friday at  1 - 7 pm</b></p>
                <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className="sizemenu">
                <p className="text">Choose a size</p>
                <div className="sizebox">
                  <div onClick={()=>sizebtn('(Regular)')} className="size">R</div>
                  <div onClick={()=>sizebtn('(Large)')} className="size">L</div>
                  <div onClick={()=>sizebtn('(Xtra Large)')} className="size" id="xl">XL</div>
                </div>
              </div>
            </div>
            <div className="delivery">
              <p className="txtmenu">Choose Delivery Methods</p>
              <div className="buttonbox">
                <button onClick={()=>delivbtn('Dine in')} className="btn">Dine in</button>
                <button onClick={()=>delivbtn('Door Delivery')} className="btn" id="deliv2">Door Delivery</button>
                <button onClick={()=>delivbtn('Pick up')} className="btn">Pick up</button>
              </div>
              <div className="inputbox">
                <p className="text">Set time :</p>
                <input onChange={setTime} className="input" placeholder="Enter the time you’ll arrived"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dtlprdcard">
        <div className="card">
          <img src={product.img} alt="">
          </img>
          <div className="text">
            <h1 className="header">{product.prdname.toUpperCase()}</h1>
            <p className="txt">data</p>
            <p className="txt">data</p>
            <p className="txt">data</p>
          </div>
          <div className="qtybtn">
            <button className="btn">-</button>
            <p className="qty">2</p>
            <button onClick={addqty} className="btn">+</button>
          </div>
        </div>
        <button className="btncard">CHECKOUT</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Detail