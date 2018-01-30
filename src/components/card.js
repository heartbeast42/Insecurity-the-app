// genaric card
import React, { Component } from 'react';
import { Link } from 'react-router';

// import { Router, browserHistory, Route, Link } from 'react-router';

class Card extends Component {

  // constructor(props, context) {
  //   super(props, context);
  // }

  render() {
    return (
      <div className="card" >
        <div className="card-content">
          <h4>More is yet to come ...</h4>

          <h3>If you would like to know more about this project click the link below</h3>
          <button><h1><Link to="/about">About this app</Link></h1></button>

        </div>
      </div>
    )
  }
}

export default Card;
