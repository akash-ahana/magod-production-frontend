import React,{useState} from 'react'

function Forms() {

    const [text, setText] = useState("");

    const handleOnChange = (event)=>{
        //console.log("On Change")
        setText(event.target.value);
    }

  return (
    <div>
        <div className="container my-0" style={{margin: '50px'}}>

            {/* <h3 className='tab_font'>Shift In Charge Monitoring Form</h3> */}

            <div className='row'>
                <h5 className="form-title">Shift In Charge Monitoring Form</h5>
            </div>

            <form className='d-flex'>
                <div className="box mb-3" style={{width:'438px', marginRight:'-67px'}}>

            <div className="col-md-9 ">
                <label className="">Date</label>
                <input className="in-field" type="date"/>
            </div>

            <div className="col-md-9 ">
                <label className="">Shift</label>
                <input className="in-field" type="text"/>
            </div>

            <div className="col-md-9 ">
                <label className="">From</label>
                <input className="in-field" type="time"/>
            </div>

            <div className="col-md-9 ">
                <label className="">To</label>
                <input className="in-field" type="time"/>
            </div>

            <div className="col-md-9 ">
                <label className="">In Charge</label>
                <input className="in-field" type="text"/>
            </div>

            {/* <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label tab_font" style={{padding:'initial'}}>Date</label>
                <div className="col-sm-8">
                <input type="date" className="form-control" id="inputEmail3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label tab_font" style={{padding:'initial'}}>Shift</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" id="inputPassword3"/>
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label tab_font" style={{padding:'initial'}}>From</label>
                <div className="col-sm-8">
                <input type="time" className="form-control" id="inputPassword3"/>
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label tab_font" style={{padding:'initial'}}>To</label>
                <div className="col-sm-8">
                <input type="time" className="form-control" id="inputPassword3"/>
                </div>
            </div>
            

            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label tab_font" style={{padding:'initial'}}>In Charge</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" id="inputPassword3"/>
                </div>
            </div> */}
            </div>

            <div className="box01">
            <div className="mb-3" style={{paddingLeft: '2px', width: '536px' }}> 
                <label htmlFor="myBox" className="form-label tab_font">Shift Instructions</label>
                <textarea className="form-control sticky-top" rows='8' id="" value={text} onChange={handleOnChange} style={{height:'221px', resize:'none'}}></textarea>
                </div>
            </div>

            <div className="form-title tab_font" style={{paddingTop:'6px', paddingLeft:'20px'}}>
                <h5>Grouping Actions</h5>
            <div className="col-md-0">
              <div className="col-md-12" style={{display:"flex",gap:"5px"}}>
                <label className="" style={{paddingRight:'4px'}}> By Machines</label>
                <input className="form-check-input mt-2" type="radio" name='working'/>
            </div>
            </div>
            <div className="col-md-0">
              <div className="col-md-12" style={{display:"flex",gap:"5px"}}>
                <label className=""> By Operation</label>
                <input className="form-check-input mt-2" type="radio" name='working'/>
            </div>
            </div>
            <div className="col-md-0">
              <div className="col-md-12" style={{display:"flex",gap:"5px"}}>
                <label className="" style={{paddingRight:'3px'}}> By Customer</label>
                <input className="form-check-input mt-2" type="radio" name='working'/>
            </div>
            </div>
            </div>
            </form>

     </div>

    </div>
  )
}

export default Forms
