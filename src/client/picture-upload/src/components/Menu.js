import "../styles/menu.scss";
import { useState, useContext } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import PictureForm from "./PictureForm";
import { context } from "../context/context";
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

function Menu() {

  const [show, setShow] = useState(false);
  const [logout, setLogout] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { dispatch } = useContext(context);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLogout(true);
    setTimeout(() => {
      dispatch({ type: "LOGOUT" });
      window.location.reload();
    }, 6000);
    window.location.reload();
  };

  return (
    <div className="menu">
      <Button className="d-block d-lg-none" variant="primary" onClick={handleShow}>
        Upload
      </Button>
      <Button className="logout mx-2" variant="danger" onClick={handleLogout}>
        Logout
      </Button>
      
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>          
          <PictureForm/>
        </Modal.Body>
      </Modal>  

      {logout &&

        <ToastContainer className="p-3" position="top-end">
            <Toast bg='danger' onClose={() => setShow(false)} show={true} delay={3000} autohide>
            
            <Toast.Body className='text-white'>Sucessfully Logged out!</Toast.Body>
            </Toast>
        </ToastContainer>
        
        }
    </div>
  );
}

export default Menu;