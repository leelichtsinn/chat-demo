console.log('client.js');

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';
import history from 'history';
import store from './store';
import App from './components/App/App';
import Home from './components/Home/Home';
import User from './components/User/User';
import UserPrefs from './components/UserPrefs/UserPrefs';
import NavBar from './components/NavBar/NavBar';
import Chat from './components/Chat/Chat';
import Message from './components/Chat/Message';


ReactDom.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="chat" component={Chat} />
        <Route path="user" component={User} />
        <Route path="preferences" component={UserPrefs} />
      </Route>
    </Router>
  </Provider>
  ),
  document.getElementById('root')
);
