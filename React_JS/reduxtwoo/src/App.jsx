import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect } from 'react-redux';
// import axios from 'axios';
import {input} from './components/redux/actions/inputAction.js';
import { fetchData } from './components/redux/actions/FetchDataAction.js';


class App extends Component {

  componentDidMount() {
    this.props.fetchGet()
  }
  // console.log(this.props);
  // fetchData = (e) =>{
  //   e && e.preventDefault()
  //   const query = this.props.input;
  //   Promise.all([axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=c60dd86e9ebff9397278842665cf0376&q=${query || 'Kiev'}&units=metric`),axios.get(`https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&per_page=199&q=${query || 'Kiev'}`)])
  //   .then(response => {
  //     this.setState ({
  //     })
      
  //     console.log('weather', response[0])
  //     console.log('photos', response[1].data.hits)
  //   })
  //   .catch((error) => {
  //     if(error){
  //       (axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=c60dd86e9ebff9397278842665cf0376&q=${query || 'Kiev'}&units=metric`))
  //       .then(response => {
  //         this.setState ({
  //           data: response.data,
  //           isLoading: false,
  //           backGroundUrl: null,
  //           location: response.data.name,
  //           city: response.data.sys.country,
  //           input2: this.state.input,
  //         })
  //       })
        
  //     }
  //     console.log(error);
  //   })
  // } 

  render() {
    console.log(this.props.input);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
            <input type="text" value={this.props.input} onChange={this.props.inputAction} placeholder="enter"/>
        </header>
      </div>
    );
  }
}

function mapStateToProps (state){ // Ця функція звертається до state
  return {
    input: state.input,
    data: state.data
  }
}

function mapDispatchToProps (dispatch){
  return {
   inputAction: function(e){
    dispatch(input(e))
   },
   fetchGet: function(){
     dispatch(fetchData())
   }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
