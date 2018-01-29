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
        <h4>System information</h4>
        <div className="card-content">
          <ul>
            <li>Memory: 8gb</li>
            <li>Platform: MacIntel</li>
            <li>Browser: Chrome 63</li>
            <li>Battery: 98%</li>
            <li>Network Type: 4g</li>
            <li>Network Down Speed: 6.75</li>
            <li>Projected Home address: 1644 Platte St, Denver, CO 80202</li>
          </ul>
        </div>
        {/* <h4>Description: ...</h4>
        <h4>Solutions: ...</h4> */}
      </div>
    )
  }
}

export default NavigatorCard;
