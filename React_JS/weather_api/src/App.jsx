import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import moment from'moment';
import Header from './Header/Header';
import OneDay from './OneDay/OneDay';
import FavorLis from './FavorList/FavorList'
import style from './App.css';
import img from './backround.jpg';
import immd from './Dzhul.jpg'
// import immg from './Dzhul2.jpg'
import FiveDay from './FiveDay/FiveDay';
import Menu from './Menu/Menu';
import {Switch, Route} from 'react-router-dom'


class App extends Component {

  state = {
    input: "",
    geo: {},
    favorList: JSON.parse(localStorage.getItem('favorList')) || [],
    data: {},
    isLoading: true,
    validateInput: false,
    fetchError: false,
    backGroundUrl: '',
    date: '',
    location: '',
    city: '',
    id: '',
    input2: '',
    modal: false,
  }
 
  componentDidMount() {
    this.time();
    this.fetchData();
    // this.fetchFiveDay();
  }
  fetchData = (e) =>{
    e && e.preventDefault()
    const query = this.state.input;
    Promise.all([axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=c60dd86e9ebff9397278842665cf0376&q=${query || 'Kiev'}&units=metric`),axios.get(`https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&per_page=199&q=${query || 'Kiev'}`)])
    .then(response => {
      this.setState ({
        data: response[0].data,
        isLoading: false,
        backGroundUrl: response[1].data.hits[Math.floor(Math.random()* response[1].data.hits.length)].largeImageURL,
        location: response[0].data.name,
        city: response[0].data.sys.country,
        input2: this.state.input,
      })
      
      console.log('weather', response[0])
      console.log('photos', response[1].data.hits)
    })
    .catch((error) => {
      if(error){
        (axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=c60dd86e9ebff9397278842665cf0376&q=${query || 'Kiev'}&units=metric`))
        .then(response => {
          this.setState ({
            data: response.data,
            isLoading: false,
            backGroundUrl: query === 'Dzhulynka' ? immd : img,
            location: response.data.name,
            city: response.data.sys.country,
            input2: this.state.input,
          })
        })
        
      }
      console.log(error);
    })
  } 


    

  time = () =>{
    setInterval(() =>{
     let dateNow = moment().format('HH:mm:ss'); 
    //  console.log(dateNow)
     this.setState({
       date: dateNow,
     })
    },1000);
  }

  changedInput = (e) => {
    let value = e.target.value;
    this.setState({
      input: value,
    })
  }

  clickFavoriteList = async(e) => {
    let id = e.target.id;
    await this.setState({
      input: id,
    })
    this.fetchData()
    console.log('click');
  }

  favorListFunk = (e) => {
    if(this.state.input === ''){
      return
    }
    if(!this.state.favorList.includes(this.state.input)){
      let list = this.state.input;
    
    this.setState(prev => ({
      favorList: [...prev.favorList, list]
    }));
    let result = JSON.parse(localStorage.getItem('favorList')) || []
    result.push(list);
    localStorage.setItem('favorList', JSON.stringify(result));
  } else {
    alert('poka');
  }
  }

  // modalOn = () => {
  //   this.setState({
  //     modal: true,
  //   })
  // }

  
  deletLi = e =>{
    e.stopPropagation()
    console.log(e.target);
    let id = e.target.dataset.id;
    let result = JSON.parse(localStorage.getItem('favorList'));
    let filtResult = result.filter(el => el !== id);
    localStorage.setItem('favorList', JSON.stringify(filtResult));
    this.setState({
      favorList: filtResult,
    })
    console.log('dwaa');
  }
  
  render() {
    const {data, input, backGroundUrl, date, location, city,input2, favorList} = this.state;
    // console.log(backGroundUrl)
    // console.log(date)
    // console.log(this.state.backGroundUrl);
    // largeImageURL
    return (
      <div className={style.App} style={ { backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${backGroundUrl})` } }>
       {this.state.isLoading ? 
       <div className={style.load}><Loader type="Bars" color="#fff" height={80} width={80}/><p className={style.loading}>LOADING...</p></div> : 
       <div className={style.cde}>
       <Header data={this.state.data} key={data.id} query={input} changedInput={this.changedInput} fetchData={this.fetchData} date={date} location={location} city={city}/>
       <Menu/>
       <FavorLis favorList={favorList} clickFavoriteList={this.clickFavoriteList} deletLi={this.deletLi} favorListFunk={this.favorListFunk}/>
       <Switch>
       <Route exact path="/" render={() => <OneDay fetchData={this.fetchData} data={this.state.data} temp={data.main.temp} pressure={data.main.pressure} humidity={data.main.humidity} temp_min={data.main.temp_min} temp_max={data.main.temp_max} sunrise={data.sys.sunrise} sunset={data.sys.sunset} wind={data.wind.speed}>
       </OneDay>}/>
       <Route path="/fiveDay" render={() => <FiveDay data={this.state.data.list} input={input2} temp={data.list} pressure={data.list} humidity={data.list} temp_min={data.list} temp_max={data.list} wind={data.list}/>}/>
       </Switch>
       </div>}
      </div>
    );
  }
}
// 13b1da37395bfa8c04284479a5679914
export default App;
