import React from 'react'
// import Popup from './components/Popup'
import Forms from './Forms'
import Iframe from './Iframe'
// import ProgramPath2 from './programpath/ProgramPath2'
import TaskBar from './TaskBar'

function ShiftManager() { 
  return (
    <div>
      <TaskBar/>
      <Forms/>
      <Iframe/>
      {/* <Popup/> */}
      {/* <ProgramPath2/> */}
    </div>
  )
}

export default ShiftManager
