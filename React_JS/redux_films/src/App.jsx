import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchData} from './redux/action/filmsAction'
// import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';
import Input from './Input/Input';

class App extends Component {

  componentDidMount(){
    this.props.fetchData()
  }

  render() {
    return (
      <div className="App">
       {this.props.amount.map(el => <Card info={el}/>)}
       <Input/>
      </div>
    );
  }
}

function mapStateToProps (state){ // Ця функція звертається до state
  return {
    amount: state.films
  }
}

function mapDispatchToProps (dispatch){
  return {
   fetchData: function(){
    dispatch(fetchData())
   },
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(App);
