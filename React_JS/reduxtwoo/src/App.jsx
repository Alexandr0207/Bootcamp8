import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {connect } from 'react-redux';
// import axios from 'axios';
import {input} from './components/redux/actions/inputAction.js';
import { fetchData } from './components/redux/actions/FetchDataAction.js';
// import {loading} from './components/redux/actions/LoadingAction';


class App extends Component {

  componentDidMount() {
    this.props.fetchGet(this.props.input);
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

  getData = (e) => {
    e.preventDefault();
    this.props.fetchGet(this.props.input);
    // this.load();
  }

  
  render() {
    // console.log(this.getData());
    // console.log(this.props.data.main.temp);
    
    return (
      <div className="App">
      {!this.props.loading ? <p>Loading...</p> :
      <div>
      <form action=""  onSubmit={this.getData}>
            <input type="text" value={this.props.input} onChange={this.props.inputAction} placeholder="enter"/>
            <button>Search</button>
            </form>
            <ul>
              <li>Name: {this.props.data.name}</li>
              <li>id: {this.props.data.id}</li>
              <li>Temperature: {`${Math.round(this.props.data.main.temp)}°`}</li>
              <li>Pressure: {this.props.data.main.pressure} m/s</li>
            </ul> 
              </div>
            // <button onClick={this.props.load}>de</button>
            }
      </div>
    );
  }
}

function mapStateToProps (state){ // Ця функція звертається до state
  return {
    input: state.input,
    data: state.data.data,
    loading: state.data.loading
  }
}

function mapDispatchToProps (dispatch){
  return {
   inputAction: function(e){
    dispatch(input(e))
   },
   fetchGet: function(input){
     dispatch(fetchData(input))
   },
  //  load: function() {
  //    dispatch(loading())
  //  }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
