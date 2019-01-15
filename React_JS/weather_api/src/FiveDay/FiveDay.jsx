import React, { Component } from 'react';
// import Slider from "react-slick";
// import Loader from 'react-loader-spinner';
// import styles from './FiveDay.css';
import axios from 'axios';
// import img from '../backround.jpg';
import moment from 'moment';
import 'moment/locale/ru';
import MenuFive from '../MenuFiveDay/MenuFiveDay'
import {Switch, Route} from 'react-router-dom'
import WeatherForFiveDay from './WeatherForFiveDay'
import Chart from '../Chart/Chart';
// import ChartComponent from 'react-chartjs-2';


class FiveDay extends Component {

  state = {
    data: [],
    isLoading: true,
    array: [],
  }

  // console.log(data)
  gete = () =>{
    const array = [];
    // array = [];
  for(let i = 0; i < 5; i++) {
    let start = moment().add(i,'day').startOf('day').format('X');
    let end = moment().add(i, 'day').endOf('day').format('X'); 
    const oneDay = this.state.data.list.filter(el => el.dt > start && el.dt < end );
    array.push(oneDay);
    console.log(array);
    // console.log(oneDay)
  }
  this.setState({
    array: array,
  })
}

 


// console.log(gete())

componentDidMount(){
   this.fetchFiveDay();
 }

componentDidUpdate(prevp) {
   if(prevp.input !== this.props.input){
     this.fetchFiveDay();
   }
 }
  
fetchFiveDay = (e) =>{
  e && e.preventDefault()
  const query = this.props.input;
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?APPID=c60dd86e9ebff9397278842665cf0376&q=${query || 'Kiev'}&units=metric&lang=ru`)
  .then(response => {
    this.setState ({
      data: response.data,
      isLoading: false,
      // backGroundUrl: img,
    })
    console.log('weathereewe', response)
    // console.log('photos', response[1].data.hits)
  })
  .then(res => {
    this.gete()
  })
  .catch((error) => {
    if(error){
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?APPID=c60dd86e9ebff9397278842665cf0376&q=${query ||'Kiev'}&units=metric&lang=ru`)
      .then(response => {
        this.setState ({
          data: response.data,
          isLoading: false,
          // backGroundUrl: img,

        })
        console.log('weathereewe', response.data)        
      })
    }
    console.log(error);
  })
} 
render() {
  const{array,isLoading} = this.state;
  const chart = array.map(el => el.map(obj => obj.main.temp)).reduce((acc, el)=> acc.concat(el),[]);
  console.log('chart', chart);
  // console.log('array',array); 
  moment.locale('ru');
  console.log(moment.locale());
  return (
    <div>
      <MenuFive/>
      <Switch>
      <Route exact path="/fiveDay" render={() => <WeatherForFiveDay array={array} isLoading={isLoading}/>}/>
      <Route path="/fiveDay/chart" render={() => <Chart chart={chart}/>}/>
      </Switch>
    </div>
  )
}
}

export default FiveDay;
