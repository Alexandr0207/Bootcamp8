import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { input } from './components/redux/Actions/inputAction';
import Counter from './components/Counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
          <input type="text" value={this.props.input} onChange={this.props.inputAction} placeholder='Enter REDUX'/>
          <Counter/>
      </div>
    );
  }
}

function mapStateToProps (state){ // Ця функція звертається до state
  return {
    input: state.input
  }
}

function mapDispatchToProps (dispatch){
  return {
   inputAction: function(e){
    dispatch(input(e))
   },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
