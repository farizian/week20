import Footer from "../components/Footer"
import Promo from "../components/Promocard"
import Navbar from "../components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/logsign/section.css'
import { useState } from "react"
import {Link} from 'react-router-dom'
import { REGISTER } from "../redux/actions/users"
import { useHistory } from 'react-router-dom'


const Signup =(props)=>{
  const [user, setUser] = useState({})
  const history = useHistory()
  const setData = (event) =>{
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }
  const submitData=(event)=>{
    event.preventDefault();
    REGISTER(user).then(() =>{
      history.push('/login')
    }).catch(() =>{
      alert('email sudah digunakan')
    })
  }
  return(
    <div>
      <main>
        <div className="container-fluid">
          <div className="row">
            <aside className="asdlogin col-lg-5">
            </aside>
            <section className="lgn col-lg-7">
            <Navbar logsign={true} login={false}/>
              <form onSubmit={submitData}  className="formlgn">
                <div className="header">
                <h1>Sign Up</h1>
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
                  <h3>Phone Number :</h3>
                  <div class="textbox">
                    <input type="number" placeholder="Enter your phone number" name="phone_number" onChange={setData}></input>
                  </div>
                </div>
              </form>
              <div className="buttonlgn">
                <div className="btn">
                  <Link className="login" to="/login" onClick={submitData}>Sign Up</Link>
                </div>
                <div className="btn">
                  <button className="googlebtn">
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/google-logo-png-suite-everything-you-need-know-about-google-newest-0%202.png" alt=""/>
                  Sign Up with Google
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

export default Signup