import React from 'react'
import { Table } from 'react-bootstrap'

export default function ProductionTask() {
  return (
    <div>
    <div className='row mt-1'>
         <div className='col-md-12 col-sm-12'>
         <div style={{height:"200px",overflowX: "scroll",width:'800px',overflowY:'scroll'}}>
                 <Table bordered style={{border:'1px solid grey'}}>
                 <thead style={{textAlign:"center"}}>
                     <tr>
                     <th>Machine</th>
                     <th>TaskNo</th>
                     <th>MtrlCode</th>
                     <th>Operation</th>
                     <th>MachineTime</th>
                     </tr>
                 </thead>

                 {/* <tbody className='tablebody' style={{textAlign:"center"}}>
                     <tr>
                     <td>265</td>
                     <td>laser 01</td>
                     <td>875456</td>
                     <td>9875798</td>
                     <td>987</td>
                     <td>8765</td>
                     <td>098756</td>
                     </tr>
                 </tbody> */}

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
  )
}
