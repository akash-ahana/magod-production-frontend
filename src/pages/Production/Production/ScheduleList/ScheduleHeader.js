import React from 'react'

export default function ScheduleHeader() {
  return (
    <div className='row'>
       <div className='col-md-3 col-sm-12 mt-3'>
         <div>
           <h4 className="form-title">Production Schedule Information</h4>
           <div className="col-md-10">
              <label className="">Find Schedule</label>
              <input className="in-field"  type='search'/>
           </div>
        </div>
       </div>

    <div className="col-md-9 col-sm-12">
        <div className="ip-box form-bg mt-5 ">
          <div className='row'>
            <button className="button-style mt-2 group-button"
             style={{ width: "120px"}}>
              Reset Status
            </button>

            <button className="button-style mt-2 group-button"
              style={{ width: "120px"}}>
              Show Status
            </button>

            <button className="button-style mt-2 group-button" 
               style={{ width: "120px"}}>
               Show Parts
            </button>

            <button className="button-style mt-2 group-button"
               style={{ width: "140px"}}>
               Show Programs
            </button>

            <button className="button-style mt-2 group-button" 
             style={{ width: "140px" }}>
             Production list
            </button>

            <button className="button-style mt-2 group-button" 
              style={{ width: "120px" }}>
              Design
            </button>
          </div>
      </div>
    </div>
  </div>
  )
}
