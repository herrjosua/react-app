import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Content</h2>
        <p>The content text!!!</p>
      </div>
    );
  }
}

export default App;
