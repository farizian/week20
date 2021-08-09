import react from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/cart.css"


class Cart extends react.Component{
	constructor(props){
		super(props)
		this.state={

		}
	}
	render(){
		return(
		<div>
			<div className="cartpack">
				{this.props.cart.length<=0?
					<div className="cartid">
						<div className="cartqty" id="cartitem">
							<div className="empty" id="del">
								<img className="cup" src="https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/cupblank.png" alt="" srcset=""/>
								<h3>Your cart is empty</h3>
								<p>Please add some items from the menu</p>
							</div>
						</div>
					</div>
				:this.props.cart.map((e)=>{
					return(
						<div className="cartid">
							<div class="cartprd" id="cartitem">
								<img src={e.picture} alt=""/>
								<div class="row">
									<div class="cartname" id="nme">{e.product_name}</div>
										<div class="btn">
											<button onclick="" class="min">-</button>
											<input class="qty" id="vl" type="string" value={e.qty}/>
											<button onclick="" class="max">+</button>
										</div>
								</div>
								<div class="row2">
									<div class="cartprice">Rp.{e.price}</div>
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
							<span class="number" id="nm" value="" >total</span>
						</div>
					</div>
					<button  class="check">Checkout</button>
					<button onclick="btndel()" class="cancel">Cancel</button>
				</div>
			</div>:null}
		</div>
		
		)
	}
}

export default Cart