import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CustomModal({show, setShow}) {
  return (
    <div>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Machine</Modal.Title>
        </Modal.Header>
        {/* <form className="form" onSubmit={handleSubmit(onSubmit)}> */}
        <Modal.Body>
        <div className="col-md-12 col-sm-12">
          <div className="ip-box form-bg ">
            <div className="row">
              <div className="col-md-3">
                <label className=""> Machine Reference Name</label>
                <input  className='in-field' />
              </div>
              <div className="col-md-3">
                <label className=""> Machine Reference Name</label>
                <input  className='in-field' />
              </div>
              <div className="col-md-3">
                <label className=""> Machine Reference Name</label>
                <input  className='in-field' />
              </div>
              <div className="col-md-3">
                <label className=""> Machine Reference Name</label>
                <input  className='in-field' />
              </div>

              <div className="col-md-12">
                <label className=""> Manufacturer</label>
                <input  className='in-field' />
              </div>

              <div className="col-md-12">
                <label className=""> Model</label>
                <input  className='in-field' />
              </div>

              <div className="col-md-12 mb-4 ">
                 <label className="form-label">Machine_Type</label>
                 <input  className='in-field' />
              </div>
            </div>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" type='submit'>
            Save 
          </Button>
          <Button variant="secondary" >
            Exit
          </Button>
        </Modal.Footer>
        {/* </form> */}
      </Modal>
    </div>
  )
}
