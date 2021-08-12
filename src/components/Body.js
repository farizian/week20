import react from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/body.css"
import CurrencyFormat from 'react-currency-format'

class Body extends react.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <div>
        {this.props.home===true?
        <div id="items" className="product">
          {this.props.product.map((e)=>{
              return(
                <div className="prd" id={e.id}>
                  <img src={e.picture} onClick={()=>this.props.receiveData(e.id)} alt=""></img>
                  <div className="itemname" >{e.product_name}</div>
                  <CurrencyFormat className="itemprice" value={e.price} displayType={'text'} thousandSeparator={true} prefix={'Rp '}/>
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
            <div className="revenue col-lg-12">
              <img className="chart" src="https://raw.githubusercontent.com/farizian/week14/master/img/Chart.png" alt="">
              </img>
            </div>
            <div className="recent col-lg-12">
              <div className="square">
                <div className="row">
                  <div className="tbl1 col-lg-6">
                    <p>Recent Order</p>
                  </div>
                  <div className="tbl2 col-lg-6">
                    <div className="dropdown">
                      <p>Today</p>
                      <img src="https://raw.githubusercontent.com/farizian/week14/master/img/arrow-down-sign-to-navigate%201.png" alt="" onClick="">
                      </img>
                    </div>
                  </div>
                  <div className="table col-lg-12">
                      <div className="row">
                          {this.props.table.map((e)=>{
                            return(
                            <div className={e.className} id={e.id}>
                              <h1>{e.name}</h1>
                              <p>{e.data}</p>
                            </div>
                            )
                          })}
                      </div>
                      <img className="line" src="https://raw.githubusercontent.com/farizian/week14/master/img/Line%207.png" alt=""></img>
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div>
    )
  }
}

export default Body