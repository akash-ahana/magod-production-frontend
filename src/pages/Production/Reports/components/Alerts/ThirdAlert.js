import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function ThirdAlert({showModal, setShowModal}) {

    const handleClose=()=>{
        setShowModal(false);
    }

  return (
    <Modal show={showModal}>
    <Modal.Header closeButton onClick={handleClose}>
      <Modal.Title>Magod Production Manager</Modal.Title>
    </Modal.Header>
    <Modal.Body>   
        <p>Export to HO will be implemented in later version</p>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="primary" type='submit' >
        OK
      </Button>
      {/* <Button variant="secondary" onClick={handleClose}>
        No
      </Button> */}
    </Modal.Footer>
  </Modal>
  )
}
