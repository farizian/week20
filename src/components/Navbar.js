import React from 'react'
// import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component{
  render(){
    return(
      <div>
      <navbar className={this.props.col===true?"navbar navbar-expand-xxl navbar-light bg-white":"navbarlg navbar-expand-xxl navbar-light bg-white"}>
        <div className={this.props.col===true?"container-fluid nav col-lg-8":"container-fluid nav col-lg-12"}>
          <button className="navbar-toggler bar" type="button" onclick="">
            <span className="navbar-toggler-icon baricon" ></span>
          </button>
          {
            this.props.col===true?(
            <a className="navbar-brand logo" href="#">Food Items</a>
            ): <a className="navbar-brand logo2" href="#">History</a>
          }
            <input type="checkbox" id="check"/>
          {
            this.props.search===true?(
            <div className="box">
                <input type="text" placeholder="Search"/>
                <label for="check"><FontAwesomeIcon icon={faSearch} className="i" />
                </label>
            </div>
            ):null
          }
        </div>
        {
          this.props.cart===true?(
          <div className="container-fluid navi col-lg-4">
            <a className="navbar-brand cartitle" href="#">Cart</a>
            <div id="numcard" className="cartnum rounded-circle"></div>
          </div>
          ):null
        }
      </navbar>
      </div>
    )
  }
}

export default Navbar;