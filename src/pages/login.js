import Footer from "../components/Footer"
import Promo from "../components/Promocard"
import Navbar from "../components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/logsign/section.css'
import { useState } from "react"
import {Link} from 'react-router-dom'


const Login =(props)=>{
const [user, setUser] = useState({
  email:"",
  password: "",
})

const setEmail=(event)=>{
  setUser({
    email: event.target.value
  })
}
const setPassword=(event)=>{
  setUser({
    ...user,
    password: event.target.value
  })
}
const inputData=async()=>{
  try{
    const input1 = await setEmail()
    const input2 = await setPassword(input1)
    return input2
  }catch(error){
    console.log(error)
  }
}
const submit=(event)=>{
  inputData()
  const {email, password}= user
  event.preventDefault();
  const data = {email, password}
  const local = localStorage.getItem('user')
  const localuser = JSON.parse(local)
  if(data.email===localuser.email&&data.password===localuser.password){
    localStorage.setItem("token","123abc123abc123abcbca123")
    props.history.push('/product');
  }else if(data.email!==localuser.email){
    alert("account tidak ditemukan, silahkan registrasi")
    props.history.push('/signup');
  }
  else{
    alert("password salah")
  }
  console.log(data)
  // localStorage.removeItem('user')
  console.log(localuser)
}
  return(
    <div>
      <main>
        <div className="container-fluid">
          <div className="row">
            <aside className="asdlogin col-lg-5">
            </aside>
            <section className="lgn col-lg-7">
            <Navbar logsign={true} login={true}/>
              <form onSubmit={submit} className="formlgn">
                <div className="header">
                <h1>Login</h1>
                </div>
                <div className="signbox">
                  <h3>Email Address :</h3>
                  <div className="textbox">
                    <input type="text" placeholder="Enter your email address" name="" onChange={setEmail}></input>
                  </div>
                  <h3>Password :</h3>
                  <div className="textbox">
                    <input type="password" placeholder="Enter your password" name="" onChange={setPassword}></input>
                  </div>
                  <h3 className="forgot">Forgot Password?</h3>
                </div>
              </form>
              <div className="buttonlgn">
                <Link className="btn">
                  <button className="login" onClick={submit}>Login</button>
                </Link>
                <div className="btn">
                  <button className="googlebtn">
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/google-logo-png-suite-everything-you-need-know-about-google-newest-0%202.png" alt=""/>
                  Login with Google
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Promo login={true}/>
      <Footer />
    </div>
  )
}

export default Login