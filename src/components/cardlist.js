import React, { Component } from 'react';
// import { Router, browserHistory, Route, Link } from 'react-router';
// import Card from './component.card.js';
import BrowserHistoryCard from './browserhistorycard.js';
import NavigatorCard from './navigatorcard.js';
import HTTPinterceptCard from './httpinterceptcard.js';
import LocationCard from './locationcard.js';

class CardList extends Component {

  // constructor(props, context) {
  //   super(props, context);
  // }

  render() {
    return (
      // for (var i = 0; i < array.length; i++) {
      //   array[i]
      //   somthing somthing somthing darkside
      //   somthing somthing somthing display <Card/>
      // }
      <div className="cardList" >
        <LocationCard/>
        <NavigatorCard/>
        {/* <BrowserHistoryCard/> */}
      </div>
    )
  }
}

export default CardList;
