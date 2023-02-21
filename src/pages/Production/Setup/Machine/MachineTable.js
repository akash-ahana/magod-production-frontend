import React, { useState } from 'react';
import Table from "react-bootstrap/Table";
import {useGlobalContext} from '../../../../Context/Context'

export default function MachineTable({selectedRowFn,selectedRow,getprocessdataList}) {  
  const {post, setPost,MachineTabledata} = useGlobalContext()
  
   React.useEffect(() => {
    MachineTabledata();
  }, []);

  
  return (
    <div className='row mt-1'>
    <div className='col-md-12 col-sm-12'>
     <div style={{height:"500px",overflowY: "scroll"}}>
     <Table bordered>
       <thead style={{textAlign:"center"}}>
         <tr>
           <th>Manufacturer</th>
           <th>Model</th>
           <th>Working</th>
         </tr>
       </thead>

{post.map((item,key)=>{
  return(
    <>
    {/* {console.log(selectedRow?.index)} */}
     <tbody className='tablebody'>
          <tr onClick={()=>selectedRowFn(item,key)} className={key===selectedRow?.index? 'selcted-row-clr':'' }  >
             <td>{item.manufacturer}</td>
             <td>{item.Model}</td>
             {
              <td>
                 <input className="form-check-input mt-2"
               type="checkbox"
               disabled
               value=""
               checked={item.Working===0 ? false : true}
               id="flexCheckDefault"/>
              </td>
             }
         </tr>
       </tbody>
    </>
  )
})}
 </Table>
     </div>
 </div>
</div>
  )
}
