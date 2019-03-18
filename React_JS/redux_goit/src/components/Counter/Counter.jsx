import React, { Component } from 'react';
import {plus, minus, reset} from '../redux/Actions/CounterAction';
import { connect } from 'react-redux';
import './Counter.css';

class Counter extends Component {
  render() {
    return (
      <div>

        <p>{this.props.counter}</p>
        <button onClick={() => this.props.pluse(1)}>PLUS</button>
        <button onClick={() => this.props.minus(1)}>MINUS</button>
        <button onClick={this.props.reload}>RELOAD</button>
        
      </div>
    );
  }
}

function mapStateToProps (state){ // Ця функція звертається до state
  return {
    counter: state.counter,
  }
}

function mapDispatchToProps (dispatch){
  return {
   pluse: function(number){
    dispatch(plus(number))
   },
   minus: function(number){
     dispatch(minus(number))
   },
   reload: function(){
     dispatch(reset())
   },
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Counter);