import React from 'react'
import Form from './Form'

export default function HeadForm() {
  return (
    <div>
       <div className='row mt-1'>
        <h4 className="form-title">Magod Laser: Daily Production Report</h4>
        <hr className="horizontal-line" />
       </div>
       <div>
        <Form/>
       </div>
    </div>
  )
}
