import React, { Component } from 'react';
import Card from './Card/Card'
import './App.css'
import Modal from './Modal/Modal'
class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    number: '',
    emailAdress: '',
    date: '',
    showModal: false,
    cards: JSON.parse(localStorage.getItem('cards')) || [],
    edit: false,
    id: '',
  }

  

  toggleModal = () => {
    this.setState(prev => ({
      showModal: !prev.showModal,
    }));
  }
    createObj = (e) => {
      e.preventDefault();
      if(!this.state.edit){
      let item = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        number: this.state.number,
        emailAdress: this.state.emailAdress,
        date: this.state.date,
        id: Date.now(),
      }
      this.setState(prevState => ({
        firstName: '',
        lastName: '',
        number: '',
        emailAdress: '',
        date: '',
        cards: [item,...prevState.cards],
      })) 
      let result = JSON.parse(localStorage.getItem('cards'));
      result.push(item);
      localStorage.setItem('cards', JSON.stringify(result));
      this.toggleModal();
    } else {
      this.setState({
       cards: this.state.cards.map(el => el.id === this.state.id ? {...el, firstName: this.state.firstName, lastName: this.state.lastName, number: this.state.number, emailAdress: this.state.emailAdress, date: this.state.date} : el),
       firstName: '',
       lastName: '',
       number: '',
       emailAdress: '',
       date: '',
       edit: false
    })
     this.toggleModal();
    }
  }
  
    deletLi = e => {
      let id = +e.target.dataset.id;
      console.log(id);
      let result = JSON.parse(localStorage.getItem('cards'));
      let filtResult = result.filter(el => el.id !== id);
      localStorage.setItem('cards', JSON.stringify(filtResult));
      this.setState({
        cards: this.state.cards.filter(el => el.id !== id)
      })
    }

    edit = e => {
      this.toggleModal();
      let id = e.target.dataset.id;
      console.log(id);
      let obj = this.state.cards.find (el => el.id === +id);
      this.setState({
        edit: true,
        firstName: obj.firstName,
        lastName: obj.lastName,
        number: obj.number,
        emailAdress: obj.emailAdress,
        date: obj.date,
        id: obj.id,
      })
    } 

    handlerChange = (evt) => {
      let value = evt.target.value;
      let name = evt.target.name;   
      this.setState({
        [name]: value,
      })
    }

  

  render() {
    const {firstName, lastName, number, emailAdress, date, showModal,cards} = this.state;
    return (
      <div>
        {showModal && <Modal toggleModal = {this.toggleModal} firstName={firstName} lastName={lastName} number={number} emailAdress={emailAdress} date={date} createObj={this.createObj} handlerChange={this.handlerChange}/>}
        <div className="info">
        <button className="add" onClick={this.toggleModal}>Show Modal</button>
        {cards.map(el => <div className="carrd" key={el.number}>  
          <h3 className="fname">{el.firstName} {el.lastName}</h3>
          <p className="phone">{el.number}</p>
          <p className="adress">{el.emailAdress}</p>
          <span className="closing" onClick={this.deletLi} data-id={el.id}>X</span>
          <span className="table" onClick={this.edit} data-id={el.id}>&#9998;</span>
          </div>
         )}
        </div>
        
      </div>
    );
  }


}


export default App;