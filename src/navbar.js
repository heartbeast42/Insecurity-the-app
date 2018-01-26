import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';


class Navbar extends Component {
  constructor(props, context) {
    super(props, context);

    this.navDismiss = this.navDismiss.bind(this);
    this.navShow = this.navShow.bind(this);

    this.state = {
      show: false
    };
  }

  navDismiss() {
    this.setState({ show: false });
  }

  navShow() {
    this.setState({ show: true });
  }

  render() {
    if (this.state.show) {
      return (
        <nav className="navBar">

          {/* close icon */}
          <div className="close-div">
            <div onClick={this.navDismiss}>
              <img className="closeMenu" src="./img/close2.png" />
            </div>
          </div>

          {/* actual nav items */}
          <p>
            <Link to="/login">Login</Link>
          </p>
          <p>
            <Link to="/">Volnerabilities</Link>
          </p>
          <p>
            <Link to="/my-solutions">My Solutions</Link>
          </p>
          <p>
            <Link to="/all-solutions">All Solutions</Link>
          </p>
          <p>
            <Link to="/downloads">Downloads</Link>
          </p>
          <p>
            <Link to="/about">About this app</Link>
          </p>

        </nav>
      )
    } else {
      return(
        <div>
          <div id="menuButton" onClick={this.navShow}>
            <img className="openMenu" src="./img/hamburgerMenu.png" />
          </div>
        </div>
      )
    }
  }


}

export default Navbar;
