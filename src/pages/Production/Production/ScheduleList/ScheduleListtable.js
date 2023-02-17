import React from 'react';
import Tables from "../../../../components/Tables";
import Table from "react-bootstrap/Table";
import {Schedulelistdata1} from './ScheduleListdata';
import NavTab from "./Components/NavTab"

export default function ScheduleListtable() {

    const getHeadings1 = () => {
        return Object.keys(Schedulelistdata1[0]);
      };

      
  return (
    <div className='row mt-4'>
    <div className='col-md-6 col-sm-12 mt-3'>
     <div style={{height:"500px",overflowY: "scroll"}}>
     <Table bordered>
       <thead style={{textAlign:"center"}}>
         <tr>
           <th></th>
           <th>Select</th>
           <th>Schedule No</th>
           <th>Customer</th>
           <th>TgtDelDate</th>
         </tr>
       </thead>

       <tbody className='tablebody'>
         <tr>
           <td></td>
           <td>
                <input className="form-check-input"
                 type="checkbox"
                 value=""
                 id="flexCheckDefault"/>
           </td>
           <td>345678</td>
           <td>CRYSTAL ENGINEERING SYSTEM</td>
           <td>2 October</td>
         </tr>

         <tr>
           <td></td>
           <td>
                <input className="form-check-input"
                 type="checkbox"
                 value=""
                 id="flexCheckDefault"/>
           </td>
           <td>367789</td>
           <td>UNIT ALFHA</td>
           <td>4 October</td>
         </tr>


         <tr>
           <td></td>
           <td>
                <input className="form-check-input"
                 type="checkbox"
                 value=""
                 id="flexCheckDefault"/>
           </td>
           <td>123456</td>
           <td>WIPRO ENTERPRISE LIMITED</td>
           <td>26 December</td>
         </tr>

         <tr>
           <td></td>
           <td>
                <input className="form-check-input"
                 type="checkbox"
                 value=""
                 id="flexCheckDefault"/>
           </td>
           <td>367789</td>
           <td>UNIT ALFHA</td>
           <td>4 October</td>
         </tr>

         <tr>
           <td></td>
           <td>
                <input className="form-check-input"
                 type="checkbox"
                 value=""
                 id="flexCheckDefault"/>
           </td>
           <td>367789</td>
           <td>UNIT ALFHA</td>
           <td>4 October</td>
         </tr>

         <tr>
           <td></td>
           <td>
                <input className="form-check-input"
                 type="checkbox"
                 value=""
                 id="flexCheckDefault"/>
           </td>
           <td>367789</td>
           <td>UNIT ALFHA</td>
           <td>4 October</td>
         </tr>

         <tr>
           <td></td>
           <td>
                <input className="form-check-input"
                 type="checkbox"
                 value=""
                 id="flexCheckDefault"/>
           </td>
           <td>367789</td>
           <td>UNIT ALFHA</td>
           <td>4 October</td>
         </tr>

         <tr>
           <td></td>
           <td>
                <input className="form-check-input"
                 type="checkbox"
                 value=""
                 id="flexCheckDefault"/>
           </td>
           <td>367789</td>
           <td>UNIT ALFHA</td>
           <td>4 October</td>
         </tr>

         <tr>
           <td></td>
           <td>
                <input className="form-check-input"
                 type="checkbox"
                 value=""
                 id="flexCheckDefault"/>
           </td>
           <td>367789</td>
           <td>UNIT ALFHA</td>
           <td>4 October</td>
         </tr>

         <tr>
           <td></td>
           <td>
                <input className="form-check-input"
                 type="checkbox"
                 value=""
                 id="flexCheckDefault"/>
           </td>
           <td>367789</td>
           <td>UNIT ALFHA</td>
           <td>4 October</td>
         </tr>

         <tr>
           <td></td>
           <td>
                <input className="form-check-input"
                 type="checkbox"
                 value=""
                 id="flexCheckDefault"/>
           </td>
           <td>367789</td>
           <td>UNIT ALFHA</td>
           <td>4 October</td>
         </tr>

         <tr>
           <td></td>
           <td>
                <input className="form-check-input"
                 type="checkbox"
                 value=""
                 id="flexCheckDefault"/>
           </td>
           <td>367789</td>
           <td>UNIT ALFHA</td>
           <td>4 October</td>
         </tr>

         <tr>
           <td></td>
           <td>
                <input className="form-check-input"
                 type="checkbox"
                 value=""
                 id="flexCheckDefault"/>
           </td>
           <td>367789</td>
           <td>UNIT ALFHA</td>
           <td>4 October</td>
         </tr>

        <tr>
           <td></td>
           <td>
                <input className="form-check-input"
                 type="checkbox"
                 value=""
                 id="flexCheckDefault"/>
           </td>
           <td>367789</td>
           <td>UNIT ALFHA</td>
           <td>4 October</td>
         </tr>

        <tr>
           <td></td>
           <td>
                <input className="form-check-input"
                 type="checkbox"
                 value=""
                 id="flexCheckDefault"/>
           </td>
           <td>367789</td>
           <td>UNIT ALFHA</td>
           <td>4 October</td>
        </tr>
   </tbody>
 </Table>
     </div>
 </div>

 <div className="col-md-6 col-sm-12">
 <div className="col-md-12 col-sm-12 mt-3">
       <div
         className="table-data"
         style={{overflowY: "scroll" }}>
          <Tables theadData={getHeadings1()} tbodyData={Schedulelistdata1} />
        </div>
     </div>
     <div> <NavTab/></div>
 </div>
</div>
  )
}
