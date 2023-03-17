import axios from "axios";
import React,{useState , useEffect} from "react";
import TreeView from "react-treeview";
import "react-treeview/react-treeview.css";

export default function ByMachineBox() {

  const [apiData, setApiData] = useState([]);

  useEffect(()=>{
    axios.get("http://172.16.20.61:5000/productionSetup/getallmachines")
    .then((getData)=>{
      setApiData(getData.data);
    })
  },[])

    // const dataSource = [
    // {
    //    type: "Machines",
    //    collapsed: false, 
    //    people: 
    // [ 
    //   { 
    //   name: "Laser11",
    //   one: "Process 1",
    //   two: "Process 2",
    //   three: "Process 3",
    //   collapsed: false,
    //   },
    //    {
    //    name: "Laser12",
    //    one: "Process 4", 
    //    two: "Process 5",
    //    three: "Process 6", 
    //    collapsed: false,
    //   },
    //   { name: "Laser13", 
    //    one: "Process 7",
    //    two: "Process 8",
    //    three: "Process 9",
    //    collapsed: false,
    //   },
    //   {
    //    name: "Laser14",
    //    one: "Process 10",
    //    two: "Process 11",
    //    three: "Process 12", 
    //    collapsed: false,
    //   }, 
    //   ],
    // },
    // ];
    

  return (
    <div className="MainDiv" style={{ height: "323px", width:'650px',overflowX:'scroll',overflowY:'scroll'}}>
      <div className="container">
        {apiData.map((node, i) => {
          const type = node.refName;
          const label = <span className="node">{type}</span>;
          return (
            <TreeView
              key={type + "|" + i}
              nodeLabel={label}
              defaultCollapsed={true}
            >
              {/* {node.people.map((person) => {
                const label2 = <span className="node">{person.refName}</span>;
                return (
                  <TreeView
                    nodeLabel={label2}
                    key={person.refName}
                    defaultCollapsed={true}
                  >
                    <div className="info">{person.one}</div>
                    <div className="info">{person.two}</div>
                    <div className="info">{person.three}</div>
                  </TreeView>
                );
              })} */}
            </TreeView>
          );
        })}
      </div>
    </div>
  );
}
