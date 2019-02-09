import React, { Component } from 'react'
import './App.css'
import trash from './trash.png'
import uuidv4 from 'uuid/v4'
import Modal from './Modal/Modal'


class App extends Component {

  state = {
    text: '',
    password: '',
    tasks: [],
    showModal: false, 
    edit: false,
  }


  
  handlerChange = (evt) => { // Універсальна функція для інпутів, коли шось вводиш, щоб та інформація записувалася в state
    let value = evt.target.value;
    let name = evt.target.name;   
    this.setState({
      [name]: value,
    })
  }

  
  CreateObj = (e) => {
    e.preventDefault();
    if(!this.state.edit){
    const item = {
      id: uuidv4(),
      text: this.state.text,
      complete: false,
      edit: false,
    };
    this.setState(prevState => ({
      tasks: [item, ...prevState.tasks],
      text: '',
    }))}
  }

  

  toggleComplete = (e) => {
    let id = e.target.id; // Отримуєм доступ до id якогось точного елемента
    this.setState({
      tasks: this.state.tasks.map(el => el.id === id ? {...el, complete: !el.complete } : el)
    })
  }

  deletLi = e => {
    let id = e.target.dataset.id;
    this.setState({
      tasks: this.state.tasks.filter(el => el.id !==id)
    })
  }

  toggleModal = () => {
    this.setState(prev => ({
      showModal: !prev.showModal,
    }))
  }

  // passwordChange = (evt) => {
  //   let value = evt.target.value;
  //   this.setState({
  //     password: value,
  //   })
  // }

  render() {
    const {tasks, showModal} = this.state;
    return (
      <div className="App">
      {/* {showModal ? <Modal/> : null} // 1 Варіант */}
    {showModal && <Modal toggleModal = {this.toggleModal}/>}
          <form action="" onSubmit={this.CreateObj} className="form">
          <input type="text" placeholder="Name" name="text" onChange={this.handlerChange} className="text" value={this.state.text}/>
          {/* <input type="password" className="text" name="password" onChange={this.handlerChange} value={this.state.password} placeholder="Password"/> */}
          <input type="submit" value="add" className="add"/>
        </form>
        <ul className="list">
         {tasks.map(el => <li 
          className={el.complete ? 'list__item done' : 'list__item'}>{el.text}<img src={trash} alt="Delete-icon" className="delete" onClick={this.deletLi} data-id ={el.id}/></li>)}
        </ul>
        <button onClick={this.toggleModal}>Show Modal</button>
      </div>
    );
  }
}

export default App;