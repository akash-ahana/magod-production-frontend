import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import SecondAlert from './SecondAlert'

export default function FirstAlert({open, setOpen}) {

    const [popup, setPopup] = React.useState(false);

    const handleShow = () =>{
        setPopup(true);
        setOpen(false);
    }

    const handleClose=()=>{
        setOpen(false);
    }

  return (
        <>
      <Modal show={open}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Magod Production Manager</Modal.Title>
        </Modal.Header>
        <Modal.Body>   
            <p>Machine Utilisation Report OK</p>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" type='submit' onClick={handleShow}>
            OK
        </Button>
          {/* <Button variant="secondary" onClick={handleClose}>
            No
          </Button> */}
        </Modal.Footer>
      </Modal>

{
  (
    <SecondAlert
   popup={popup} 
   setPopup={setPopup}/>
  )
}

    </>
  )
}
