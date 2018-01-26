import React, { Component } from 'react';
import { Router, browserHistory, Route } from 'react-router';
import './App.css';
import Navbar from './component.navbar.js';
import CardList from './component.cardlist.js';


const Page = ({ title }) => (
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
    <CardList id="cardList" />
    </main>
  </div>
);

class App extends Component {
  render() {
    return (
      <div id="root">
        <Router history={browserHistory}>
          <Route path="/login" component={Page}/>
          <Route path="/" component={Page}/>
          <Route path="/my-solutions" component={Page}/>
          <Route path="/all-solutions" component={Page}/>
          <Route path="/downloads" component={Page}/>
          <Route path="/about" component={Page}/>
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
