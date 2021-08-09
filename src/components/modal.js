import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    title
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
    
    setModal(!modal);
  }


  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={title}>
          <ModalHeader >Add Item</ModalHeader>
          <ModalBody>
            <form>
              <div className="form form-group">
                <label for="recipient-name" className="labelname ">Name</label>
                <input type="text" class="inputname form-control" id="name1"></input>
              </div>
              <div className="form form-group">
                <label for="recipient-name" className="labelname ">Images</label>
                <input type="text" class="inputname form-control" id="name2"></input>
              </div>
              <div className="form form-group">
                <label className="labelname">Price</label>
                <input type="text" className="inputname form-control" id="name3"></input>
              </div>
              <div className="form form-group">
                <label for="recipient-name" className="labelname">Category</label>
                <select className="inputname form-control" id="name4">
                  <option className="opt">Main Course</option>
                  <option className="opt">Dessert</option>
                  <option className="opt">Drink</option>
                </select>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <button className="btnModal" onClick={toggle}>Cancel</button>{' '}
            <button className="btnModal" id="btn2"onClick={()=>this.props.actionModal(document.getElementsByClassName("inputname")[0].value)}>Add</button>
          </ModalFooter>
        </Modal>
    </div>
  );
}

export default ModalExample;