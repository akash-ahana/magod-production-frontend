import React from 'react';
import {Schedulelistdata3} from '../ScheduleListdata';
import Tables from "../../../../../components/Tables";


export default function ProgramList() {

    const getHeadings3= () => {
        return Object.keys(Schedulelistdata3[0]);
      };
    
  return (
    <div>
        <div className="col-md-12 col-sm-12 mt-3">
          <div
            className="table-data"
            style={{overflowY: "scroll" }}>
            <Tables theadData={getHeadings3()} tbodyData={Schedulelistdata3} />
          </div>
        </div>
    </div>
  )
}
