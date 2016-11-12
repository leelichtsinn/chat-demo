console.log('client.js');

import React from 'react';
import ReactDom from 'react-dom';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App/App';
import Home from './components/Home/Home';
import User from './components/User/User';
import UserPrefs from './components/UserPrefs/UserPrefs';
import NavBar from './components/NavBar/NavBar';
import MessageList from './components/MessageList/MessageList';
import Message from './components/Message/Message';

ReactDom.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="chat" component={MessageList} />
        <Route path="user" component={User} />
        <Route path="preferences" component={UserPrefs} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
