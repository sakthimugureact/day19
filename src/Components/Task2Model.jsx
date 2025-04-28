import React from 'react'
import ReactDOM from 'react-dom'

function Task2Model({onclose}) {
    const roots = document.getElementById('task2root')
  return ReactDOM.createPortal(
    <div style={modalStyle}>
        <h1 style={{textAlign:"center"}}>Task 2 Model</h1>
        <button onClick={onclose}>Close</button>
    </div>,roots
  )
}
const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    padding: "20px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
    zIndex: 1000
   };
export default Task2Model