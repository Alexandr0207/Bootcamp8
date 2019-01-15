import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyMapComponent from './Maps/Maps';


class App extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }
  

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default App;
