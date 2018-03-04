import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';

import App from './components/App';

import postStore from './stores/posts';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
  postStore,
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
