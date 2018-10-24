/* eslint-disable */

import React from 'react';

export class Link extends React.Component {
  render() {
    return React.createElement('a', { href: this.props.to }, this.props.children);
  }
}

export const withRouter = () => Component => props => <Component {...props} />;

export class Redirect extends React.Component {
  render() {
    return React.createElement('div', null, this.props.children);
  }
}
