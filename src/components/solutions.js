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
          <div className="App-header">
            <div className="titleSpacer"></div>
            <h1>Insecurity the app</h1>
            <div></div>
          </div>

          <h3> Some Solutions </h3>
          <p>Please note that this app is in alpha with more features to come. </p>
          <p> This section contains several resources for keeping your information secure/private and provides some secure alternatives too popular apps that may not reguard your information with the as much respect as we'd like. </p>

          <table>
            <tr>
              <th>Item Name</th>
              <th>Decryption</th>
            </tr>
            <tr>
              <td>
                <div>
                  <img alt="" src="./img/PureVPN.png" />
                </div>
              </td>
              <td><h4>VPN</h4></td>
            </tr>
            <tr>
              <td>
                <div>
                  <img alt="" src="./img/signal.png" />
                  <img alt="" src="./img/telegram.jpg" />
                </div>
              </td>
              <td><h4>Secure messangers</h4></td>
            </tr>
            <tr>
              <td>
                <div>
                  <img alt="" src="./img/spideroak.jpg" />
                </div>
              </td>
              <td><h4>Cloud</h4></td>
            </tr>

            <tr>
              <td>
                <div>
                  <img alt="" src="./img/duckduckgo.jpg" />
                </div>
              </td>
              <td><h4>Serach Engines</h4></td>
            </tr>
            <tr>
              <td>
                <div>
                  <img alt="" src="./img/brave.jpg" />
                </div>
              </td>
              <td><h4>Brave</h4></td>
            </tr>
          </table>

        </main>
      </div>
    )
  }
}

export default Solutions;
