import React,{useState} from 'react'
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Popup() {

  const [popup , setPopup] = useState(true);


  const handleOpen = ()=>{
    setPopup(!popup)
  }


  const handleClose = ()=>{
    setPopup(false);
  }

  return (
    <>
    {popup?
    <div
    className="modal show"
    style={{ display: 'block', position: 'initial'}}
  >
    
    <Modal.Dialog>
    <div className='modal-content bg-light' style={{width:'148%'}}>
      <Modal.Header style={{height:'45px', backgroundColor:'grey'}} closeButton onClick={handleClose}>
        <Modal.Title className='tab_font'>Machine Selection Form</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="pop" style={{display:'flex'}}>
        <div className="box">
      <div className="row mb-3" style={{width:'400px'}}>
                <label htmlFor="inputEmail3" className="col-sm-3 col-form-label tab_font" style={{padding:'initial'}}>Program No</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" id="inputEmail3"/>
                </div>
      </div>

      <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-3 col-form-label tab_font" style={{padding:'initial'}}>Process</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" id="inputEmail3"/>
                </div>
      </div>

      <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-3 col-form-label tab_font" style={{padding:'initial'}}>Material</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" id="inputEmail3"/>
                </div>
      </div>

      <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-3 col-form-label tab_font" style={{padding:'initial'}}>Status</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" id="inputEmail3"/>
                </div>
      </div>
      </div>

      <div className="box01">
      <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-3 col-form-label tab_font" style={{padding:'initial'}}>Machine</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" id="inputEmail3"/>
                </div>
      </div>

      <div className="row mb-3" style={{width:'350px'}}>
                <label htmlFor="inputEmail3" className="col-sm-3 col-form-label tab_font" style={{padding:'initial'}}>Change To</label>
                <div className="col-sm-8">
                <Form.Select size="sm">
                    <option>select</option>
                    <option>1</option>
                    <option>2</option>
                </Form.Select>
                <div className="row mt-2">
                <button className="button-style mt-2 group-button"
                      style={{ width: "150px",marginLeft:"20px" }}>
                      Change Machine
                </button>
                </div> 
                {/* <Button variant="secondary tab_font mt-3" size='sm'>Change machines</Button> */}
                </div>       
      </div>
      </div>
      </div>
      </Modal.Body>

      {/* <Modal.Footer style={{height:'0px'}}>
        <Button variant="dark tab_font" style={{color: 'white'}}>Change machines</Button>
        <Button variant="primary">Save changes</Button>
        <button className="button-style mt-2 group-button"
                      style={{ width: "150px",marginLeft:"20px" }}>
                      Change Machine
         </button>
      </Modal.Footer> */}
      </div>
    </Modal.Dialog>
  </div>
 : ""}
  </>
  )
}

export default Popup
