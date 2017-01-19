import React, { Component } from 'react';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from '../Home/Home';
import UserApp from '../../containers/UserApp';
import SignUp from '../UserAuth/SignUp';
import LoginApp from '../../containers/LoginApp';
import UserPrefs from '../UserPrefs/UserPrefs';
import NavBar from '../NavBar/NavBar';
import MessageList from '../MessageList/MessageList';
import Message from '../Message/Message';

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute component={Home} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={LoginApp} />
          <Route path='/user' component={UserApp} />
        </Route>
      </Router>
    );
  }
}
