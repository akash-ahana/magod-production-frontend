import React from 'react'
import { Table } from 'react-bootstrap'

export default function MachineUtilisation() {


  return (
    <>
    <div className='d-flex mt-1'>
    <div>
      <h6>Laser 11</h6>
      <h6 style={{marginLeft:'18px'}}>TotalOn 1440</h6>
      <p style={{marginLeft:'62px', marginBottom:'0px'}}>Production 135</p>
      <p style={{marginLeft:'42px'}}>Non Production 1306</p>

      <div className='d-flex'>
      <div>
      <div className="col-md-10 mb-1 mt-2">
                <label className="form-title">TotalOff</label>
                <input  className='in-field'/>
      </div>

      <div className="col-md-10 mb-2">
                <label className="form-title">LaserOn</label>
                <input  className='in-field'/>
      </div>
      </div>

      <div className='mt-2'>
      <button className="button-style mt-16 group-button"
              style={{width: "157px", marginRight:'32px', marginLeft:'70px'}}>
              Update Production
      </button>

      <button className="button-style mt-16 group-button"
              style={{width: "157px", marginRight:'32px', marginLeft:'70px'}}>
              save
      </button>
      </div>
      </div>


    </div>

    <div className='row mt-1'>
    <div className='col-md-12 col-sm-12'>
    <div style={{height:"242px",overflowX: "scroll",width:'485px',overflowY:'scroll'}}>
            <Table bordered style={{border:'1px solid grey'}}>
            <thead style={{textAlign:"center"}}>
                <tr>
                <th>Machine</th>
                <th>TotalOn</th>
                <th>TotalOff</th>
                <th>ProductionOn</th>
                <th>NonProductionOn</th>
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
</>
  )
}
