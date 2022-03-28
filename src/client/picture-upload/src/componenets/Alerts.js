import React, {useState} from 'react'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import Button from 'react-bootstrap/esm/Button';


function Alerts({message, display}) {
  const [show, setShow] = useState(false);

  return (
      <>
        <ToastContainer className="p-3" position="top-end">
            <Toast bg='success' onClose={() => setShow(false)} show={show} delay={3000} autohide>
            
            <Toast.Body className='Success'>{message}</Toast.Body>
            </Toast>
            <Button onClick={() => setShow({display})}>Show Toast</Button>
        </ToastContainer>
    </>
  )
}

export default Alerts

Alerts.defaultProps = {
    display: false
}



// render(<Example />);