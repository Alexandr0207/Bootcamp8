import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Modal from './Modal/Modal'
import Order from './Order/Order'
import Registration from './Registration/Registration'

class App extends Component {
  constructor(){
  super();
  this.state = {
    registration: false,
    order: false,
  }
  this.showModal = this.showModal.bind(this)
  }
  showModal(e) {
    const id = e.target.id;
    this.setState( prev => ({
      [id]: !prev[id],
    }))
  }
  
  render() {
    return (
      <div className="App">
        {this.state.order && <Order close={this.showModal} id='order'/>}
        {this.state.registration && <Registration close={this.showModal} id='registration'/>}
        <button className="btn" id='registration' onClick={this.showModal}>Registration</button>
        <button className="btn" id='order' onClick={this.showModal}>Order</button>        
        {/* <Modal/>
        <Registration/> */}
      </div>
    );
  }
}

export default App;
