import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';
import { I18nextProvider } from 'react-i18next';

import App from 'components/App';

import i18n from '../config/i18n';

import api from './api';
import PostStore from './stores/posts';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
  postStore: new PostStore(api.Posts),
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider {...stores}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root'),
);
