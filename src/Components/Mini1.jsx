import React, { useState } from 'react'
import svgg from '../assets/react.svg'
import ConfirmModel from './ConfirmModel';

function Mini1() {
    const [open,setOpen] = useState(false);
  return (
    <div>
        <h2 style={{textAlign:"center"}}>Mini Project</h2>
        <img src={svgg} onClick={()=>setOpen(true)}></img>
        {open&&<ConfirmModel value={svgg} close={()=>setOpen(false)}/>}
    </div>
  )
}

export default Mini1