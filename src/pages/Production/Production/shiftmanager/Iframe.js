import React, {useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProgramCompletedData from './components/ProgramCompletedData';
import ByMachineBox from './components/ByMachineBox';
import TabData from './components/TabData';
import MachineLogTable from './programpath/MachineLogTable';
import ProductionTaskListTable from './programpath/ProductionTaskListTable';
import ByOperations from './components/ByOperations';
import ByCustomer from './components/ByCustomer';

function Iframe({isToggled, isClick, isCustomer}) {
    const [key, setKey] = useState("tabdata");

  return (
    <>
    <div className="d-flex">
    <div className="box01 mt-1">
      {isToggled && <ByMachineBox/>}
      {isClick && <ByOperations/>}
      {isCustomer && <ByCustomer/>}
    </div>
    <div style={{marginLeft: '50px'}}>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 mt-3 tab_font"
    >
      <Tab eventKey="tabdata" title="Programs Completed">
      <ProgramCompletedData/>
      </Tab>

      <Tab eventKey="Programs Processing" title="Programs Processing">
      <TabData/>
      </Tab>

      <Tab eventKey="Machine Log" title="Machine Log">
        <MachineLogTable/>
      </Tab>

      <Tab eventKey="Production Task List" title="Production Task List">
      <ProductionTaskListTable/>
      </Tab>

      <Tab eventKey="Shift Report" title="Shift Report">
      <ByMachineBox/>
      </Tab>
    </Tabs>
    </div>
    </div>
    </>
  )
}

export default Iframe
