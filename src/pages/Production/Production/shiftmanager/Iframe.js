
import React, {useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProgramCompletedData from './components/ProgramCompletedData';
// import PartsList from '../ScheduleList/Components/PartsList';
import TabData from './components/TabData';
// import MachineLogSideTable from './programpath/MachineLogSideTable';
import MachineLogTable from './programpath/MachineLogTable';
import ProductionTaskListTable from './programpath/ProductionTaskListTable';
// import Popup from './components/Popup';

function Iframe() {
    const [key, setKey] = useState("tabdata");

  return (
    <div style={{marginLeft: '637px'}}>
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

      <Tab eventKey="Shift Report" title="Shift Report" style={{textAlign:"center"}}>
      <h5>Page Under Production</h5>
      </Tab>
    </Tabs>
    </div>
  )
}

export default Iframe
