import React, { Component } from 'react';

import NavBar from '../NavBar/NavBar';

const User = (props) => {
  return (
    <div className="User">
      <NavBar />
      <div>
        <h1>User Profile</h1>
        <h2>User Name</h2>
      </div>
      <div>
        <ul>
          <li>Email</li>
          <li>Cellphone</li>
        </ul>
      </div>
    </div>
  );
}

export default User;
