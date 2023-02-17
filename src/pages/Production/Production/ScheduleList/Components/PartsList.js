import React from 'react';
import {Schedulelistdata2} from '../ScheduleListdata';
import Tables from "../../../../../components/Tables";


export default function PartsList(){

    const getHeadings2 = () => {
        return Object.keys(Schedulelistdata2[0]);
      };
    
  return (
    <div>
        <div className="row mt-2">
           <button className="button-style mt-2 group-button"
              style={{ width: "150px",marginLeft:"20px" }}>
              UpDate Task Parts
            </button>

            <button className="button-style mt-2 group-button"
              style={{ width: "150px" ,marginLeft:"20px"}}>
              Clear All
            </button>

            <button className="button-style mt-2 group-button"
              style={{ width: "150px",marginLeft:"20px" }}>
              Save Cleared
            </button>
        </div>    
        <div className="col-md-12 col-sm-12 mt-3">
          <div
            className="table-data"
            style={{overflowY: "scroll" }}>
            <Tables theadData={getHeadings2()} tbodyData={Schedulelistdata2} />
          </div>
        </div>
    </div>
  )
}
