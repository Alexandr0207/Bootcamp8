import React, { Component } from 'react';
import stt from './App.css';
import Card from './Card/Card';
// import Button from './Button/Button'


class App extends Component {

  state = {
    template: [],
    properti: [],
  }

  componentDidMount(){
    fetch('http://demo4452328.mockable.io/templates')
    .then(res => res.json())
    .then(data => this.newTemplate(data))
    fetch('http://demo4452328.mockable.io/properties')
    .then(res => res.json())
    .then(data => this.newProperty(data.data))
  }

  newTemplate = (data) => {
    this.setState({
      template: data,
    })
  }

  newProperty = (data) => {
    this.setState({
      properti: data,
    })
  }

  render() {
    const {properti} = this.state;
    return (
      <div className={stt.App}>
        {properti.map( el => <Card template={this.state.template} key={el.id} image={el.images[0]} full_address={el.full_address} area={el.area} price={el.price}/>)}
      </div>
    );
  }
}

export default App;
