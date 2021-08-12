import react from 'react'
import Navbar from '../components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import Body from "../components/Body"
import Sidebar from "../components/Sidebar"


class History extends react.Component{
  constructor(props){
    super(props)
    this.state = {
      card: [
        {
          id: "one",
          img: "https://raw.githubusercontent.com/farizian/week14/master/img/Group%201.png",
          namecard: "Today’s Income",
          price: "Rp. 1.000.000",
          year: "+2% Yesterday"
        },
        {
          id: "two",
          img: "https://raw.githubusercontent.com/farizian/week14/master/img/Group%202.png",
          namecard: "Orders",
          price: "3.270",
          year: "+5% Last Week"
        },
        {
          id: "three",
          img: "https://raw.githubusercontent.com/farizian/week14/master/img/Group%203.png",
          namecard: "This Year’s Income",
          price: "Rp. 100.000.000.000",
          year: "+10% Last Year"
        },
      ],
      table: [
        {
          id: "data1",
          className: "data col-lg-2",
          name: "INVOICE",
          data: "#10928"
        },
        {
          id: "data2",
          className: "data col-lg-2",
          name: "CASHIER",
          data: "Cashier 1"
        },
        {
          id: "data3",
          className: "data col-lg-3",
          name: "DATE",
          data: "06 October 2019"
        },
        {
          id: "data4",
          className: "data col-lg-3",
          name: "ORDERS",
          data: "Ice Tea, Salad With peanut sauce"
        },
        {
          id: "data5",
          className: "data col-lg-2",
          name: "AMOUNT",
          data: "Rp. 120.000"
        },
      ]
    }
  }
  render(){
    return(
      <div>
        <Navbar home={false}/>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="itemmenu col-lg-12">
              <Sidebar home={false}/>
              <Body home={false} card={this.state.card} table={this.state.table}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default History