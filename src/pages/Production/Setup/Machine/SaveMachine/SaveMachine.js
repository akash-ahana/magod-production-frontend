import React,{useEffect, useState}from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function SaveMachine({opensavemachine,setOpensavemachine,selectedRow}) {
    const handleClose = () => setOpensavemachine(false);

    console.log(selectedRow.refName)
    
  return (
    <div>
      <Modal show={opensavemachine} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>DELETE MACHINE</Modal.Title>
        </Modal.Header>

        <Modal.Body> Machine Refname:{selectedRow.refName} saved</Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} >
            OK
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
