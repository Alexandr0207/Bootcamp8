import React from 'react';
import './Modal.css'

const Modal = (props, id) => {
  return (
    <div className="overlay" id={props.id} onClick={props.close}>
      <div className="modal">
       {props.children} 
      </div>
    </div>
  );
};

export default Modal;