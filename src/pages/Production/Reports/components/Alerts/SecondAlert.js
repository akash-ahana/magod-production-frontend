import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import ThirdAlert from './ThirdAlert';

export default function SecondAlert({popup, setPopup}) {

    const [showModal, setShowModal] = React.useState(false);

    const handleOpenScreen = () =>{
        setShowModal(true);
        setPopup(false);
    }

    const handleClose=()=>{
        setPopup(false);
    }

  return (
    <>
    <Modal show={popup}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Magod Production Manager</Modal.Title>
        </Modal.Header>
        <Modal.Body>   
            <p>You will not able to make Any Changes after this to the Day Report, Do you wish to Continue </p>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" type='submit' onClick={handleOpenScreen}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>

{
  (
    <ThirdAlert
   showModal={showModal} 
   setShowModal={setShowModal}/>
  )
}

      </>
  )
}
