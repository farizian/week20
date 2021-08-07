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
                        <img src={e.picture} onclick="" alt=""/>
                        <div className="itemname" >{e.product_name}</div>
                        <div className="itemprice">{e.price}</div>
                      </div>
                    )
                  })
                }
              </div>:
                <div className="row">
                  <div className="income col-lg-12">
                    {this.props.card.map((e)=>{
                      return(
                        <div id={e.id} className="card">
                          <img src={e.img} alt=""></img>
                          <div className="text">
                            <p className="namecard">{e.namecard}</p>
                            <p className="price">{e.price}</p>
                            <p className="year">{e.year}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="revenue col-lg-12 bg-info">
                    <img className="chart" src="https://raw.githubusercontent.com/farizian/week14/master/img/Chart.png" alt="">
                    </img>
                  </div>
                  <div className="recent col-lg-12">
                    <div className="row">
                      <div className="pic col-lg-6">
                        <p>Recent Order</p>
                      </div>
                      <div className="pic col-lg-6">
                        <div className="dropdown">
                          <p>Today</p>
                          <img src="" alt="" onClick="">
                          </img>
                        </div>
                      </div>
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