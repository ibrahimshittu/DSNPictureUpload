import "../styles/menu.scss";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import PictureForm from "./PictureForm";

function Menu() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="menu">
      <Button className="d-block d-sm-none" variant="primary" onClick={handleShow}>
        Upload
      </Button>
      
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>          
          <PictureForm/>
        </Modal.Body>
      </Modal>  
    </div>
  );
}

export default Menu;