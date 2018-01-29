import React, { Component } from 'react';
import { Router, browserHistory, Route } from 'react-router';
import './App.css';
import Navbar from './components/navbar.js';
import CardList from './components/cardlist.js';

// var pos = navigator
//   .geolocation
//   .getCurrentPosition(function(success, err, options){
//   console.log(success.coords)
//   return success.coords
// })

const Vulnerabilities = ({ title }) => (
  <div className="App">
    <Navbar/>
    <main>
      {/* that thar's the header */}
      <div className="App-header">
        <div className="titleSpacer"></div>
        <h1>Insecurity the app</h1>
        <div></div>
      </div>
      {/* that thar's the CardList */}
      <CardList/>
    </main>
  </div>
);

class App extends Component {
  render() {
    return (
      <div id="root">
        <Router history={browserHistory}>
          {/* <Route path="/login" component={Vulnerabilities}/> */}
          <Route path="/" component={Vulnerabilities}/>
          {/* <Route path="/my-solutions" component={Vulnerabilities}/> */}
          <Route path="/all-solutions" component={Vulnerabilities}/>
          {/* <Route path="/downloads" component={Vulnerabilities}/> */}
          <Route path="/about" component={Vulnerabilities}/>
        </Router>
      </div>
    );
  }
}

export default App;
// view rawpwa-starter.js hosted with ❤ by GitHub


// const Home = (props) => (
//   <Page title="Home"/>
// );
//
// const About = (props) => (
//   <Page title="About"/>
// );
//
// const Settings = (props) => (
//   <Page title="Settings"/>
// );
