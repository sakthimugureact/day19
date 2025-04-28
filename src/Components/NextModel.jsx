import React from 'react'
import ReactDOM from 'react-dom'
function NextModel({close}) {
    const nest = document.getElementById("nested");
  return ReactDOM.createPortal(
    <div>
        <h1 style={{textAlign:"center"}}>Nested Model</h1>
        <button onClick={close}>Close</button>
    </div>,nest
  )
}

export default NextModel