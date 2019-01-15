import React, { Component } from 'react';
import {connect} from 'react-redux'
import {plus, minus, reload} from '../redux/action/CounterAction.js'
import './Counter.css'

class Counter extends Component {

  // state = {
  //   count: 0,
  // }

  // increment = () => {
  //   this.setState(prev => ({
  //     count: prev.count + 1,
  //   }))
  // }

  // decrement = () => {
  //   this.setState(prev => ({
  //     count: prev.count -1,
  //   }))
  // }

  // reset = () => {
  //   this.setState({
  //     count: 0,
  //   })
  // }

  numberUp = () => {
    this.props.plus(5);
    this.props.minus(5)
  }

  render() {
    // const {count} = this.state;
    console.log(this.props);
    return (
      <div className="container">
        <p>{this.props.count}</p>
        <div className="buttons">
        <button className="btn" onClick={() => this.props.minus(1)}>-</button>
        <button className="btn" onClick={this.props.reload}>reset</button>
        <button className="btn" onClick={() => this.props.plus(1)}>+</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state){ // Ця функція звертається до state
  return {
    count: state.count,
  }
}

function mapDispatchToProps (dispatch){
  return {
   plus: function(number){
    dispatch(plus(number))
   },
   minus: function(number){
     dispatch(minus(number))
   },
   reload: function(){
     dispatch(reload())
   }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);