import React from 'react'
import { Table } from 'react-bootstrap'

export default function TableData({processdataList,selectedRowFn,selectRow}) {
  return (
    <div className='row mt-1'>
    <div className='col-md-12 col-sm-12' style={{paddingRight:'462px', paddingBottom:'23px'}}>
     <div style={{height:"200px",width:'690px',overflowY: "scroll", overflowX:'scroll'}}>
     <Table bordered style={{border:'1px solid grey'}}>
       <thead style={{textAlign:"center"}}>
         <tr>
           <th>DWG Name</th>
           <th>To Produce</th>
           <th>Produced</th>
           <th>Rejected</th>
           <th>Cleared</th>
           <th>Remarks</th>
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
  )
}
