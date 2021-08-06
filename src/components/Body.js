import react from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/body.css"
import Sidebar from "./Sidebar"

class Body extends react.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className={this.props.home===true?"itemmenu col-lg-8":"itemmenu col-lg-12"}>
              <Sidebar/>
              {this.props.home===true?
              <div id="items" class="product">
                {this.props.product.map((e)=>{
                    return(
                      <div className="prd" id={e.id}>
                        <img src={e.picture} onclick=""/>
                        <div className="itemname" >{e.product_name}</div>
                        <div className="itemprice">{e.price}</div>
                      </div>
                    )
                  })
                }
              </div>:
                <div className="row">
                  <div className="income col-lg-12">
                    <div className="card col-lg-4">
                      <img src=""></img>
                      <p className="namecard"></p>
                      <p className="price"></p>
                      <p className="year"></p>
                    </div>
                  </div>
                </div>}
            </div>
            {this.props.home===true?
            <div className="cart col-lg-4">
                <div className="cartid">
                  <div className="cartqty" id="cartitem">
                    <div className="empty" id="del">
                      <img className="cup" src="https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/cupblank.png" alt="" srcset=""/>
                      <h3>Your cart is empty</h3>
                      <p>Please add some items from the menu</p>
                    </div>
                  </div>
                </div>
                <div className="ttl" id="tot"></div>
            </div>:null}
          </div>
        </div>
        {this.props.home===true?
        <div className="container-fluid">
        </div>:null}
      </section>
    )
  }
}

export default Body