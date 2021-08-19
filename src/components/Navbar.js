import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/navbar.css'
import { useState } from 'react';
import { Collapse, NavbarToggler} from 'reactstrap';

const Navbarmenu=(props)=>{
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [search, setSearch]= useState("")
  const changeSearch=(event)=>{
    setSearch(event.target.value)
  }
  const submitPrd=(event)=>{
    event.preventDefault();
    sendData()
  }
  const sendData=()=>{
    props.search(search)
  }

  return(
    <div>
    {props.logsign===false?
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand coffeelogo" to="/">
          <img src="https://raw.githubusercontent.com/farizian/week5/master/img/coffee%201.png" alt=""></img>
          <h1>Coffee Shop</h1>
        </Link>
        <NavbarToggler onClick={toggleNavbar} className="bar mr-2">
          <span className="navbar-toggler-icon baricon"></span>
        </NavbarToggler>
        <Collapse className="navmenu" id="navbarNav" isOpen={!collapsed} navbar>
          <ul className="navbar-nav primary-menu">
            <Link className="menu1 nav-item" to="/">Home</Link>
            <Link className="menu1 nav-item" to="/product">Product</Link>
            <Link to="" className="nav-item menu1">Your Cart</Link>
            <Link to="" className="nav-item menu1">
              <div className="nav-link active" href="#" aria-disabled="true">History</div>
            </Link>
          </ul>
          {props.product===false?
          <ul className="navbar-nav secondary-menu">
            <Link className="menu2 nav-item" to="/login">
              <div className="login nav-link active">Login</div>
            </Link>
            <Link className="menu2 nav-item" to="/signup">
              <div className="signup nav-link active ">Sign up</div>
            </Link>
          </ul>:
          <ul className="navbar-nav sec">
            <ul className="menu">
              <form onSubmit={submitPrd} className="nav-item search">
                <img onClick={submitPrd} className="srch" src="https://raw.githubusercontent.com/farizian/week5/master/img/searchlogo.png" alt="srch" ></img>
                <input type="text" onChange={changeSearch} placeholder="Search" name="" value={search}></input>
              </form>
              <li className="nav-item chat">
                <img src="https://raw.githubusercontent.com/farizian/week5/master/img/chat%20(1)%201.png" width="20px" height="20px" alt=""/>
                <div className="notif">1</div>
              </li>
              <li className="nav-item profile">
                <img src="https://raw.githubusercontent.com/farizian/week5/master/img/image%2039.png" width="20" height="23" alt=""/>
              </li>
            </ul>
          </ul>}
        </Collapse>
      </div>
    </nav>:
    <nav className="logsignNav">
      <Link className ="logosign" to="/">
          <img src="https://raw.githubusercontent.com/farizian/week5/master/img/coffee%201.png" alt=""/>
          <h1>Coffee Shop</h1>
      </Link>
      <div className="sc-menu">
        <ul className="menu">
          {props.login===true?
          <Link to="/signup" className="signup">Sign Up</Link>:
          <Link to="/login" className="login">Login</Link>}
        </ul>
      </div>
    </nav>}
  </div>
  )

}

export default Navbarmenu;