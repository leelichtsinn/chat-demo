import React, { Component } from 'react';
import { Link } from 'react-router';

const NavBar = () => {
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

export default NavBar;
