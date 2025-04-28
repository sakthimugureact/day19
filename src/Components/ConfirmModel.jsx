import React from 'react'
import ReactDOM from 'react-dom'
function ConfirmModel({value,close}) {
    const show = document.getElementById('imageshow');
  return ReactDOM.createPortal(
    <>
    <div>
        <img src={value} onClick={close} width="50%" style={{display:"block",margin:"auto"}}></img>
    </div>
    </>,show
  )
}


export default ConfirmModel