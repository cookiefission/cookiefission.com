import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello, I'm Sean</h2>
        </div>
        <div className="App-intro">
          <p>
            I'm a Software Engineer in Manchester, UK.
          </p>
          <p>
            I work mainly in Ruby but have a wide variety of interests, from
            Javascript to DevOps.
          </p>
          <a target='blank' href="https://github.com/cookiefission">
            <i className="fa fa-github fa-lg" />
          </a>
          <a target='blank' href="https://twitter.com/cookiefission">
            <i className="fa fa-twitter fa-lg" />
          </a>
          <a target='blank' href="https://blog.cookiefission.com">
            <i className="fa fa-medium fa-lg" />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
