// genaric card
import React, { Component } from 'react';
import Navbar from './navbar.js';
// import { Router, browserHistory, Route, Link } from 'react-router';

class About extends Component {

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
          <p> Insecurity the app is intended to be a tool for learning about the importance of data security.  We all love to browse the internet and in the modern world sharing some data can enhance our expirences online although many people are still unconvenced that there is anything to worry about.  I believe that there should be easy, clear in the moment transparency and Insecurity the app seeks to make that information easily accessible to the lay person. </p>
        </main>
      </div>
    )
  }
}

export default About;
