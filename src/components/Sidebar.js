import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/sidebar.css"
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom'


class Sidebar extends React.Component{
  constructor(props){
		super(props)
		this.state={
      title: "itemmodal",
      modal: false,
      id: 11,
      name: "",
      images: "",
      price: "",
      category: "",
		}
	}
  idChange = ()=>{
    this.setState({
        id : Math.floor(Math.random() * 100) + 11
    })
  }
  nameChange = (e)=>{
      this.setState ({
          name : e.target.value
      })
  }
  priceChange = (e) =>{
      this.setState ({
          price : e.target.value
      })
  }
  imageChange = (e) =>{
      this.setState ({
        images : e.target.value
      })
  }
  catChange = (e) =>{
      this.setState ({
          category : e.target.value
      })
  }
  
  
  render(){
  const {id, name, image, price, category} = this.state
  const handleSubmit=(event)=>{
    this.idChange()
    event.preventDefault();
    const addprd ={id, name, image, price, category}
    this.props.actionModal(addprd)
  }
  const toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

    return (
      <div className="sidebar" id="sb">
        <Link to="/">
        <img className="fork" src="https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/fork.png" alt="" srcSet=""/>
        </Link>
        <Link to="/history">
        <img className="clip" src="https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/clipboard.png" alt="" link="/history" srcSet=""/>
        </Link>
        <img className="clip" src="https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/add.png" onClick={toggle} alt="" srcSet=""></img>
        <Modal isOpen={this.state.modal} toggle={toggle} className={this.state.title}>
          <ModalHeader >Add Item</ModalHeader>
          <ModalBody>
            <form>
              <div className="form form-group">
                <label htmlFor="recipient-name" className="labelname ">Name</label>
                <input type="" className="inputname form-control" id="name1" onChange={this.nameChange} name=""></input>
              </div>
              <div className="form form-group">
                <label htmlFor="recipient-name" className="labelname ">Images</label>
                <input type="text" className="inputname form-control"  id="name2" onChange={this.imageChange} name=""></input>
              </div>
              <div className="form form-group">
                <label className="labelname">Price</label>
                <input type="text" className="inputname form-control" id="name3" onChange={this.priceChange} name=""></input>
              </div>
              <div className="form form-group">
                <label htmlFor="recipient-name" className="labelname">Category</label>
                <select className="inputname form-control" onChange={this.catChange} name="" id="name4">
                  <option className="opt">Main Course</option>
                  <option className="opt">Dessert</option>
                  <option className="opt">Drink</option>
                </select>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <button className="btnModal" onClick={toggle}>Cancel</button>
            <button className="btnModal" id="btn2" onClick={handleSubmit}>Submit</button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
  
}



export default Sidebar