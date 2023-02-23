import React,{useEffect, useState}from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

export default function DeleteProcess({opendeleteprocess,setOpendeleteprocess,selectRow,deleteProcess}) {

    console.log(selectRow[0]);
    const handleClose = () => setOpendeleteprocess(false);
    

  return (
    <div>
      <Modal show={opendeleteprocess} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>DELETE PROCESS</Modal.Title>
        </Modal.Header>

        <Modal.Body> Are you sure u want delete  {selectRow[0].RefProcess
}({selectRow[0].Mprocess} )  from **Machine Name </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={()=>{deleteProcess()
          handleClose()}}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
