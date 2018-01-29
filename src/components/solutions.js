// genaric card
import React, { Component } from 'react';
import Navbar from './navbar.js';
// import { Router, browserHistory, Route, Link } from 'react-router';

class Solutions extends Component {

  // constructor(props, context) {
  //   super(props, context);
  // }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <main className="about-page">
          {/* that thar's the header */}
          <div className="App-header">
            <div className="titleSpacer"></div>
            <h1>Insecurity the app</h1>
            <div></div>
          </div>

          <img className="about-img" alt="" src="../img/sec.jpg" />
          <h3> About this app </h3>
          <p>Please note that this app is in alpha with more features to come</p>
          <p> </p>
        </main>
      </div>
    )
  }
}

export default Solutions;
