import React, { useRef, useState } from 'react'
import FormModel from './FormModel';
import SuccessModel from './SuccessModel';

function Task8() {
    const val = useRef()
    const [value,setValue] = useState();
    console.log(value);
    const [open,setOpen] = useState(false)
    const [success,setSuccess] = useState(false)
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Task 8,9,12</h1>
            <input type='text' ref={val}/>
            <button onClick={()=>{
                setOpen(true)
                setValue(val.current.value)
            }}>Submit</button>
            <button onClick={()=>setSuccess(true)}>Success</button>
        {open&&<FormModel message={value} close={()=>setOpen(false)} />}
            {success&&<SuccessModel close={()=>setSuccess(false)}/>}
    </div>
  )
}

export default Task8