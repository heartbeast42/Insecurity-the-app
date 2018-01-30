import React, { Component } from 'react';
import Navbar from './navbar.js';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>

        <div className="App-header">
          <div className="titleSpacer"></div>
          <h1>Insecurity the app</h1>
          <div></div>
        </div>

      </div>

    )
  }
}

export default Header
