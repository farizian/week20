import react from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'

class Home extends react.Component{
  constructor(props){
    super(props)
    this.state = {
      product: [
        {
          id: 1,
          picture: "https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/espresso.png",
          product_name: "Espresso",
          price: 10000,
          qty: 1,
        },
        {
          id: 2,
          picture: "https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/cofeelatte.png",
          product_name: "Coffe Latte",
          price: 15000,
          qty: 1,
        },
        {
          id: 3,
          picture: "https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/cappucinos.png",
          product_name: "Cappucino",
          price: 5000,
          qty: 1,
        },
        {
          id: 4,
          picture: "https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/redvelvet.png",
          product_name: "Red Velvet Latte",
          price: 33000,
          qty: 1,
        },
        {
          id: 5,
          picture: "https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/chocorum.png",
          product_name: "Choco Rum",
          price: 28000,
          qty: 1,
        },
        {
          id: 6,
          picture: "https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/blackforest.png",
          product_name: "Black Forest",
          price: 30000,
          qty: 1,
        },
        {
          id: 7,
          picture: "https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/chickenkatsu.png",
          product_name: "Chicken Katsu",
          price: 60000,
          qty: 1,
        },
        {
          id: 8,
          picture: "https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/salmon.png",
          product_name: "Salmon Truffle",
          price: 60000,
          qty: 1,
        },
        {
          id: 9,
          picture: "https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/wiener.png",
          product_name: "Wiener Schnitzel",
          price: 69000,
          qty: 1,
        },
      ],
      cart:[]
    }
  }
  render(){
    return(
      <div>
        <Navbar col={true} cart={true} search={true}/>
        <Body home={true} product={this.state.product}/>
      </div>
    )
  }
}

export default Home