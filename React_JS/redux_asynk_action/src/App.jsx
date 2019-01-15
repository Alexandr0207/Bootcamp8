import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Counter from './Counter/Counter';
import {connect} from 'react-redux';
import {fetchData} from './redux/action/fetchAction'

class App extends Component {
  render() {
    return (
      <div className="App">
      <button onClick={this.props.fetchData}>add</button>
      </div>
    )
  }
}

// function mapStateToProps (state){ // Ця функція звертається до state
//   return {
//     amount: gallerycount()
//   }
// }

function mapDispatchToProps (dispatch){
  return {
   fetchData: function(){
    dispatch(fetchData())
   },
  }
}

export default connect(null, mapDispatchToProps)(App);
