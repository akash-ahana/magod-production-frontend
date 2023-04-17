import React from 'react'
import { Table } from 'react-bootstrap'
import ProgramCompletedModal from '../programpath/ProgramCompletedModal';

export default function ProgramCompletedData({machineProgramesCompleted}) {

    const [show, setShow] = React.useState(false);

    const handaleClick =()=>{
        setShow(true);
     }
     console.log(' data from program compleated table component ' , machineProgramesCompleted)
  return (
    <>
    <div>
    <div className="row mt-2">
       <button className="button-style mt-2 group-button"
          style={{ width: "150px",marginLeft:"20px" }} onClick={handaleClick}>
          Open Programs
        </button>
    </div>

    <div className='row mt-3'>
    <div className='col-md-12 col-sm-12'>
     <div style={{height:"200px",overflowY: "scroll",overflowX:'scroll', width:'800px'}}>
     <Table bordered style={{border:'1px solid grey'}}>
       <thead style={{textAlign:"center"}}>
         <tr>
           <th>Task No</th>
           <th>Machine</th>
           <th>Operation</th>
           <th>Program No</th>
           <th>Plan Time</th>
           <th>Actual Time</th>
           <th>QTY</th>
           <th>Allotted</th>
           <th>Processed</th>
         </tr>
       </thead>

{machineProgramesCompleted && machineProgramesCompleted.map((item,key)=>{
  return(
    <>
    <tbody className='tablebody'>
          <tr>
             <td>{item.TaskNo}</td>
             <td>{item.Machine}</td>
             <td>{item.Operation}</td>
             <td>{item.NCProgramNo}</td>
             <td>{item.EstimatedTime}</td>
             <td>{item.ActualTime}</td>
             <td>{item.Qty}</td>
             <td>{item.QtyAllotted}</td>
             <td>{item.QtyCut}</td>
         </tr>
    </tbody>
    </>
  )
})}
 </Table>
     </div>
 </div>
</div>

</div>

{show &&
  (
    <ProgramCompletedModal 
    show={show}
     setShow={setShow}/>
  )
}

</>
  )
}
