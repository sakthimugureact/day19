import React, { useState } from 'react'
import Task2Model from './Task2Model'

function Task2() {
    const [open,setOpen] = useState(false)
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Task 2,3,4,5</h1>
        <button style={{display:"block",margin:"auto"}} onClick={()=>setOpen(true)}>Open</button>
        {open&&<Task2Model onclose={()=>setOpen(false)}/>}
    </div>
  )
}



export default Task2