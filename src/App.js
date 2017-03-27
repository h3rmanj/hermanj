import React, { Component } from 'react';
import './App.css';
import facebook from './img/facebook-logo.png';
import soundcloud from './img/soundcloud-logo.png';
import github from './img/github-sign.png';
import steam from './img/steam.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Social">
          <a href="https://facebook.com/hermanj" target="_blank" className="Social-link">
            <img src={facebook} className="Social-icon" alt="facebook" />
          </a>
          <a href="https://soundcloud.com/herman-jensen" target="_blank" className="Social-link">
            <img src={soundcloud} className="Social-icon" alt="soundcloud" />
          </a>
          <a href="https://github.com/h3rmanj" target="_blank" className="Social-link">
            <img src={github} className="Social-icon" alt="github" />
          </a>
          <a href="http://steamcommunity.com/id/h3rmanj" target="_blank" className="Social-link">
            <img src={steam} className="Social-icon" alt="steam" />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
