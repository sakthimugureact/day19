import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import NextModel from './NextModel';

function Task5Model({onclose}) {
    const [opens,setOpens] = useState(false)
    const rooter = document.getElementById('task5root');
  return ReactDOM.createPortal(
    <div>
        <h1  onClick={onclose} style={{textAlign:"center"}}>Task 5 Model</h1>
        <button style={{display:"block",margin:"auto"}} onClick={()=>setOpens(true)}>Open Nested Model</button>   
        {opens&&<NextModel close={()=>setOpens(false)}/>}
    </div>,rooter
  )
}

export default Task5Model