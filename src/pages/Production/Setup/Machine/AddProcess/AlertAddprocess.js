import React,{useState}from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { useGlobalContext } from '../../../../../Context/Context';

export default function AlertAddprocess({alert,setAlert,processform,selectedRow,getprocessdataList}) {


    const handleClose = () => {
      setAlert(false)
      axios.post(
        "http://172.16.20.61:5000/productionSetup/addProcessToMachine",
        {
        ...processform
        }).then((response) => {
        console.log("sent", response)
        console.log("final response", response.data);
        getprocessdataList();
      });
    };

  return (
    <div>
      <Modal show={alert} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Magod Production Manager </Modal.Title>
        </Modal.Header>

        <Modal.Body> Do you wish to add {processform.RefProcess} ({processform.Mprocess}) Target Rate 
         {processform.TgtRate} / hour added to {selectedRow.refName
} 
      
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
           OK
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
