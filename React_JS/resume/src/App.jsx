import React, { Component } from 'react';
// import logo from './logo.svg';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation/>
      <Route render={({location}) =>(
              <TransitionGroup>
              <CSSTransition key={location.key} timeout={1000} classNames="fade">
                <Switch location={location}>
                <Route exact path="/" render={() => <Home/>}/>
                <Route path="/projects" render={() => <Projects/>}/>
                <Route path="/skills" render={() => <Skills/>}/>
              </Switch>
              </CSSTransition>
              </TransitionGroup>
      )} />
      </div>
    );
  }
}

export default App;
