import React,{useState} from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import MachineLog from './Tables/MachineLog';
import MachineUtilisation from './Tables/MachineUtilisation';
import ProductionTask from './Tables/ProductionTask';
import MachineTreeeView from './Tables/MachineTreeeView';

export default function TabForm() {
    
  const [key, setKey] = useState("machinelog");

  return (
    <>
     <div className="d-flex">
    <div className="box01 mt-1">
        <MachineTreeeView/>
    </div>
    <div style={{marginLeft:'17px'}}>
      <div>
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 mt-3 tab_font"
        >
        <Tab eventKey="machinelog" title="Machine Log">
            <MachineLog/>
        </Tab>

        <Tab eventKey="machine utilisation summary" title="Machine Utilisation Summary">
          <MachineUtilisation/>
        </Tab>

        <Tab eventKey="production task summary" title="Production Task Summary">
            <ProductionTask/>
        </Tab>

        </Tabs>
       </div>
    </div>
    </div>
   </>
  )
}
