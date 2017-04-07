import React, { Component } from 'react';
import profile from './profile.jpg';
import 'font-awesome/css/font-awesome.css'

import ExternalLinks from './components/ExternalLinks';
import GithubShowcase from './components/GithubShowcase';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={profile} className="App-picture" alt="that's me that is" />
          <h2>Hi, I'm Sean</h2>
        </div>
        <div className="App-intro">
          <p>
            I'm a Software Engineer in Manchester, UK.
          </p>
          <p>
            I work mainly in Ruby but have a wide variety of interests, from
            Javascript to DevOps.
          </p>
          <ExternalLinks />
          <GithubShowcase />
        </div>
      </div>
    );
  }
}

export default App;
