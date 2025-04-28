import React, { useState } from 'react'
import Task5Model from './Task5Model'

function Task3() {
    const [open,setOpen] = useState(false)
  return (
    <div>   
        <h1 style={{textAlign:"center"}}>Task 6,7</h1>
        <button style={{display:"block",margin:"auto"}} onClick={()=>setOpen(true)}>Open</button>
        {open&&<Task5Model onclose={()=>setOpen(false)}/>}
    </div>
  )
}

export default Task3