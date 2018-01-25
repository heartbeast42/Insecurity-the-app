import React from 'react';

// import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
// import nav from './scripts.js'

/* * /

const Navbar = (props) => {
  return (
    <div id="mySidebar" className="sidebar bar-block">
      <div className="close-div">
        <img className="close" src="img/close.png" />
      </div>
      <div className="navItems">
        <a href="#" className="w3-bar-item w3-button">Link 1</a>
        <a href="#" className="w3-bar-item w3-button">Link 2</a>
        <a href="#" className="w3-bar-item w3-button">Link 3</a>
      </div>
    </div>
  )
}

/*/
const Navbar = () => (
  <div id="mySidebar" className="sidebar bar-block">
    <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>
      <div className="close-div">
        <img className="close" src="img/close.png" />
      </div>


      <div className="navItems">
        <a href="#" className="w3-bar-item w3-button">Link 1</a>
        <a href="#" className="w3-bar-item w3-button">Link 2</a>
        <a href="#" className="w3-bar-item w3-button">Link 3</a>
      </div>


      <Nav id='dashboard'>
        <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
        <NavText> Dashboard </NavText>
      </Nav>
      <Nav id='sales'>
        <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
        <NavText> Sales </NavText>
      </Nav>



      <p className="App-intro">
        {/* This is the {title} page. */}
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






    </SideNav>
  </div>
)
/* */

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

export default Navbar;
