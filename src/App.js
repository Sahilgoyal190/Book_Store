import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Books from './component/Books'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Book Store</h1>
        </header>
       <Books/>
      </div>
    );
  }
}

export default App;
