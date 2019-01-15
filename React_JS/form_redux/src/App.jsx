import React, { Component } from 'react'
import './App.css'
import trash from './trash.png'
import uuidv4 from 'uuid/v4'
import Modal from './Modal/Modal'
import { text } from './redux/action/textAction'
import { connect } from 'react-redux'
import { tasks } from './redux/action/tasksAction'


class App extends Component {

  state = {
    // text: '',
    password: '',
    tasks: [],
    showModal: false, 
    edit: false,
  }


  
  // handlerChange = (evt) => { // Універсальна функція для інпутів, коли шось вводиш, щоб та інформація записувалася в state
  //   let value = evt.target.value;
  //   let name = evt.target.name;   
  //   this.setState({
  //     [name]: value,
  //   })
  // }

  
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

  formSubmit = (e) =>{
    e.preventDefault();
    this.props.createTasks(this.props.textValue);
  }

  // <form action="" onSubmit={this.props.createTasks(this.props.textValue)} className="form"></form>

  // passwordChange = (evt) => {
  //   let value = evt.target.value;
  //   this.setState({
  //     password: value,
  //   })
  // }
  render() {
    console.log(this.props);
    const {tasks, showModal} = this.state;
    return (
      <div className="App">
      {/* {showModal ? <Modal/> : null} // 1 Варіант */}
    {showModal && <Modal toggleModal = {this.toggleModal}/>}
          <form action="" onSubmit={this.formSubmit} className="form">
          <input type="text" placeholder="Name" name="text" onChange={this.props.text} className="text" value={this.props.textValue}/>
          {/* <input type="password" className="text" name="password" onChange={this.handlerChange} value={this.state.password} placeholder="Password"/> */}
          <input type="submit" value="add" className="add"/>
        </form>
        <ul className="list">
         {this.props.tasks.map(el => <li key={el.id} id={el.id} onClickCapture={this.toggleComplete} className={el.complete ? 'list__item done' : 'list__item'}>{el.text}<img src={trash} alt="Delete-icon" className="delete" onClick={this.deletLi} data-id ={el.id}/></li>)}
        </ul>
        <button onClick={this.toggleModal}>Show Modal</button>
      </div>
    );
  }
}

function mapStateToProps (state){ // Ця функція звертається до state
  return {
    textValue: state.text,
    tasks: state.tasks
  }
}

function mapDispatchToProps (dispatch){
  return {
   text: function(e){
    dispatch(text(e))
   },
   createTasks: function(value){
     dispatch(tasks(value))
   }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);