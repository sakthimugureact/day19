import React from 'react'
import ReactDOM from 'react-dom'
function SuccessModel({close}) {
    const suc = document.getElementById('success');
  return ReactDOM.createPortal(
    <div>
        <h1>Successfull</h1>
        <button onClick={close}>Close</button>
    </div>,suc
  )
}

export default SuccessModel