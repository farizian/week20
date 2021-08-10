import react from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Sidebar from '../components/Sidebar'
import Cart from '../components/cart'

class Home extends react.Component{
  constructor(props){
    super(props)
    this.state = {
      products: [
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
      cart: []
    }
  }

  render(){
    const {products, cart} = this.state

    const updCart = ()=>{
        this.setState({
            cart : cart
        })
    }
    // update data product
    const updateproduct = () =>{
        this.setState({
            products : products
        })
    }

    // check data array cart
    const checkdata  = (data) =>{
        // eslint-disable-next-line array-callback-return
        const find = cart.find((e) => {
            if (e.id === data){
                return e
            }
        })
        return find
    }

    // menambahkan quantity product dengan button plus
    const addqty = (data) =>{
        const find = cart.findIndex((e=> e.id === data))
        cart[find].qty +=1
    }
    const btnAdd = (data) =>{
        addqty(data)
        updCart()
    }

    // mengurangi quantity product dengan button plus
    const btnRemove = (data) =>{
        const remove = cart.findIndex((e=> e.id === data))
        cart[remove].qty <= 1 ? (
            cart.splice([remove],1)
        ): (cart[remove].qty -=1 )
        updCart()
    }

    // menghapus data di array cart berdasarkan id
    const remove = (data) =>{
        const newcart = checkdata(data)
        cart.splice([newcart],1)
        updCart()
    }
    // menghapus semua data di array cart
    const removeAll = () =>{
        this.setState({cart: []});
    }
      // menambahkan data baru ke array cart
    const dataCart = (id) =>{
        // eslint-disable-next-line array-callback-return
        const find = products.find((e) => {
            if(e.id === id){
                return e
            }
        })
        const check = checkdata(id)
        // console.log (check)
        if (check === undefined){
            const qty = {
                ...find, qty : 1
            }
            cart.push(qty)
        }else {
            addqty(id)
        }
        updCart()
    }
    const addPrd = (result) =>{
      products.push(result)
      updateproduct()
    }
    return(
      <div>
        <Navbar home={true} cart={cart} qty={updCart}/>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="itemmenu col-lg-8">
              <Sidebar actionModal={addPrd}/>
              <Body home={true} product={products} receiveData={dataCart}/>
              </div>
              <div className="cart col-lg-4">
              <Cart home={true} cart={cart} qtyAdd={btnAdd} qtyRemove={btnRemove} onRemove={remove} del={removeAll}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home