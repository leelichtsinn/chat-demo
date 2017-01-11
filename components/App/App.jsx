import React, { Component } from 'react';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import UserPrefs from '../UserPrefs/UserPrefs';
import NavBar from '../NavBar/NavBar';
import MessageList from '../MessageList/MessageList';
import Message from '../Message/Message';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
