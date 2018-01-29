import React, { Component } from 'react';
// import { Router, browserHistory, Route, Link } from 'react-router';
import Card from './card.js';
import BrowserHistoryCard from './browserhistorycard.js';
import NavigatorCard from './navigatorcard.js';
// import HTTPinterceptCard from './httpinterceptcard.js';
import LocationCard from './locationcard.js';

class CardList extends Component {

  // constructor(props, context) {
  //   super(props, context);
  // }

  render() {
    return (
      <div className="cardList" >
        <LocationCard />
        <NavigatorCard />
        <Card />
      </div>
    )
  }
}

export default CardList;
