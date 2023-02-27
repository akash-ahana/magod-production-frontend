import { display } from '@mui/system';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ProgramPath1 from './ProgramPath1';

// import Form from 'react-bootstrap/Form';

// import MachineSelectionForm from './MachineSelectionForm';

import Modal from 'react-bootstrap/Modal';
import { FormSelect } from 'react-bootstrap';

export default function ProgramPath2({show, setShow}) {
    const [popup, setPopup] = useState(false);

    const handleClose = () => setShow(false);

    const openPopup = () => {
        setPopup(!popup)


    }

    const closePopup = () => {
        setPopup(false);
    }


    return (
        <>
        <Modal className="model" show={show} onHide={handleClose} 
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        >
        <ProgramPath1/>
            <div style={{ display: 'flex' }}>
                <div className="box2" style={{ width: '400px' }}>
                    <div className="mb-3  row" >
                        <label htmlFor="inputtext" className="col-sm-3 col-form-label  tab_font"   >TaskNo</label>
                        <div className="col-sm-8" style={{ marginTop: '10px' }}>
                            {/* <input type="email" className="form-control" id="" style={{ borderRadius: '0px', padding: '2px' }} /> */}
                            <input className='form-control' style={{width:'200px', borderRadius:'0px'}}></input>
                        </div>
                    </div>

                    <div className="mb-3 row" style={{ marginLeft: '20px' }}>
                        <label htmlFor="inputtext" className="col-sm-3 col-form-label tab_font" style={{ padding: 'initial' }}>Program No</label>
                        <div className="col-sm-8">
                            {/* <input type="text" className="form-control" id="inputtext" style={{ borderRadius: '0px', padding: '2px' }} /> */}
                            <input className='form-control' style={{width:'200px', borderRadius:'0px'}}></input>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputtext" className="col-sm-3 col-form-label tab_font" style={{ padding: 'initial' }}>Machine</label>
                        <div className="col-sm-8">
                            {/* <input type="text" className="form-control" id="" style={{ borderRadius: '0px', padding: '2px' }} /> */}
                            <input className='form-control' style={{width:'200px', borderRadius:'0px'}}></input>
                            <label className="mt-4 tab_font" tab_font>Process Time</label>
                        </div>
                    </div>

                    {/* <div className="" style={{paddingLeft:'3px', marginLeft:'10px'}}>
                    <label  className="" tab_font>Process Time</label>
                   
                </div> */}
                </div>



                <div className="box3" style={{ width: '350px', paddingLeft: '30px' }}>
                    <div className="mb-3 row" >
                        <label htmlFor="inputtext" className="col-sm-5 col-form-label tab_font"  >Quantity</label>
                        <div className="col-sm-6" style={{ marginTop: '10px' }}>
                            {/* <input type="email" className="form-control" id="" style={{ borderRadius: '0px', padding: '2px' }} /> */}
                            <input className='form-control' style={{width:'120px', borderRadius:'0px'}}></input>
                        </div>
                    </div>

                    <div className="mb-3 row" style={{ marginLeft: '20px' }}>
                        <label htmlFor="inputtext" className="col-sm-5 col-form-label tab_font" style={{ padding: 'initial' }}>Alloted</label>
                        <div className="col-sm-6">
                            {/* <input type="text" className="form-control" id="inputtext" style={{ borderRadius: '0px', padding: '2px' }} /> */}
                            <input className='form-control' style={{width:'120px', borderRadius:'0px'}}></input>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputtext" className="col-sm-5 col-form-label  tab_font" style={{ padding: 'initial' }}>Processed</label>
                        <div className="col-sm-6">
                            {/* <input type="text" className="form-control" id="inputtext" style={{ borderRadius: '0px', padding: '2px' }} /> */}
                            <input className='form-control' style={{width:'120px', borderRadius:'0px'}}></input>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputtext" className="col-sm-5 col-form-label tab_font" style={{ padding: 'initial' }}>Estimated</label>
                        <div className="col-sm-6">
                            {/* <input type="text" className="form-control" id="inputtext" style={{ borderRadius: '0px', padding: '2px' }} /> */}
                            <input className='form-control' style={{width:'120px', borderRadius:'0px'}}></input>
                        </div>
                    </div>
                </div>


                <div className="box4" style={{ width: '280px', paddingLeft: '30px' }}>
                    <div className="mb-3 row" >
                        <label htmlFor="inputtext" className="col-sm-3 col-form-label tab_font"  >Material</label>
                        <div className="col-sm-6" style={{ marginTop: '10px' }}>
                            {/* <input type="email" className="form-control" id="" style={{ borderRadius: '0px', padding: '2px' }} /> */}
                            <input className='form-control' style={{width:'330px', borderRadius:'0px'}}></input>
                        </div>
                    </div>

                    <div className="mb-3 row" style={{ marginLeft: '20px' }}>
                        <label htmlFor="inputtext" className="col-sm-3 col-form-label tab_font" style={{ padding: 'initial' }}>Process</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="inputtext" style={{ borderRadius: '0px', padding: '2px' }} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputtext" className="col-sm-3 col-form-label tab_font" style={{ padding: 'initial' }}>Dwgs</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="inputtext" style={{ borderRadius: '0px', padding: '2px' }} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputtext" className="col-sm-3 col-form-label tab_font" style={{ padding: 'initial' }}>Machine</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="inputtext" style={{ borderRadius: '0px', padding: '2px' }} />
                        </div>
                    </div>
                </div>



                <div className="box5" style={{ width: '250px' }}>

                    <div style={{ paddingTop: '60px' }}>

                        <div className="mb-3 row" style={{ marginLeft: '20px' }}>
                            <label htmlFor="inputtext" className="col-sm-3 col-form-label tab_font" style={{ padding: 'initial' }}>Stats</label>
                            <div className="col-sm-6">
                                {/* <input type="text" className="form-control" id="inputtext" style={{ borderRadius: '0px', padding: '2px', }} /> */}
                                <input className='form-control' style={{width:'100px', borderRadius:'0px'}}></input>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="inputtext" className="col-sm-3 col-form-label tab_font" style={{ padding: 'initial' }}>Parts</label>
                            <div className="col-sm-6">
                                {/* <input type="text" className="form-control" id="inputtext" style={{ borderRadius: '0px', padding: '2px' }} /> */}
                                <input className='form-control' style={{width:'100px', borderRadius:'0px'}}></input>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='row'>

                    <button className="button-style mt-2 group-button"
                        style={{ width: "120px" }}>
                        Clear Parts
                    </button>

                    <button className="button-style mt-2 group-button" style={{ width: "140px" }} onClick={openPopup} >
                        ChangeMachine
                    </button>
                </div>


            </div>

            {/* { popup ?  
      
      <div  className="modal show"
      style={{ display: 'block', position: 'initial' ,  }}>
   
    <div className='model-content'>
      <Modal.Dialog  style={{border:'1px solid black', borderRadius:'2px', height:'200px'}}>
        <Modal.Header className='bg-secondary tab_font' style={{height:'10px',}}  closeButton  onClick={closePopup}>
          <Modal.Title>Mogod production manager</Modal.Title>
        </Modal.Header >

        <Modal.Body className=' tab_font'>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" style={{borderRadius:'0px'}} onClick={closePopup}>Yes</Button>
          <Button variant="primary" style={{borderRadius:'0px'}} onClick={closePopup}>No</Button>
        </Modal.Footer>
      </Modal.Dialog>
      </div>
    </div> :""}
 */}

            {popup ?

                <div className="modal show"
                    style={{ display: 'block', position: 'initial' }}>

                    
                        <Modal.Dialog  >
                        <div className='model-content bg-light' style={{width:'628px', borderRadius:'1px solid black'}}>
                            <Modal.Header className='bg-secondary tab_font' style={{ height: '10px' }} closeButton onClick={closePopup}>
                                <Modal.Title>
                                    Machine selection form
                                </Modal.Title>
                            </Modal.Header >

                            <Modal.Body className=' tab_font' style={{}}>
                                <div className='model-content' style={{ display: 'flex' }}>
                                    <div className="box2" style={{}}>
                                        <div className="mb-3  row" >
                                            <label htmlFor="inputtext" className="col-sm-4 col-form-label  tab_font" style={{ padding: 'initial' }} >Program no</label>
                                            <div className="col-sm-8" style={{ marginTop: '10px' }}>
                                                <input type="email" className="form-control" id="" style={{ borderRadius: '0px', padding: '2px' }} />
                                            </div>
                                        </div>

                                        <div className="mb-3 row" style={{ marginLeft: '20px' }}>
                                            <label htmlFor="inputtext" className="col-sm-4 col-form-label tab_font" style={{ padding: 'initial' }}>Material</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" id="inputtext" style={{ borderRadius: '0px', padding: '2px' }} />
                                                
                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <label htmlFor="inputtext" className="col-sm-4 col-form-label tab_font " style={{ padding: 'initial' }}>Process</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" id="" style={{ borderRadius: '0px', padding: '2px' }} />

                                            </div>
                                        </div>

                                        <div className="mb-3 row">
                                            <label htmlFor="inputtext" className="col-sm-4 col-form-label tab_font" style={{ padding: 'initial' }}>Stats</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" id="" style={{ borderRadius: '0px', padding: '2px' }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='box2'>
                                        <div className="mb-3 row">
                                            <label htmlFor="inputtext" className="col-sm-4 col-form-label tab_font" style={{ padding: 'initial' }}>Machine </label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" id="" style={{ borderRadius: '0px', padding: '2px' }} />

                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-4 col-form-label tab_font" style={{ padding: 'initial' }}>Change To</label>
                                            <div className="col-sm-8">
                                                <FormSelect size="sm">
                                                    <option>select</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </FormSelect>
                                            {/* <Button variant="secondary tab_font mt-3" size='sm'>Change machines</Button> */}

                                            <div className='row mt-4' style={{width:'150px'}}>
                                            <button className="button-style group-button" onClick={openPopup} >
                                                ChangeMachine
                                            </button>


                                            </div>
                                        </div>
                                        </div>

                                    </div>




                                </div>


                            </Modal.Body>

                            <Modal.Footer>
                                {/* <Button onClick={closePopup}></Button>
                                <Button onClick={closePopup}></Button> */}
                            </Modal.Footer>
                            </div>
                        </Modal.Dialog>
                   
                </div> : ""}


    </Modal>
        </>
    );
}
