/* eslint-disable array-callback-return */
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GET_DETAIL_PRODUCT, GET_CATEGORY_PRODUCT} from "../redux/actions/product"
import { INSERT_CART, DELETE_CART } from "../redux/actions/cart"
import { INSERT_TRANSACTION } from "../redux/actions/transaction"
import { GET_DETAIL_USER } from "../redux/actions/users"
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/userProfile/body.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useHistory, useParams} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import { API_URL } from '../helper/env'

const Profile =(props)=>{


  const getData =()=>{
    
  }
  useEffect(()=>{
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  

  return(
    <div className="body">
      <Navbar logsign={false} product={true}/>
      <div className="container-fluid">
        <div className="row">
          <p className="title">User Profile</p>
          <aside className="photobox col-lg-4">
            <div className="rowimg">
              <div className="imgbox">
                <img src="https://s3-alpha-sig.figma.com/img/0ccd/b210/685819c7ff9c7e2cbb23e6190ab4ef92?Expires=1633305600&Signature=Kn-WeUBXcMn~KDTz6fvz8uVrzeGIhgWxBsTipCVul-nPpMjJWzEYwvF0JuL85kwhF1oZpVADAZ91b-rOlbbQJcEymxN00AubU2HjnMIPcKSl91mwzMH2jwjBqifuWm2Fb~zykbJZK9Ft4KFuIDBmaQm1Nt4q4HPk1jupKnE-4SV13BhvRL6P-ahG5N5JiuXJ-61QwoHvvSSXcxeFD9CcO4uNAfvS79Z6LVDAXpzVjW9OZy9xS1q-QECJHDD8HnRu6OOzhL0ejagZTTdIKpC6pTY5gKz3D4UQbyscDDv66G8pFCd08R6lRt-bdoM7Xod7M2x~e0g5fBXpaqhUuFbPaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=""></img>
                <h3>Zulaikha</h3>
                <p>zulaikha17@gmail.com</p>
              </div>
              <div className="buttonbox1">
                <button className="select">Choose photo</button>
                <button className="remove">Remove photo</button>
              </div>
              <div className="buttonbox2">
                <h3>Do you want to save the change?</h3>
                <button className="save">Save Change</button>
                <button className="cancel">Cancel</button>
                <button className="logout">Log out</button>
              </div>
            </div>
          </aside>
          <section className="inputcontainer col-lg-8">
            <div className="container-fluid">
            <div className="row">
              <div className="box1 col-lg-7">
                <h3>Contacts</h3>
                <div className="inputbox1">
                  <p>Email address :</p>
                  <input type="text"></input>
                </div>
                <div style={{marginTop:"30px", marginBottom:"28px"}} className="inputbox1">
                  <p>Delivery adress :</p>
                  <textarea name="text" wrap="soft" value="" onChange=""></textarea>
                </div>
                <h3>Details</h3>
                <div style={{marginTop:"30px"}} className="inputbox1">
                  <p>Display name :</p>
                  <input type="text"></input>
                </div>
                <div className="inputbox1">
                  <p>First name :</p>
                  <input type="text"></input>
                </div>
                <div className="inputbox1">
                  <p>Last name :</p>
                  <input type="text"></input>
                </div>
              </div>
              <div className="box2 col-lg-5">
                <div className="imgbox">
                <img src="https://raw.githubusercontent.com/farizian/week20/master/img/editlogo.png" alt=""></img>
                </div>
              </div>
            </div>
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Profile