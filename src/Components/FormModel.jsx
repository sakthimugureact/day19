import React from 'react'
import ReactDOM from 'react-dom'

function FormModel({message,close}) {
    const formodel = document.getElementById('formmodel');
    console.log(message);
  return ReactDOM.createPortal(
    <div>
        <h1>{message}</h1>
        <button onClick={close}>Close</button>
    </div>,formodel
  )
}

export default FormModel