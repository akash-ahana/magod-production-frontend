import React from 'react'
import { Table } from 'react-bootstrap'
import ProgramCompletedModal from '../programpath/ProgramCompletedModal';

export default function ProgramCompletedData() {

    const [show, setShow] = React.useState(false);

    const handaleClick =()=>{
        setShow(true);
     }

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

{/* {processdataList.map((item,key)=>{
  return(
    <>
    <tbody className='tablebody'>
          <tr onClick={()=>selectedRowFn(item,key)} className={key===selectRow?.index? 'selcted-row-clr':'' }>
             <td>{item.Mprocess}</td>
             <td>{item.TgtRate}</td>
             <td>{item.Id}</td>
             <td>{item.Machine_srl}</td>
             <td>{item.RefProcess}</td>
         </tr>
    </tbody>
    </>
  )
})} */}
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
