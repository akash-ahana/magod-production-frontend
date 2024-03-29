import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MachineModal from './MachineModal';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";


export default function AddMachine({show, setShow}) {
  const [machinetypes,setMachinetypes] = React.useState([]);
  let initialState=
  {manufacturer:'',refName:'',model:'',Machine_Type:''}
  const [formdata,setFormdata]=React.useState(initialState);
  function handleFormChange(e){
    let {name,value}=e.target
    setFormdata({...formdata,[name]:value})
  }
  // console.log(formdata)

  React.useEffect(() => {
    axios.get("http://172.16.20.61:5000/productionSetup/getMachineTypes").then((response) => {
      setMachinetypes(response.data);
      // console.log(response.data)
    });
  }, []);

  


  const formSchema = Yup.object().shape({
    refName: Yup.string().required("This Field is required"),
    manufacturer: Yup.string().required("This Field is requiredy"),
    model: Yup.string().required("This Field is required"),
    Machine_Type: Yup.string().required("This Field is required"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

    const [open, setOpen] = React.useState(false);

    const onSubmit=()=>{
      console.log("submited")
      setOpen(true);
      setShow(false);
    }

    const handleClose = () => setShow(false);

  return (
    <div>
      { (
            <MachineModal
            open={open}
            setOpen={setOpen}
            handleC={ handleClose}
            formdata={formdata}
            setFormdata={setFormdata}
            />
        )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Machine</Modal.Title>
        </Modal.Header>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
        <div className="col-md-12 col-sm-12">
          <div className="ip-box form-bg ">
            <div className="row">
              <div className="col-md-12">
                <label className=""> Machine Reference Name</label>
                <input    value={formdata.refName} {...register("refName")}
                 className={`in-field ${
                  errors.refName ? "is-invalid" : ""}`} required name="refName"
                   onChange={(e)=>handleFormChange(e)}/>
              </div>

              <div className="col-md-12">
                <label className=""> Manufacturer</label>
                <input  value={formdata.manufacturer}   {...register("manufacturer")}
                className={`in-field ${
                  errors.manufacturer ? "is-invalid" : ""}`} required name="manufacturer" onChange={(e)=>handleFormChange(e)} />
              </div>

              <div className="col-md-12">
                <label className=""> Model</label>
                <input    {...register("model")} value={formdata.model}
                className={`in-field ${
                  errors.model ? "is-invalid" : ""}`} required 
                    name="model"  onChange={(e)=>handleFormChange(e)}/>
              </div>

              <div className="col-md-12 mb-4 ">
                 <label className="form-label">Machine_Type</label>
                 <select  {...register("Machine_Type")} value={formdata.Machine_Type}
                    className={`ip-select ${
                  errors.Machine_Type ? "is-invalid" : ""}`} required
                  name="Machine_Type" onChange={(e)=>handleFormChange(e)}>
                    {machinetypes.map((value,key)=>{
                      return(
                        <>
                          <option value={value}>{value}</option>
                        </>
                      )
                    })}
                  </select>
              </div>
            </div>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" type='submit'>
            Save 
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
