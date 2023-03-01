import React,{useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AlertAddprocess from './AlertAddprocess';
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
//import {process} from './ProcessList'

export default function AddProcessmodal({addprocess,setAddprocess,
  selectedRow,getprocessdataList}) {

  const formSchema = Yup.object().shape({
    RefProcess: Yup.string().required("This Field is required"),
    TgtRate: Yup.string().required("This Field is required"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

    const [alert,setAlert]=React.useState(false);
    const [processList,setProcessList]=React.useState([])

    //  const [Machinesrl,setMachinesrl]=React.useState('')
     const [Mprocess,setMprocess]=React.useState('')
     const [RefProcess,setRefProcess]=React.useState('')
     const [TgtRate,setTgRate]=React.useState('');

    let addprocessState={RefProcess:'',TgtRate:'',Machine_srl:'',Mprocess:''}
     const[processform,setProcessform]=React.useState(addprocessState);
    function handleFormChange(e){
      let {name,value}=e.target
      setProcessform({...processform,[name]:value})
    }

    useEffect(() => {
      // reset form with user data
      reset(processform);
    }, [processform]);
    
    useEffect(() => {
      axios.get("http://172.16.20.61:5000/productionSetup/getAllProcessList").then((response) => {
        setProcessList(response.data);
      });
    }, []);

    // console.log("processform",processList);
    
    const findmprocess = (processDescription) => {
      // console.log('inside function' ,processList)
      let newArray = processList.filter(
        function(processList){ return processList.ProcessDescription == processDescription }
    );
   setMprocess(newArray[0].ProcessID)
      return newArray[0].ProcessID
    }

    const showAlert=()=>{
      setAlert(true);
      setAddprocess(false);
        console.log('machineSRL IS ' , selectedRow.Machine_srl)
        let foundedMprocess = findmprocess(processform.RefProcess)
        setProcessform({...processform,"Mprocess":foundedMprocess,"Machine_srl":selectedRow.Machine_srl})
        setMprocess(foundedMprocess)
        let Mprocess=addprocessState.Mprocess;
        console.log('last console of state process form ' , processform)
      }
      

    const handleClose = () => setAddprocess(false);

  return (
    <div>

{alert &&(
            <AlertAddprocess
            alert={alert}
            setAlert={setAlert}
            processform={processform}
            selectedRow={selectedRow}
            setProcessform={setProcessform}
            getprocessdataList={getprocessdataList}
            />
        )}
      <Modal show={addprocess} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>TMACH 2</Modal.Title>
        </Modal.Header>

        <form className="form" onSubmit={handleSubmit(showAlert)}>
        <Modal.Body>
        <div className="col-md-12 col-sm-12">
          <div className="ip-box form-bg ">
            <div className="row">
        
              <div className="col-md-12 mb-4 ">
                 <label className="form-label">Process</label>
                 <select  name='RefProcess' value={processform.RefProcess}
                 {...register('RefProcess')} 
                 className={`ip-select  ${
                 errors.RefProcess ? 'is-invalid' : ''}`} required
                 onChange={(e)=>{
                  handleFormChange(e)
                  setRefProcess(e.target.value)
                  }}>
                    <option value=''>Select Process</option>
                  {processList.map((value,key)=>{
                    return(
                      <>
                        <option value={value.ProcessDescription}>{value.ProcessDescription}</option>
                      </>
                    )
                  })}
                  </select>
              </div>

              <div className="col-md-12">
                <label className=""> Rate(/Hour)</label>
                <input    value={processform.TgtRate} name='TgtRate'
                {...register("TgtRate")}
                className={`in-field ${
                  errors.TgtRate ? "is-invalid" : ""}`} required 
                onChange={(e)=> {
                  handleFormChange(e)
                  setTgRate(e.target.value)
                }} />
              </div>

            </div>
          </div>
        </div>
        </Modal.Body>

        <Modal.Footer>
        <Button variant="primary" type='submit'>
           Add Process
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    </div>
  )
}
