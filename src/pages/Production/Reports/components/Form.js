import React from 'react'
import FirstAlert from './Alerts/FirstAlert';

export default function Form() {

  const [open, setOpen] = React.useState(false);

  const handleOpen=()=>{
    setOpen(true)
    }
    

  return (
    <>
    <div className='bg-light'>
       <div className='row mb-2'>
       <div className='col-md-3 col-sm-12 mt-4' style={{marginRight:'-76px'}}>
         <div>
           <h4 className="form-title bg-light">Daily Production Report</h4>
        </div>
       </div>

    <div className="col-md-9 col-sm-12">
        <div className="ip-box form-bg mt-4 bg-light">
          <div className='row'>

            <div className="col-md-2">
               <input  className='in-field' type='date'/>
            </div>

            <button className="button-style mt-16 group-button"
              style={{width: "157px", marginLeft:'31px'}} onClick={handleOpen}>
              Prepare Report
            </button>

            <button className="button-style mt-16 group-button" 
               style={{ width: "157px", marginLeft:'41px', marginRight:'55px'}}>
               Print Daily Report
            </button>

            <div className="col-md-3 mb-3" style={{marginTop:'-17px'}}>
                <label className="form-title bg-light">Prepared By</label>
                <input  className='in-field bg-light'/>
            </div>
            
          </div>
      </div>
    </div>
  </div>
</div>

{
  (
    <FirstAlert
    open={open}
     setOpen={setOpen}/>
  )
}

</>
  )
}
