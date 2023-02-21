import React, {useMemo, useState ,useEffect} from 'react';
import AddMachine from './AddMachineModal/AddMachine';
import AddProcessmodal from './AddProcess/AddProcessmodal';
import axios from "axios";
import { formatDate } from './Dateconverter';
import {useGlobalContext} from '../../../../Context/Context'
import ProcessTable from './ProcessTable';

export default function ({selectedRow}) {
    const {MachineTabledata} = useGlobalContext()
    const [finaldata,setFinaldata]=React.useState([])
    const [show, setShow] = React.useState(false);
    const [addprocess,setAddprocess]=React.useState(false)
    const [machineData,setMachineData]=useState({})
    
    let savemachineInitialState={refNmae:'',manufacturer:'',model:'',Working:0,TgtRate:'',
    reamrks:'',InstallDate:'',UnistallDate:'',location:'',RegnNo:''}
    
    console.log("required",selectedRow)


    //SELECT PROCESS TABLE DATA 
    const [mach_srl,setMarh_srl]=useState('')
    const [process,setProcess]=useState('')
    const [selectRow,setSelectRow]=useState({})

    const selectedRowFun=(item,index)=>{
      let list={...processdataList,index:index}
      // console.log("api call ",item.Mprocess)
      setMarh_srl(item.Machine_srl);
      setProcess(item.Mprocess);
      // api call
      setSelectRow(list);
    }
  

 //PROCESSLIST
 const [processdataList,setProcessdataList]=useState([])
  // useMemo(()=>{
  //   setRefprocess({...processdataList})
  // },[processdataList])

  // console.log(refprocess) 
  useEffect(()=>{
    getprocessdataList(selectedRow.Machine_srl)
  },[selectedRow])

  const getprocessdataList=(machine_srl)=>{
    axios.post(
       "http://172.16.20.61:5000/productionSetup/getProcessForMachine",
      {
          Machine_srl:machine_srl
     }).then((response) => {
      //  console.log('data',response)
       setProcessdataList(response.data);
    });
 }
    
//DELETE PROCESS
// let =selectRow.Machine_srl;
// let process=selectRow.Mprocess;
// console.log("delete process sending",mach_srl,process)
const deleteProcess=()=>{
  console.log(mach_srl,process)
  axios.post(
    "http://172.16.20.61:5000/productionSetup/deleteProcessFromMachine",
    {
      Machine_srl:mach_srl,
      Mprocess:process
    }).then((response) => {
      console.log("process delted",response.data)
      getprocessdataList(selectedRow.Machine_srl);
  });
}

 
    //DELETE MACHINE
    let referencename=selectedRow.refName;
    const deleteMachine=()=>{
      axios.post(
        "http://172.16.20.61:5000/productionSetup/deleteMachine",
        {
          refName:referencename
        }).then((response) => {
        MachineTabledata();
      });
    }

    //GET MACHINE DETAILS
    const getmachineDetails=()=>{
      axios.post(
        "http://172.16.20.61:5000/productionSetup/getMachine",
        {
          refName:referencename
        }).then((response) => {
        // console.log("Required data",response[0]);
        setFinaldata(response.data);
      });
    }

useMemo(()=>{
  setMachineData({...selectedRow})
},[selectedRow])


const handleMachineChange=(e)=>{
  let {name,value}=e.target
  if(name==="Working"){
  
    let status=''
if(e.target.checked){
  status=1
}
else{
  status=0
}
    setMachineData({...machineData,"Working":status})
    return
  }
  setMachineData({...machineData,[name]:value})
  // console.log("On change fn ",name,value)
}

  const openAddprocess=()=>{
     setAddprocess(true);
  }

  
  const addMachine=()=>{
    setShow(true);
    // console.log("hi")
  }

  //save machine
  const saveMachine=()=>{
    console.log("machine data",machineData)
    axios.post(
      "http://172.16.20.61:5000/productionSetup/saveMachine",
      {
      ...machineData
      }).then((response) => {
      console.log("sent", response);
      getmachineDetails();
      MachineTabledata();
    });
}

  return (
    <div>
          <div className="row">
            <div className="row">
              <div className="col-md-12 ">
                <label className="">Reference Name</label>
                <input className="in-field" value={selectedRow.refName} 
                disabled
                name='refName' onChange={(e)=>handleMachineChange(e)} />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <label className="">Manufacturer</label>
                <input className="in-field"  name='manufacturer' value={machineData.manufacturer} 
                disabled  onChange={(e)=>handleMachineChange(e)}/>
              </div>
            </div>


            <div className="row">
              <div className="col-md-9">
              <div className="col-md-12 ">
                <label className="">Model</label>
                <input className="in-field" value={machineData.Model} 
                 disabled name='model' onChange={(e)=>handleMachineChange(e)} />
              </div>

              </div>
              <div className="col-md-3">
              <div className="col-md-12 mt-4"
               style={{display:"flex",gap:"5px"}}>
                <label className="">Working</label>
                <input className="form-check-input mt-2"
                    type="checkbox"
                    checked={machineData.Working===1 ? true : false}
                    name='Working' onChange={(e)=>handleMachineChange(e)}
                    id="flexCheckDefault"/>
              </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
              <div className="col-md-12 ">
                <label className="">RegnNo</label>
                <input className="in-field"   value={machineData.RegnNo}
                 name='RegnNo' onChange={(e)=>handleMachineChange(e)} />
              </div>

              </div>
              <div className="col-md-6">
              <div className="col-md-12 ">
                <label className="">Location</label>
                <input className="in-field"
                   name='location' value={machineData.location}
                 onChange={(e)=>handleMachineChange(e)} />
              </div>
              </div>
            </div>

            <div className="row">
            <div className="col-md-6">
              <div className="col-md-12 ">
                <label className="">Machine_Type</label>
                <input className="in-field"  value={machineData.Machine_Type}
                disabled name='Machine_Type' onChange={(e)=>handleMachineChange(e)}/>
              </div>
              </div>
              
              <div className="col-md-6">
              <div className="col-md-12 ">
                <label className="">Target Rate</label>
                <input className="in-field"  value={machineData.TgtRate}
                name='TgtRate' onChange={(e)=>handleMachineChange(e)} />
              </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
              <div className="col-md-12 ">
                <label className="">Install Date</label>
                <input className="in-field" 
              name='InstallDate'  value={formatDate(machineData.InstallDate)} type="date"
                 onChange={(e)=>handleMachineChange(e)} />
              </div>
              </div>
              <div className="col-md-6">
              <div className="col-md-12 ">
                <label className="">Uninstall Date</label>
                <input className="in-field" name='UnistallDate'
                  value={formatDate(machineData.UnistallDate)}
                 type="date"
                 onChange={(e)=>handleMachineChange(e)} />
              </div>
              </div>
            </div>
            <div className="row">
            <div className="col-md-12 ">
                <label className="">Remarks</label>
                <input className="in-field" name='remarks'
                 value={machineData.remarks} 
                 onChange={(e)=>handleMachineChange(e)} />
              </div>
              
            </div>
          </div>

          { (
              <AddMachine
                show={show}
                setShow={setShow}
              />
            )}

            {(
              <AddProcessmodal
               addprocess={addprocess}
               setAddprocess={setAddprocess}
               selectedRow={selectedRow}
               getprocessdataList={getprocessdataList}
               />
            )}

      <div className="row mt-3">
        <button className="button-style mt-2 group-button"
         style={{ width: "150px",marginLeft:"20px" }} onClick={addMachine}>
           Add Machine
        </button>

        <button className="button-style mt-2 group-button"
         style={{ width: "150px" ,marginLeft:"20px"}}
         onClick={()=>{saveMachine()}}>
         Save Machine
        </button>

      <button className="button-style mt-2 group-button"
       style={{ width: "150px",marginLeft:"20px" }} 
       onClick={()=>{deleteMachine()}}>
       Delete Machine
      </button>

      <button className="button-style mt-2 group-button"
       style={{ width: "150px",marginLeft:"20px"}} onClick={openAddprocess}>
        Add Process
      </button>

      {/* <button className="button-style mt-2 group-button" style={{ width: "150px",marginLeft:"20px" }}>
       Save Process
      </button> */}

      <button className="button-style mt-2 group-button"
       style={{ width: "150px",marginLeft:"20px"}} onClick={()=>{deleteProcess()}}>
       Delete Process
      </button>
     </div>
     <div className='mt-4'>
        <ProcessTable processdataList={processdataList}
        selectedRowFun={selectedRowFun} 
        // selectedRow={selectedRow}
        selectRow={selectRow}
        getprocessdataList={getprocessdataList}/>
     </div>
      </div>
      
  )
}
