import React from 'react';
import ReactDOM from 'react-dom'

export default function Modal() {
  return ReactDOM.createPortal(
    <div>
      <h1>Hi from Modal!</h1>
    </div>,
    document.getElementById("modal-root")
  )
}
