import react from 'react'
import Navbar from '../components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import Body from "../components/Body"

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
      ]
    }
  }
  render(){
    return(
      <div>
        <Navbar col={false} cart={false} search={false}/>
        <Body card={this.state.card}/>
      </div>
    )
  }
}

export default History