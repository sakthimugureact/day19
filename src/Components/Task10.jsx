import React, { useState } from 'react'
import Tooltip from './Tooltip'

function Task10() {
    const [tool,setTool] = useState(false)
    console.log(tool);
    
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Task 10,11</h1>
        {tool&&<Tooltip leave={()=>setTool(false)}></Tooltip>}
        <h1 style={{textAlign:"center"}} onMouseEnter={()=>setTool(true)}>Tooltip Button</h1>
    </div>
  )
}

export default Task10