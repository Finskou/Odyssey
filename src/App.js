import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from "./Home";
import History from "./History";


class App extends Component {
  render() {
    return (
      <div className="App">
      <div class="container">
        <header className="App-header">
        </header>
        <div class="bodyContainer">
          <NavLink exact to="/" style={{color: 'white', fontSize: 20, textDecoration: 'none'}} activeClassName="selected" activeStyle={{
            fontWeight: 'bold',
            color: 'orange'
          }}> Homepage </NavLink>                               
          <NavLink exact to="/our-story" style={{color: 'white', fontSize:20, textDecoration: 'none'}} activeClassName="selected" activeStyle={{
            fontWeight: 'bold',
            color: 'orange'
          }}> Our story </NavLink>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/our-story" component={History} />
          </Switch>
        </div>
       </div>
      </div>
    );
  }
}

export default App;
