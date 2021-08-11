import react from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/cart.css"
import "../css/modal.css"
import CurrencyFormat from 'react-currency-format'
import { Modal} from 'reactstrap';


class Cart extends react.Component{
	constructor(props){
		super(props)
		this.state={
      modal: false,
      name: "nama"
		}
	}
	render(){
		const {cart, del} = this.props
    const itemsPrice = cart.reduce((total, product) => total + product.qty * product.price, 0);
    const ppn = itemsPrice * 10 / 100
    const invoice = Math.floor(Math.random() * 1000000) + 11
    const Total = ppn + itemsPrice
    const setName = ()=>{
      this.setState({
        name: "Subaru"
      })
    }
    const toggle = () => {
      setName()
      this.setState({
        modal: !this.state.modal
      })
    }
		return(
		<div>
			<div className="cartpack">
				{cart.length<=0?
					<div className="cartid">
						<div className="cartqty" id="cartitem">
							<div className="empty" id="del">
								<img className="cup" src="https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/cupblank.png" alt="" srcset=""/>
								<h3>Your cart is empty</h3>
								<p>Please add some items from the menu</p>
							</div>
						</div>
					</div>
				:cart.map((e)=>{
					return(
						<div className="cartid">
							<div class="cartprd" id="cartitem">
								<img src={e.picture} alt=""/>
								<div class="row">
									<div class="cartname" id="nme">{e.product_name}</div>
										<div class="btn">
											<button onClick={()=>this.props.qtyRemove(e.id)} class="min">-</button>
											<input class="qty" id="vl" type="string" value={e.qty}/>
											<button onClick={()=>this.props.qtyAdd(e.id)} class="max">+</button>
										</div>
								</div>
								<div class="row2">
								<CurrencyFormat className='cartprice' value={e.price * e.qty} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
								</div>
							</div>
						</div>
					)
				})}
			</div>
			{this.props.cart.length>=1?
			<div className="ttl">
				<div class="totalitem">
					<div class="text">
						<div class="text1">
							<h1 class="titletotal">Total:</h1>
							<p class="ppn">*Belum termasuk ppn</p>
						</div>
						<div class="text2">
							<CurrencyFormat className='number' id="nm" value={itemsPrice} displayType={'text'} thousandSeparator={true} prefix={'Rp '} >total</CurrencyFormat>
						</div>
					</div>
					<button  class="check" onClick={toggle}>Checkout</button>
					<button onClick={del} class="cancel">Cancel</button>
				</div>
			</div>:null}
      <Modal isOpen={this.state.modal} toggle={toggle}>
        <div className='Title'>
          <div className="order">
            <h1 className='check'>CheckOut</h1>
            <h1 className="span">Receipt no : #{invoice}</h1>
          </div>
            <h2 className='cashier'>Cashier : {this.state.name}</h2>
        </div>
        {
          cart.map((e)=>{
            return(
              <div key={e.id} className='invoice'>
                <div className='product'>
                  <p>{e.product_name} <span>{e.qty}x</span></p>
                </div>
                <div className='Price'>
                  <CurrencyFormat className='priceproduct' value={e.price * e.qty} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                </div>
              </div>
            )
          })
        }
        <div className='totalPpn'>
            <div className='ppnPayment'>
                <p className='ppn'>Ppn 10%</p>
                <p className='pay'>Payment : Cash</p>
            </div>
            <div className='totalPayment'>
                <CurrencyFormat className='' value={ppn} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                <p>Total : <CurrencyFormat className='' value={Total} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /></p>
            </div>
        </div>
        <div className='buttonPayment'>
            <button type="" className='print'>Print</button>
            <p>Or</p>
            <button type="" className='email'>Send Email</button>
        </div>
    </Modal>
		</div>
		
		)
	}
}

export default Cart