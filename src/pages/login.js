import Footer from "../components/Footer"
import Promo from "../components/Promocard"
import Navbar from "../components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/logsign/section.css'
import { useState } from "react"
import { LOGIN } from "../redux/actions/users"
import {Link, useHistory} from 'react-router-dom'


const Login =(props)=>{
const history = useHistory()
const [user, setUser] = useState({
  email: "",
  password: "",
})
const [msg, setMsg] = useState()

const setData=(event)=>{
  setUser({
    ...user,
    [event.target.name]: event.target.value
  })
}

const submit=(event)=>{
  event.preventDefault();
  const valid = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(user.email)
  if(user.email === "" || user.password === "" || user.phone_number === ""){
    setMsg("input harus diisi.")
  } else if (!valid) {
    setMsg("input email tidak sesuai.")
  } else {
    LOGIN(user).then(() =>{
      history.push('/product')
    }).catch((err) =>{
      setMsg(err.response.data.error)
    })
  }
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
                    <input type="text" placeholder="Enter your email address" name="email" onChange={setData}></input>
                  </div>
                  <h3>Password :</h3>
                  <div className="textbox">
                    <input type="password" placeholder="Enter your password" name="password" onChange={setData}></input>
                  </div>
                  <p>{msg}</p>
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