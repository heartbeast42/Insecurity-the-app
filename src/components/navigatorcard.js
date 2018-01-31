// navigator
import React, { Component } from 'react';
// import { Router, browserHistory, Route, Link } from 'react-router';

class NavigatorCard extends Component {

  state = {
    memory: navigator.deviceMemory,
    platform: navigator.platform,
    charging: null,
    battLvl: null,
    networkType: navigator.connection.effectiveType,
    networkSpeed: navigator.connection.downlink,
  }

  componentDidMount() {
    let context = this
    navigator.getBattery()
    .then(function(data) {
      console.log(data, data.charging);
      context.setState({charging: data.charging})
      context.setState({battLvl: data.level})
    })
  }

  render() {
    return (
      <div className="card">
        <h4>System information</h4>
        <div className="card-content">
          <ul>
            <li>Memory: {this.state.memory}</li>
            <li>Platform: {this.state.platform}</li>
            <li>Battery:
              {this.state.charging ? " Charging " : " Not Charging "}
              {this.state.battLvl * 100}%

            </li>
            {/* <li>Browser: {this.state.browser}</li> */}
            <li>Network type: {this.state.networkType}</li>
            <li>Network speed: {this.state.networkSpeed}</li>
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
