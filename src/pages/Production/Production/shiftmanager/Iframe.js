
import React, {useState} from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import PartsList from '../ScheduleList/Components/PartsList';
import TabData from './components/TabData';
// import Popup from './components/Popup';

function Iframe() {
    const [key, setKey] = useState("");

  return (
    <div style={{marginLeft: '637px'}}>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 mt-3 tab_font"
    >
      <Tab eventKey="Programs Completed" title="Programs Completed">
      <TabData/>
      </Tab>

      <Tab eventKey="Programs Processing" title="Programs Processing">
      <TabData/>
      </Tab>

      <Tab eventKey="Machine Log" title="Machine Log">
      <TabData/>
      </Tab>

      <Tab eventKey="Production Task List" title="Production Task List">
      <TabData/>
      </Tab>

      <Tab eventKey="Shift Report" title="Shift Report">
      <TabData/>
      </Tab>
    </Tabs>
    </div>
  )
}

export default Iframe
