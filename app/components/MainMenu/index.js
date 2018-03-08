import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { translate } from "react-i18next";

import "./style.sass";

@inject("routing")
@observer
class Menu extends React.Component {
  render() {
    const { location, push, goBack } = this.props.routing;
    const { t } = this.props;

    const pathname = location ? location.pathname : "";

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">React <strong>16</strong></Link>
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
              <Link to="/" className="nav-link">{t("menu.home")}</Link>
            </li>
            <li className={`nav-item ${pathname === "/settings" ? "active" : ""}`}>
              <Link to="/settings" className="nav-link">{t("menu.settings")}</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

Menu.propTypes = {
  routing: PropTypes.object,
  t: PropTypes.func,
};

export default translate()(Menu);
