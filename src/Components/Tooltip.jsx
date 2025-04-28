import React from 'react'
import ReactDOM from 'react-dom'
function Tooltip({leave}) {
    const tooltip = document.getElementById('tooltip')
  return ReactDOM.createPortal(
    <div>
        <h1 onMouseLeave={leave} className='tools'>Tooltip</h1>
    </div>,tooltip
  )
}


export default Tooltip