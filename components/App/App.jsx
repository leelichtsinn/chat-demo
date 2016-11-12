import React, { Component } from 'react';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from '../Home/Home';
import User from '../User/User';
import UserPrefs from '../UserPrefs/UserPrefs';
import NavBar from '../NavBar/NavBar';
import MessageList from '../MessageList/MessageList';
import Message from '../Message/Message';

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={Home} />
          <Route path="chat" component={MessageList} />
          <Route path="user" component={User} />
          <Route path="preferences" component={UserPrefs} />
        </Route>
      </Router>
    );
  }
}
