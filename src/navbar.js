import React from 'react';
// import nav from './scripts.js'

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

export default Navbar;
