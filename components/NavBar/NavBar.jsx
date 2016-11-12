import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <ul>
          <li><Link to="/chat">Chat</Link></li>
          <li><Link to="/user">User Profile</Link></li>
          <li><Link to="/preferences">User Preferences</Link></li>
        </ul>
      </div>
    );
  }
}
