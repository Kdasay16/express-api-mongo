import React, { Component } from 'react';
import headerImg from './paint.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Kayla Asay</h1>
          <img src={headerImg} className="App-logo" alt="headerImg" />
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    );
  }
}

export default App;
