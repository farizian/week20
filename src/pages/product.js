import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GET_ALL_PRODUCT, deletePrd, GET_CATEGORY_PRODUCT, INSERT} from "../redux/actions/product"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import "../css/product/section.css"
import "../css/product/aside.css"
import "bootstrap/dist/css/bootstrap.min.css"
import CurrencyFormat from 'react-currency-format'
import {useHistory} from 'react-router-dom'
import { API_URL } from '../helper/env'
import { GET_DETAIL_USER } from "../redux/actions/users"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from "reactstrap"


const Product=()=>{
  const [modal, setModal] = useState(false);
  const history = useHistory();
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch()
  const product = useSelector(state => state.product.getAll)
  const category = useSelector(state => state.product.category)
  const user = useSelector(state => state.user)
  const detail = user.getDetail
  const getData =()=>{
    dispatch(GET_ALL_PRODUCT())
    dispatch(GET_DETAIL_USER())
    dispatch(GET_CATEGORY_PRODUCT())
  }
  useEffect(()=>{
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const delPrd = (id) => {
    deletePrd(id).then(()=>{
      getData()
    }).catch((err) =>{
      alert(err)
    })
  }
  const [updData, setUpd]=useState({
    disc: "",
    name: "",
    price: "",
  })
  const setChange=(event)=>{
    setUpd({
      ...updData,
      [event.target.name]: event.target.value,
    })
  }
  const setFile = (event)=>{
    setUpd({
      ...updData,
      img: event.target.files[0]
    })
  }
  const insertPrd=(event)=>{
    event.preventDefault();
    const {img, disc, name, price, category}=updData
    const formData = new FormData()
    formData.append("img", img)
    formData.append("disc", disc===undefined?"":disc)
    formData.append("prdname", name===undefined?"":name)
    formData.append("price", price===undefined?"":price)
    formData.append("category_id", category==="Main Course"?1:category===undefined?"":2)
    INSERT(formData).then((response) => {
      console.log(response)
      getData()
      alert("Insert Produk Berhasil")
      setUpd({
        img: "",
        disc: "",
        name: "",
        price: "",
        category: ""
      })
      history.push("/product");
      toggle();
    }).catch((err) =>{
      console.log(err)
    })
  }
  return(
    <div>
      <Navbar logsign={false} product={true}/>
      <main className="prdmain">
        <aside className="prdaside">
          <div className="header">
              <h1>Promo Today</h1>
              <p>Coupons will be updated every weeks. Check them out!</p>
          </div>
          <div className="content">
            <div className="promo">
              <div className="prmcard green">
                <img className="image" src="https://raw.githubusercontent.com/farizian/week5/master/img/image%2046.png" alt="" srcSet=""/>
                <div className="title">
                  <strong>HAPPY MOTHER'S DAY!</strong>
                  <p>Get one of our favorite menu free!</p>
                </div>
              </div>
              <div className="prmcard yellow">
                  <img className="image" src="https://raw.githubusercontent.com/farizian/week5/master/img/image%2043.png" alt="" srcSet=""/>
                  <div className="title">
                      <strong>Get a cup of coffee for free on sunday morning</strong>
                      <p>Only at 7 to 9 AM</p>
                  </div>
              </div>
              <div className="prmcard green">
                  <img className="image" src="https://raw.githubusercontent.com/farizian/week5/master/img/image%2046.png" alt="" srcSet=""/>
                  <div className="title">
                      <strong>HAPPY MOTHER'S DAY!</strong>
                      <p>Get one of our favorite menu free!</p>
                  </div>
              </div>
              <div className="prmcard red">
                  <img className="image" src="https://raw.githubusercontent.com/farizian/week5/master/img/image%2045.png" alt="" srcSet=""/>
                  <div className="title">
                      <strong>HAPPY MOTHER'S DAY!</strong>
                      <p>Get one of our favorite menu free!</p>
                  </div>
              </div>
            </div>
            <div className="action">
             <button className="btn">Apply Coupon</button>
            </div>
          </div>
          <div className="terms">
              <ol>
                  <b>Terms and Condition</b>
                  <li>You can only apply 1 coupon per day</li>
                  <li>It only for dine in</li>
                  <li>Buy 1 get 1 only for new user</li>
                  <li>Should make member card to apply coupon</li>
              </ol>
          </div>
        </aside>
        <section className="productitem">
          <nav className="prdmenu">
            <ul className="navprd">
              <li>Favorite & Promo</li>
              <li>Add Product</li>
              <li>Edit Product</li>
              <li>Foods</li>
              <li>Add-on</li>
            </ul>
          </nav>
          <div className="row">
            {product.map((e, i)=>{
              return(
                <div key={i} className="card col-lg-2 col-md-4 col-6" id={e.idStyle}>
                  {detail.status===0?(<button onClick={()=>delPrd(e.id)} className="remove">-</button>):null}
                  <Link className="link" to={`/detailprd/${e.id}`}>
                  <img className="prdimg" src={API_URL+e.img} alt=""/>
                  {e.disc===null?
                  null:e.disc===""?null:<p className="disc">{e.disc}</p>
                  }
                  <p className="prdname">{e.prdname}</p>
                  <CurrencyFormat className="harga" value={e.price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '}/>
                  </Link>
                </div>
              )
            })}
          </div>
          {detail.status===0?(
          <div>
            <Button color="danger" onClick={toggle}>Add New Product</Button>
            <Modal isOpen={modal} toggle={toggle} className="">
              <ModalHeader toggle={toggle}>Add New Product</ModalHeader>
              <ModalBody>
              <form className="insert">
                <div className="textbox" id="txtbox1">
                  <h3>Picture :</h3>
                  <Input type="file" name="img" onChange={setFile}></Input>
                </div>
                <div className="textbox">
                  <h3>Discount :</h3>
                  <Input type="text" placeholder="Enter your discount" name="disc" onChange={setChange}></Input>
                </div>
                <div className="textbox">
                  <h3>Product Name :</h3>
                  <Input type="text" placeholder="Enter product name" name="name" onChange={setChange}></Input>
                </div>
                <div className="textbox">
                  <h3>Price :</h3>
                  <Input type="number" placeholder="Enter your price" name="price" onChange={setChange}></Input>
                </div>
                <div className="textbox">
                  <h3>Category :</h3>
                  <select name="category" class="form-control" onChange={setChange}>{category.map((e)=>{return(<option value={e.id}>{e.category}</option>)})}</select>
                </div>
              </form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={insertPrd}>Submit</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>):
          <p className="end">*the price has been cutted by discount appears</p>
          }
        </section>
      </main>
      <Footer/>
    </div>
  )

}

export default Product