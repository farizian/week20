import Footer from "../components/Footer"
import Promo from "../components/Promocard"
import Navbar from "../components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/logsign/section.css'
import { useState } from "react"
import {Link} from 'react-router-dom'


const Signup =(props)=>{
  const [user, setUser] = useState([])

  const setEmail=(event)=>{
    if(user.length<=0){
      setUser({
        email: event.target.value
      })
    }
    else{
      setUser({
        ...user,
        email: event.target.value
      })
    }
  }
  const setPassword=(event)=>{
    if(user.length<=0){
      setUser({
        password: event.target.value
      })
    }
    else{
      setUser({
        ...user,
        password: event.target.value
      })
    }
  }
  const setPhone=(event)=>{
    if(user.length<=0){
      setUser({
        phone: event.target.value
      })
    }
    else{
      setUser({
        ...user,
        phone: event.target.value
      })
    }
  }
  const inputData=async()=>{
    try{
      const input1 = await setEmail()
      const input2 = await setPassword(input1)
      const input3 = await setPhone(input2)
      return input3
    }catch(error){
      console.log(error)
    }
  }
  const submitData=(event)=>{
    inputData()
    const {email, password, phone}= user
    event.preventDefault();
    const data = {email, password, phone}
    const local = localStorage.getItem('user')
    const localuser = JSON.parse(local)
    if(localuser===null){
      localStorage.setItem('user', JSON.stringify(data))
      props.history.push('/login');
    }else{
      if(localuser.email===data.email){
        alert('email sudah digunakan')
      }else{
        localStorage.setItem('user', JSON.stringify(data))
        props.history.push('/login');
      }
    }
    console.log(user)
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
                    <input type="text" placeholder="Enter your email address" name="" onChange={setEmail}></input>
                  </div>
                  <h3>Password :</h3>
                  <div className="textbox">
                    <input type="password" placeholder="Enter your password" name="" onChange={setPassword}></input>
                  </div>
                  <h3>Phone Number :</h3>
                  <div class="textbox">
                    <input type="text" placeholder="Enter your phone number" name="" onChange={setPhone}></input>
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