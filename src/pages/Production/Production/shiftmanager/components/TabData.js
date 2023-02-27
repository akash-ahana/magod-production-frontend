import React, {useState} from 'react'
// import { Link } from 'react-router-dom';
import Tables from '../../../../../components/Tables';
import { Schedulelistdata4 } from '../../ScheduleList/ScheduleListdata';
import CustomModal from '../programpath/CustomModal';
import ProgramPath2 from '../programpath/ProgramPath2';
// import ProgramPath2 from '../programpath/ProgramPath2';

export default function TabData() {

  const [show, setShow] = React.useState(false);

    const getHeadings2 = () => {
        return Object.keys(Schedulelistdata4[0]);
      };

    const handaleClick =()=>{
      console.log("hi")
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
    <div className="col-md-12 col-sm-12 mt-3">
      <div
        className="table-data"
        style={{overflowY: "scroll" }}>
        <Tables theadData={getHeadings2()} tbodyData={Schedulelistdata4} />
      </div>
    </div>
</div>

{show &&
  (
    <CustomModal 
    show={show}
     setShow={setShow}/>
  )
}
{/* <ProgramPath2 */}
</>
  )
}
