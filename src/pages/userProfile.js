/* eslint-disable array-callback-return */
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GET_DETAIL_PRODUCT, GET_CATEGORY_PRODUCT} from "../redux/actions/product"
import { INSERT_CART, DELETE_CART } from "../redux/actions/cart"
import { INSERT_TRANSACTION } from "../redux/actions/transaction"
import { GET_DETAIL_USER, UPDATE_USER } from "../redux/actions/users"
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/userProfile/body.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useHistory, useParams} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import { API_URL } from '../helper/env'
import { Input } from "reactstrap"

const Profile =(props)=>{
  const user = useSelector(state => state.user.getDetail)
  const history = useHistory();
  const dispatch = useDispatch()
  const [updData, setUpd]=useState({
    img: "",
    first_name: "",
    last_name: "",
    birth_date: "",
    gender: "",
    username: "",
    email: "",
    password: "",
    address: "",
    phone_number: "",
    status: "",
  })
  const id = user.Id
  const getData = async()=>{
    await dispatch(GET_DETAIL_USER())
  }
  
  useEffect(()=>{
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect(()=>{
    setUpd({
      img: user.img,
      first_name: user.first_name,
      last_name: user.last_name,
      birth_date: user.birth_date,
      gender: user.gender,
      username: user.username,
      email: user.email,
      password: user.password,
      address: user.address,
      phone_number: user.phone_number,
      status: user.status,
    })
  }, [user])
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
  const updateUser=(event)=>{
    event.preventDefault();
    const {img, first_name, last_name, birth_date, gender, username, email, password,address, phone_number, status}=updData
    const formData = new FormData()
    formData.append("img", !img?user.img:img)
    formData.append("first_name", !first_name?updData.first_name:first_name)
    formData.append("last_name", !last_name?updData.last_name:last_name)
    formData.append("birth_date", !birth_date?updData.birth_date:birth_date)
    formData.append("gender", !gender?updData.gender:gender)
    formData.append("username", !username?updData.username: username)
    formData.append("email", !email?updData.email: email)
    formData.append("password", !password?updData.password: password)
    formData.append("address", !address?updData.address: address)
    formData.append("phone_number", !phone_number?updData.phone_number: phone_number)
    formData.append("status", !status?updData.status: status)
    UPDATE_USER(formData, id).then((response) => {
      alert(response.data.message)
      history.push("/product");
    }).catch((err) =>{
      alert(err)
    })
  }
  const linkto = ()=>{
    history.push('/product')
  }
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('img')
    localStorage.removeItem('status')
    history.push('/')
  }
  return(
    <div className="bodyprofile">
      <Navbar logsign={false} product={true}/>
      <div className="container-fluid">
        <div className="row">
          <p className="title">User Profile</p>
          <aside className="photobox col-lg-4">
            <div className="rowimg">
              <div className="imgbox">
                <img src={API_URL+user.img} alt=""></img>
                <h3>{`${user.first_name} ${user.last_name}`}</h3>
                <p>{user.email}</p>
              </div>
              <div className="buttonbox1">
                <Input type="file" id="file-input" className="select" onChange={setFile}>Choose photo</Input>
                <label for="file-input">Choose Photo</label>
                <button className="remove">Remove photo</button>
              </div>
              <div className="buttonbox2">
                <h3>Do you want to save the change?</h3>
                <button onClick={updateUser} className="save">Save Change</button>
                <button onClick={linkto} className="cancel">Cancel</button>
                <button onClick={logout} className="logout">Log out</button>
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
                  <input name="email" onChange={setChange} type="text" value={updData.email}></input>
                </div>
                <div style={{marginTop:"30px", marginBottom:"28px"}} className="inputbox1">
                  <p>Delivery adress :</p>
                  <textarea name="address" value={updData.address} onChange={setChange} wrap="soft" ></textarea>
                </div>
                <h3>Details</h3>
                <div style={{marginTop:"30px"}} className="inputbox1">
                  <p>Display name :</p>
                  <input name="username" value={updData.username} onChange={setChange} type="text"></input>
                </div>
                <div className="inputbox1">
                  <p>First name :</p>
                  <input name="first_name" value={updData.first_name} onChange={setChange} type="text"></input>
                </div>
                <div className="inputbox1">
                  <p>Last name :</p>
                  <input name="last_name" value={updData.last_name} onChange={setChange} type="text"></input>
                </div>
              </div>
              <div className="box2 col-lg-5">
                <div className="imgbox">
                <img src="https://raw.githubusercontent.com/farizian/week20/master/img/pensil2.png" alt=""></img>
                </div>
                <div className="inputbox1">
                  <p>Mobile number :</p>
                  <input name="phone_number" value={updData.phone_number} onChange={setChange} type="text"></input>
                </div>
                <div style={{marginTop:"70%"}} className="inputbox1">
                  <p>DD/MM/YY</p>
                  <input name="birth_date" type="date" className="form-control" placeholder="Birth Date" onChange={setChange}/>
                </div>
                <div style={{marginTop:"15px"}} className="inputbox1">
                  <p>Status :</p>
                  <select name="status" className="form-control" value={updData.status} onChange={setChange}>
                    <option value="0" >Admin</option>
                    <option value="1" >User</option>
                  </select>
                </div>
                <div className="inputbox1">
                  <p>Password :</p>
                  <input name="password" onChange={setChange} type="password"></input>
                </div>
              </div>
              <div style={{display:"flex"}} className="radiobox">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="status" id="flexRadioDefault1" value="male" onChange={setChange}/>
                  <label className="form-check-label" for="flexRadioDefault1">
                    Male
                  </label>
                </div>
                <div className="form-check m-0">
                  <input className="form-check-input" type="radio" name="status" id="flexRadioDefault2" value="male" onChange={setChange}/>
                  <label className="form-check-label" for="flexRadioDefault2">
                    Female
                  </label>
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