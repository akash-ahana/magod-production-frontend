import React,{useState} from 'react'
import Iframe from './Iframe'

function Forms() {

    const [text, setText] = useState("");
    const [isToggled, setIsToggled] = useState(true);
    const [isClick, setIsClick] = useState(false);
    const [isCustomer, setIsCustomer] = useState(false);

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const byMachine = ()=>{
        setIsClick(false)
        setIsCustomer(false)
        setIsToggled(!isToggled)
    }

    const byOperation = ()=>{
        setIsToggled(false)
        setIsCustomer(false)
        setIsClick(!isClick)
    }

    const byCustomer = ()=>{
        setIsClick(false)
        setIsToggled(false)
        setIsCustomer(!isCustomer)
    }

  return (
    <>
    <div className='bg-light'>
        <div className="my-0" style={{margin: '40px'}}>

            <div className='row'>
                <h5 className=" bg-light form-title">Shift In Charge Monitoring Form</h5>
            </div>

            <form className='d-flex'>
            <div className="box mb-3" style={{width:'438px', marginRight:'-67px'}}>

            <div className="col-md-9 ">
                <label className="form-label">Date</label>
                <input className="in-field" type="date" style={{marginTop:'-3px'}} disabled/>
            </div>

            <div className="col-md-9 ">
                <label className="form-label">Shift</label>
                <input className="in-field" type="text" style={{marginTop:'-10px'}} disabled/>
            </div>

            <div className="col-md-9 ">
                <label className="form-label">From</label>
                <input className="in-field" type="time" style={{marginTop:'-6px'}} disabled/>
            </div>

            <div className="col-md-9 ">
                <label className="form-label">To</label>
                <input className="in-field" type="time" style={{marginTop:'-7px'}} disabled/>
            </div>

            <div className="col-md-9 ">
                <label className="form-label">In Charge</label>
                <input className="in-field" type="text" style={{marginTop:'-6px'}} disabled/>
            </div>
            </div>

            <div className="bg-light box01">
            <div className="mb-3" style={{paddingLeft: '2px', width: '536px' }}> 
                <label htmlFor="myBox" className="bg-ligh tform-title tab_font mb-2">Shift Instructions</label>
                <textarea className="form-control sticky-top" rows='8' id="" value={text} onChange={handleOnChange} style={{height:'218px', resize:'none'}} disabled></textarea>
                </div>
            </div>

            <div className="bg-light form-title tab_font" style={{paddingTop:'6px', paddingLeft:'20px'}}>
                <h5 className="bg-light form-title">Grouping Actions</h5>
            <div className="col-md-0">
              <div className="col-md-12" style={{display:"flex",gap:"5px"}}>
                <label className="" style={{paddingRight:'4px'}}> By Machines</label>
                <input className="form-check-input mt-2" onChange={byMachine} type="radio" name='working' defaultChecked/>
            </div>
            </div>
            <div className="col-md-0">
              <div className="col-md-12" style={{display:"flex",gap:"5px"}}>
                <label className=""> By Operation</label>
                <input className="form-check-input mt-2" onChange={byOperation} type="radio"  name='working'/>
            </div>
            </div>
            <div className="col-md-0">
              <div className="col-md-12" style={{display:"flex",gap:"5px"}}>
                <label className="" style={{paddingRight:'3px'}}> By Customer</label>
                <input className="form-check-input mt-2" onChange={byCustomer} type="radio" name='working'/>
            </div>
            </div>
            </div>
            </form>
     </div>
    </div>
    <Iframe isToggled={isToggled} isClick={isClick} isCustomer={isCustomer}/>
    </>
  )
}

export default Forms
