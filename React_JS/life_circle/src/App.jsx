import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    news: [],
  }

  update = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => this.getInfo(data))
    .catch(err => this.setState({
      news: false,
    }))
  }

  componentDidMount(){
    this.update();
  }

  getInfo(info){
    let resinfo = info.slice(0,10);
    this.setState({
      news: resinfo.map(el => ({...el, newsfull: false}))
    })
  }

  toggleComplete = (e) => {
    let id = e.target.id; 
    this.setState({
      news: this.state.news.map(el => el.id === +id ? {...el, newsfull: !el.newsfull} : el)
    })
  }

  render() {
    const {news} = this.state;
    return (
      <div className="App">
        <h2>The Guardian News</h2>
        <button className="refresh" onClick={this.update}>Refresh</button>
        <ul className="new">
          {this.state.news ? news.map(el => <li className="news" key={el.id}><span id={el.id} className={el.newsfull ? 'bottom top' : 'bottom'} onClick={this.toggleComplete}>&or;</span>{el.title}{el.newsfull ? <p>{el.body}</p> : null}</li>) : <li className="error">Sorry, we couldn't find news for you. Please try again later.</li>}
        </ul>
      </div>
    );
  }
}

export default App;
