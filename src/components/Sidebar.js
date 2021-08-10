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
      name: "",
      images: "",
      price: "",
      category: "",
		}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event){
    const addprd ={
      id: this.state.id,
      name: this.state.name,
      image: this.state.image,
      price: this.state.price,
      category: this.state.category
    }
    event.preventDefault();
    this.props.receiveData(addprd)
  }
  render(){

  const toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

    return (
      <div className="sidebar" id="sb">
        <Link to="/">
        <img className="fork" src="https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/fork.png" alt="" srcset=""/>
        </Link>
        <Link to="/history">
        <img className="clip" src="https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/clipboard.png" alt="" link="/history" srcset=""/>
        </Link>
        <img className="clip" src="https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/add.png" onClick={toggle} alt="" srcset=""></img>
        <Modal isOpen={this.state.modal} toggle={toggle} className={this.state.title}>
          <ModalHeader >Add Item</ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit}>
              <div className="form form-group">
                <label for="recipient-name" className="labelname ">Name</label>
                <input type="" value={this.state.name}class="inputname form-control" id="name1" onChange={this.handleChange}></input>
              </div>
              <div className="form form-group">
                <label for="recipient-name" className="labelname ">Images</label>
                <input type="text" class="inputname form-control" value={this.state.images} id="name2" onChange={this.handleChange}></input>
              </div>
              <div className="form form-group">
                <label className="labelname">Price</label>
                <input type="text" className="inputname form-control" value={this.state.price} id="name3" onChange={this.handleChange}></input>
              </div>
              <div className="form form-group">
                <label for="recipient-name" className="labelname">Category</label>
                <select className="inputname form-control" value={this.state.category} id="name4">
                  <option className="opt">Main Course</option>
                  <option className="opt">Dessert</option>
                  <option className="opt">Drink</option>
                </select>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <button className="btnModal" onClick={toggle}>Cancel</button>{' '}
            <button className="btnModal" id="btn2"onClick={this.handleSubmit}>Add</button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
  
}



export default Sidebar