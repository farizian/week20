import react from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Sidebar from '../components/Sidebar'
import Cart from '../components/cart'

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
    const dataCart = (data)=>{
      if(this.state.cart.id===data.id){
        this.setState({
          cart: [...this.state.cart,{
            id: this.state.cart.id,
            picture: this.state.cart.picture,
            product_name: this.state.cart.product_name,
            price: this.state.cart.price,
            qty: this.state.cart.qty+1
          }]
        })
      }else{
        this.setState({
          cart: [...this.state.cart,data]
        })
      }
      console.log(this.state.cart)
    }
    const catchData=(data)=>{
      this.setState({
        product: [...this.state.product,{
          id: Math.random(),
          product_name: data,
          picture: data,
          price: data,
          qty: 1
        }]
      })
      console.log(this.state.product)
    }
    return(
      <div>
        <Navbar home={true}/>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="itemmenu col-lg-8">
              <Sidebar actionModal={catchData}/>
              <Body home={true} product={this.state.product} receiveData={dataCart}/>
              </div>
              <div className="cart col-lg-4">
              <Cart home={true} cart={this.state.cart}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home