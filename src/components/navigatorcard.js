// navigator
import React, { Component } from 'react';
// import { Router, browserHistory, Route, Link } from 'react-router';

class NavigatorCard extends Component {

  // constructor(props, context) {
  //   super(props, context);
  // }

  render() {
    return (
      <div className="card">
        <h4>window.navigator: ...</h4>
        <div className="card-content">
          <ol>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
        <h4>Description: ...</h4>
        <h4>Solutions: ...</h4>
      </div>
    )
  }
}

export default NavigatorCard;
