console.log('client.js');

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';
import reducer from './reducers/index';
// import action from './actions';

import App from './components/App/App';
import Home from './components/Home/Home';
import User from './components/User/User';
import UserPrefs from './components/UserPrefs/UserPrefs';
import NavBar from './components/NavBar/NavBar';
import MessageList from './components/MessageList/MessageList';
import Message from './components/Message/Message';

/* eslint-disable no-underscore-dangle */
const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

const render = () => ReactDom.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="chat" component={MessageList} />
        <Route path="user" component={User} />
        <Route path="preferences" component={UserPrefs} />
      </Route>
    </Router>
  </Provider>
  ),
  document.getElementById('root')
);

render();
store.subscribe(render);
