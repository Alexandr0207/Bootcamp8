import React from 'react';
import './Modal.css'
const Modal = ({toggleModal, firstName, lastName, number, emailAdress, date, handlerChange, createObj}) => {
  return (
    <div>

    <div className="owerlay" onClickCapture={toggleModal}>
      <div className="modal" onClick= {toggleModal}>
      <form action="" className="inuts" onSubmit={createObj}>
      <h2>Create Info</h2>
      <input type="text" name="firstName" onChange={handlerChange} value={firstName} placeholder="Введите имя" required/>
      <input type="text" name="lastName" onChange={handlerChange} value={lastName} placeholder="Введите фамилию" required/>
      <input type="number" name="number" onChange={handlerChange} value={number} placeholder="Введите номер телефона" required/>
      <input type="email" name="emailAdress" onChange={handlerChange} value={emailAdress} placeholder="Введите Email" required/>
      <input type="date" name="date" onChange={handlerChange} value={date} placeholder="Введите дату вашего рождения" required/>
      <button className="save" >Save contact</button>
     </form>
      <span className="close" onClick={toggleModal}>X</span>
      </div>
    </div>

    </div>
  );
};

export default Modal;