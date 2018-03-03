import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import './style.sass';

@inject('routing')
@observer
class Menu extends React.Component {
  render() {
    const { location, push, goBack } = this.props.routing;

    const pathname = location ? location.pathname : '';

    return (
      <div styleName="menu">
        <button onClick={() => goBack()}>Go Back</button>
        <button styleName={pathname === '/' ? 'active' : ''} onClick={() => push('/')}>Home</button>
        <button styleName={pathname === '/settings' ? 'active' : ''} onClick={() => push('/settings')}>Settings</button>
      </div>
    );
  }
}

Menu.propTypes = {
  routing: PropTypes.object.isRequired,
};

export default Menu;
