import React, { useState } from 'react';
import MachineForm from './MachineForm';
import MachineTable from './MachineTable';
import axios from "axios";


export default function Machine() {
  const [selectedRow,setSelectedRow]=useState({})
  const [machine_srl,setMachine_srl]=React.useState('')
  const [processdataList,setProcessdataList]=useState([])

  const selectedRowFn=(item,index)=>{
    let list={...item,index:index}

    console.log("api call",item.Machine_srl)
    setMachine_srl(item.Machine_srl)
    // api call
    setSelectedRow(list)
  }

  console.log("Machine",machine_srl);
  const getprocessdataList=()=>{
   axios.post(
      "http://172.16.20.61:5000/productionSetup/getProcessForMachine",
     {
         Machine_srl:machine_srl
    }).then((response) => {
      console.log('data',response)
      setProcessdataList(response.data);
   });
}

  return (
    <div className='row'>
      <h4 className="form-title">Machine Process Setup Form</h4>
      <hr className="horizontal-line" />
       <div className='col-md-6 col-sm-12'>
        <MachineTable selectedRowFn={selectedRowFn} selectedRow={selectedRow}
        getprocessdataList={getprocessdataList}/>
       </div>

    <div className="col-md-6 col-sm-12">
        <MachineForm  selectedRow={selectedRow}
         getprocessdataList={getprocessdataList}
         processdataList={processdataList}/>
        {/* <div className='mt-5'>
        </div> */}
    </div>
  </div>
  )}