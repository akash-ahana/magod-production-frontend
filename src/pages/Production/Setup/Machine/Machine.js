import React, { useState } from 'react';
import MachineForm from './MachineForm';
import MachineTable from './MachineTable';
import ProcessTable from './ProcessTable';


export default function Machine() {
  const [selectedRow,setSelectedRow]=useState({})

  const selectedRowFn=(item,index)=>{
    let list={...item,index:index}

    console.log("api call",item.refName)
    // api call
    setSelectedRow(list)
  }

  return (
    <div className='row'>
      <h4 className="form-title">Machine Process Setup Form</h4>
      <hr className="horizontal-line" />
       <div className='col-md-6 col-sm-12'>
        <MachineTable selectedRowFn={selectedRowFn} selectedRow={selectedRow}/>
       </div>

    <div className="col-md-6 col-sm-12">
        <MachineForm  selectedRow={selectedRow}/>
        <div className='mt-5'>
        </div>
    </div>

    
  </div>
  )}