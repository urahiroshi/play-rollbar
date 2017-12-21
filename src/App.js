import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Playground for Rollbar</h1>
        </header>
        <p className="App-intro">
          Release={process.env.REACT_APP_RELEASE || 'Development'}
        </p>
        <button onClick={() => { }}>Fixed Error !</button>
        <button onClick={() => { throw new Error('piyo'); }}>New Error !</button>
      </div>
    );
  }
}

export default App;
