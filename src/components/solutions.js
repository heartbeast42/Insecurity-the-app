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
          <h3> Some Solutions </h3>
          <p>Please note that this app is in alpha with more features to come</p>
          <p> This section contains several rescources for keeping your information secure/private and provides some secure alternatives too popular apps that may not reguard your information with the as much respect as we'd like. </p>

          <table>
            <tr>
              <td><h3>Item Name</h3></td>
              <td><h3>Decryption</h3></td>
            </tr>
            <tr>
              <td><h3>Item Name</h3></td>
              <td><h3>Decryption</h3></td>
            </tr>
          </table>

        </main>
      </div>
    )
  }
}

export default Solutions;
