import React from 'react';
import './Modal.css';
const Modal = ({toggleModal}) => {
  return (
    <div className="owerlay" onClickCapture={toggleModal}>
      <div className="modal" onClick= {toggleModal}>
      <span className="close" onClick= {toggleModal}>X</span>
      </div>
    </div>
  );
};
export default Modal;