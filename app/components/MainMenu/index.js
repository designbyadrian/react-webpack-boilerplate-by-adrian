import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

import "./style.sass";

@inject("routing")
@observer
class Menu extends React.Component {
  render() {
    const { location, push, goBack } = this.props.routing;

    const pathname = location ? location.pathname : "";

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">React <strong>16</strong></Link>
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className={`nav-item ${pathname === '/settings' ? 'active' : ''}`}>
              <Link to="/settings" className="nav-link">Settings</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

Menu.propTypes = {
  routing: PropTypes.object.isRequired,
};

export default Menu;
