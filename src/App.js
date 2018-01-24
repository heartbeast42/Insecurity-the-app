import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
// import logo from './logo.svg';
import './App.css';
import Navbar from './navbar.js';

const Page = ({ title }) => (
  <div className="App">
    <Navbar/>
    <main>
      <div className="App-header">


        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Insecurity the app</h1>
        <h2>{title}</h2>
      </div>

      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/settings">Settings</Link>
      </p>
    </main>
  </div>
);

const Home = (props) => (
  <Page title="Home"/>
);

const About = (props) => (
  <Page title="About"/>
);

const Settings = (props) => (
  <Page title="Settings"/>
);

class App extends Component {
  render() {
    return (
      <div id="root">
        <Router history={browserHistory}>
          <Route path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/settings" component={Settings}/>
        </Router>
      </div>
    );
  }
}

export default App;
// view rawpwa-starter.js hosted with ❤ by GitHub
