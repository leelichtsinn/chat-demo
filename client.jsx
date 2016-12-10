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
import SignUp from './components/UserAuth/SignUp';
import Login from './components/UserAuth/Login';
import User from './components/User/User';
import UserPrefs from './components/UserPrefs/UserPrefs';
import NavBar from './components/NavBar/NavBar';
import MessageList from './components/MessageList/MessageList';
import Message from './components/Message/Message';


ReactDom.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="chat" component={MessageList} />
        <Route path="user" component={User} />
        <Route path="preferences" component={UserPrefs} />
      </Route>
    </Router>
  </Provider>
  ),
  document.getElementById('root')
);
