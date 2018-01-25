import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
// import logo from './logo.svg';
import './App.css';
import Navbar from './navbar.js';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';


const Page = ({ title }) => (
  <div className="App">
    {/* <Navbar/> */}
    {/* <SideNav selected='xyz'></SideNav> */}
    <MySideNav/>
    <main>
      <div className="App-header">




        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Insecurity the app</h1>
        {/* <h2>{title}</h2> */}

      </div>

      {/* <p className="App-intro">
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
      </p> */}




    </main>
  </div>
);

const MySideNav = () => (
  <div style={{background: '#2c3e50', color: '#FFF', width: 220}}>
    <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>
      <Nav id='dashboard'>
        <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
        <NavText> Dashboard </NavText>
      </Nav>
      <Nav id='sales'>
        <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
        <NavText> Sales </NavText>
      </Nav>
    </SideNav>
  </div>
)

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

class App extends Component {
  render() {
    return (
      <div id="root">
        <Router history={browserHistory}>
          <Route path="/" component={Page}/>
          <Route path="/about" component={Page}/>
          <Route path="/settings" component={Page}/>
        </Router>
      </div>
    );
  }
}

export default App;
// view rawpwa-starter.js hosted with ❤ by GitHub
