import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { GET_ALL_PRODUCT, deletePrd, GET_CATEGORY_PRODUCT, INSERT} from "../redux/actions/product"
import { GET_ALL_PROMO, GET_DETAIL_PROMO, UPDATE_PROMO, INSERT_PROMO, DELETE_PROMO } from "../redux/actions/promo"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {Link, useHistory} from 'react-router-dom'
import "../css/product/section.css"
import "../css/product/aside.css"
import "bootstrap/dist/css/bootstrap.min.css"
import CurrencyFormat from 'react-currency-format'
import { API_URL } from '../helper/env'
import { GET_DETAIL_USER } from "../redux/actions/users"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from "reactstrap"


const Product=()=>{
  const [modal, setModal] = useState(false);
  const [sort, setSort] = useState()
  const history = useHistory();
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch()
  const product = useSelector(state => state.product)
  const promo = useSelector(state => state.promo)
  const category = useSelector(state => state.product.category)
  const user = useSelector(state => state.user)
  const detail = user.getDetail
  const getData = (search, format)=>{
    dispatch(GET_ALL_PRODUCT(search, format))
    dispatch(GET_DETAIL_USER())
    dispatch(GET_CATEGORY_PRODUCT())
    dispatch(GET_ALL_PROMO())
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
    size: "R",
    category: 1,
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
  const submitSort=(search)=>{
    console.log(search)
    getData(search, "c.category")
  }
  const insertPrd=(event)=>{
    event.preventDefault();
    const {img, disc, name, price, size, category}=updData
    console.log(updData)
    const formData = new FormData()
    formData.append("img", img)
    formData.append("disc", !disc?"":disc)
    formData.append("prdname", !name?"":name)
    formData.append("price", !price?"":price)
    formData.append("size", !size?"":size)
    formData.append("category_id", !category?"": category)
    if(name && price){
      INSERT(formData).then((response) => {
        getData()
        alert("input produk berhasil")
        history.push("/product");
        toggle();
      }).catch((err) =>{
        console.log(err)
      })
    } else {
      alert("isi field tidak boleh kosong!")
    }
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
            {promo.getAll.map((e,i) => (
              <div key={i} id={`card${i}`} className="prmcard">
                <img className="image" src={API_URL+e.img} alt="" srcSet=""/>
                <div className="title">
                  <strong>{e.promoTitle}</strong>
                  <p>{e.description}</p>
                </div>
              </div>
            ))}
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
              <li>Main Course</li>
              <li>Coffee</li>
              <li>Dessert</li>
              <li>Ice Cream</li>
              <li>Add-on</li>
            </ul>
          </nav>
          <div className="row">
            {product.loadAll===true?
            (<img style={{width:'80%', height:'80%'}} src="https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!c1024wm0/compress/true/progressive/true/format/webp/fw/1024" alt=""></img>):
             product.getAll.map((e, i)=>{
              return(
                <div key={i} className="card col-lg-2 col-md-4 col-6" id={e.idStyle}>
                  {detail.status===0?(<button onClick={()=>delPrd(e.id)} className="remove">-</button>):null}
                  <Link className="link" to={`/detailprd/${e.id}`}>
                  <img className="prdimg" src={!e.img||e.img===''?'https://raw.githubusercontent.com/farizian/week20/master/img/default.png':API_URL+e.img} alt=""/>
                  {e.disc===null?
                  null:e.disc===""?null:<p className="disc">{e.disc}</p>
                  }
                  <p className="prdname">{e.prdname}</p>
                  <CurrencyFormat className="harga" value={e.price} displayType={'text'} thousandSeparator={true} hunderedSeparator={true} prefix={'Rp. '}/>
                  </Link>
                </div>
              )
            })}
          </div>
          {detail.status===0?(
          <div className="addNew">
            <Button onClick={toggle}>Add New Product</Button>
            <Modal isOpen={modal} toggle={toggle} className="">
              <ModalHeader toggle={toggle}>Add New Product</ModalHeader>
              <ModalBody>
              <form className="insert">
                <div className="textbox" id="txtbox1">
                  <h3>Picture :</h3>
                  <Input type="file" name="img" accept=".jpg, .png, .jpeg" onChange={setFile}></Input>
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
                  <h3>Size :</h3>
                  <select name="size" class="form-control" onChange={setChange}>
                    <option value="R" >Regular</option>
                    <option value="L" >Large</option>
                    <option value="XL" >Extra Large</option>
                  </select>
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