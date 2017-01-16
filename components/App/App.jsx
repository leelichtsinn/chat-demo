import React, { Component } from 'react';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from '../Home/Home';
import User from '../User/User';
import UserPrefs from '../UserPrefs/UserPrefs';
import NavBar from '../NavBar/NavBar';
import MessageList from '../Chat/ChatThread';
import Message from '../Chat/Message';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
