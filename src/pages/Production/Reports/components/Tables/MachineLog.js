import React from 'react'
import { Table } from 'react-bootstrap'

export default function MachineLog() {
  return (
       <div>
        <div className='d-flex'>
        <div className="row mt-2">
        <button className="button-style mt-2 group-button"
            style={{ width: "150px",marginLeft:"20px" }}>
            Save Log
            </button>
        </div>

        <div className="row mt-2">
        <button className="button-style mt-2 group-button"
            style={{ width: "150px",marginLeft:"20px" }}>
            Print Shift Log
            </button>
        </div>
        </div>

        <div className='row mt-3'>
        <div className='col-md-12 col-sm-12'>
        <div style={{height:"200px",overflowY: "scroll",overflowX:'scroll', width:'800px'}}>
        <Table bordered style={{border:'1px solid grey'}}>
        <thead style={{textAlign:"center"}}>
            <tr>
            <th>Machine</th>
            <th>Shift</th>
            <th>Srl</th>
            <th>FromTime</th>
            <th>ToTime</th>
            <th>MachineTime</th>
            <th>Program</th>
            <th>Remarks</th>
            <th>MachineOperator</th>
            <th>Operation</th>
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
  )
}
