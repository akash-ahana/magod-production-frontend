import React from 'react'
import TreeView from "react-treeview";
import "react-treeview/react-treeview.css";
import Iframe from '../Iframe';

export default function ByCustomer() {

  const dataSource = [
    {
       type: "Customer",
       collapsed: false, 
       people: 
    [ 
      { 
      name: "Laser11",
      one: "Process 1",
      two: "Process 2",
      three: "Process 3",
      collapsed: false,
      },
       {
       name: "Laser12",
       one: "Process 4", 
       two: "Process 5",
       three: "Process 6", 
       collapsed: false,
      },
      { name: "Laser13", 
       one: "Process 7",
       two: "Process 8",
       three: "Process 9",
       collapsed: false,
      },
      {
       name: "Laser14",
       one: "Process 10",
       two: "Process 11",
       three: "Process 12", 
       collapsed: false,
      }, 
      ],
    },
    ];

  return (
    <div className="d-flex" style={{ height: "323px"}}>
    <div className=""  style={{ height: "323px", width:'330px',overflowX:'scroll',overflowY:'scroll'}}>
      {dataSource.map((node, i) => {
        const type = node.type;
        const label = <span className="node">{type}</span>;
        return (
          <TreeView
            key={type + "|" + i}
            nodeLabel={label}
            defaultCollapsed={true}
          >
            {node.people.map((person) => {
              const label2 = <span className="node">{person.name}</span>;
              return (
                <TreeView
                  nodeLabel={label2}
                  key={person.name}
                  defaultCollapsed={true}
                >
                  <div className="info">{person.one}</div>
                  <div className="info">{person.two}</div>
                  <div className="info">{person.three}</div>
                </TreeView>
              );
            })}
          </TreeView>
        );
      })}
    </div>
    <div>
      <Iframe/>
    </div>
  </div>
  )
}
