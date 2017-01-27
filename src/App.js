import React, { Component } from 'react';
import logo from './logo.svg';
import 'font-awesome/css/font-awesome.css'

import IconLink from './links/IconLink';

import './App.css';

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
          <IconLink href='https://github.com/cookiefission' iconName='github'/>
          <IconLink href='https://twitter.com/cookiefission' iconName='twitter'/>
          <IconLink href='https://blog.cookiefission.com' iconName='medium'/>
        </div>
      </div>
    );
  }
}

export default App;
