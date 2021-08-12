import React from 'react'
// import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component{
  render(){
    const qty = this.props.qty
    return(
      <div>
      <nav className={this.props.home===true?"navbar navbar-expand-xxl navbar-light bg-white":"navbarlg navbar-expand-xxl navbar-light bg-white"}>
        <div className={this.props.home===true?"container-fluid nav col-lg-8 col-sm-12":"container-fluid nav col-lg-12"}>
          <button className="navbar-toggler bar" type="button">
            <span className="navbar-toggler-icon baricon" ></span>
          </button>
          {
            this.props.home===true?(
            <div className="navbar-brand logo" >Food Items</div>
            ): <div className="navbar-brand logo2" >History</div>
          }
            <input type="checkbox" id="check"/>
          {
            this.props.home===true?(
            <div className="box">
                <input type="text" placeholder="Search"/>
                <label htmlFor="check"><FontAwesomeIcon icon={faSearch} className="i" />
                </label>
            </div>
            ):null
          }
        </div>
        {
          this.props.home===true?(
          <div className="container-fluid navi col-lg-4">
            <div className="navbar-brand cartitle" href="">Cart</div>
            <div id="numcard" className="cartnum rounded-circle">{
            qty.reduce((total, product) => total + product.qty, 0)
            }</div>
          </div>
          ):null
        }
      </nav>
      </div>
    )
  }
}

export default Navbar;