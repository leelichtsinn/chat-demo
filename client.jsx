console.log('client.js');

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';
import history from 'history';
import store from './store';

import App from './components/App/App';
import Home from './components/Home/Home';
import SignUp from './components/UserAuth/SignUp';
import LoginApp from './containers/LoginApp';
import ProfileApp from './containers/ProfileApp';
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
        <Route path="/login" component={LoginApp} />
        <Route path="chat" component={MessageList} />
        <Route path="user" component={ProfileApp} />
        <Route path="preferences" component={UserPrefs} />
      </Route>
    </Router>
  </Provider>
  ),
  document.getElementById('root')
);
