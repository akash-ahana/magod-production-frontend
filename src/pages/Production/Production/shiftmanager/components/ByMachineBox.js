import axios from "axios";
import React,{useState , useEffect} from "react";
import TreeView from "react-treeview";
import "react-treeview/react-treeview.css";
// import ProgramCompletedData from "./ProgramCompletedData";
import Iframe from "../Iframe";

export default function ByMachineBox() {

  const [machineProcessData, setMachineProcessData] = useState([])
  const [machineProgramesCompleted, setMachineProgramesCompleted] = useState([])
  const [machineProgramesProcessing, setmachineProgramesProcessing] = useState([])

  useEffect(() => {
      axios.get('http://172.16.20.61:5000/shiftManagerProfile/profileListMachinesTaskNo')
          .then((response) => {
              setMachineProcessData(response.data)
          })
  }, [])

  const taskNoOnClick = (Machine, TaskNo) => {
    console.log('Task No on Click is ' , Machine , TaskNo)
  }

  const MachineOnClick = (Machine) => {
    console.log(' Machine Selected is ' , Machine)
    axios.post('http://172.16.20.61:5000/shiftManagerProfile/profileListMachinesProgramesCompleted' , {MachineName : Machine})
          .then((response) => {
            console.log(response.data)
            setMachineProgramesCompleted(response.data)
          })

          axios.post('http://172.16.20.61:5000/shiftManagerProfile/profileListMachinesProgramesProcessing' , {MachineName : Machine})
          .then((response) => {
            console.log(response.data)
            setmachineProgramesProcessing(response.data)
          })
  }


  const dataSource = [
      {
          type: "Machines",
          collapsed: false,

          serverData: machineProcessData,
      },
  ];

  return (
    <div className="d-flex">
        <div>
            <div className="" style={{ height: "323px", overflowY: "scroll",overflowX:'scroll',width:'330px'}}>   
                {dataSource.map((node, i) => {
                    const type = node.type;
                    const label = <span className="node">{type}</span>;
                    return (
                        <TreeView
                            key={type + "|" + i}
                           nodeLabel={label}
                            defaultCollapsed={true} >

                            {node.serverData.map((data) => {
                                const label2 = <span onClick={() => MachineOnClick(data.MachineName)}className="node">{data.MachineName}</span>;
                                
                                return (
                                    <TreeView
                                        nodeLabel={label2}
                                        key={data.name }
                                        defaultCollapsed={true}
                                    >
                                        
                                        {data.process.map((value) => {
                                            return (
                                                <>
                                              
                                                <div style={{fontSize:'10px'}} onClick={() => taskNoOnClick(data.MachineName, value)}>
                                             
                                             {value.PStatus==="Completed" ? (
                                                <span className="completed" style={{backgroundColor:'#afbfa1'}}>{value.TaskNo} / {value.Mtrl_Code} / {value.NCProgramNo} / {value.PStatus}</span> 
                                             ):<span className="node">{value.TaskNo} / {value.Mtrl_Code} / {value.NCProgramNo} / {value.PStatus}</span> 
                                                   
                                             }
                                                </div>
                
                                                </>
                                            )
                                        })}  
                                     
                                    </TreeView>);
                            })}
                        </TreeView>
                    );
                })}



            </div>
            
        </div>   
            <div>
            <Iframe machineProgramesCompleted = {machineProgramesCompleted} 
                    machineProgramesProcessing= {machineProgramesProcessing}/>
            </div>
        </div>
  );
}
