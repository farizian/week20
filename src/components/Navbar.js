import {Link, useHistory} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/navbar.css'
import { useState } from 'react';
import { Collapse, NavbarToggler} from 'reactstrap';
import { useDispatch } from "react-redux"
import { API_URL } from '../helper/env'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { GET_ALL_PRODUCT } from "../redux/actions/product"

const Navbarmenu=(props)=>{
  const dispatch = useDispatch()
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [search, setSearch]= useState("")
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const imgUser = localStorage.getItem('img')
  const status = localStorage.getItem('status')
  const token = localStorage.getItem('token')
  const history = useHistory()

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('img')
    localStorage.removeItem('status')
    history.push('/')
  }
  const linkto = ()=>{
    history.push('/profile')
  }
  const changeSearch=(event)=>{
    setSearch(event.target.value)
  }
  const submitPrd=(event)=>{
    event.preventDefault();
    dispatch(GET_ALL_PRODUCT(search))
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
            {status==='1'?<Link to="/payment" className="nav-item menu1">Your Cart</Link>:null}
            {status === '1'?<Link to="/history" className="nav-item menu1">
              <div className="nav-link active" href="#" aria-disabled="true">History</div>
            </Link>:null}
            {status === '0'? <Link to="" className="nav-item menu1">
              <div className="nav-link active" href="#" aria-disabled="true">Dashboard</div>
            </Link>:null}
          </ul>
          {!token?
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
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle className="nav-item profile bg-transparent" style={{ width:"25px", height:"25px"}}>
                  <img src={API_URL+imgUser} style={{borderRadius:"20px", width:"25px", height:"25px"}} alt=""/>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={linkto}>Edit Profile</DropdownItem>
                  <DropdownItem onClick={logout}>Log Out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
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