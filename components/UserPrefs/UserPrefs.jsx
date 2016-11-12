import React, { Component } from 'react';

import NavBar from '../NavBar/NavBar';
import UserLikes from '../UserLikes/UserLikes';
import UserDislikes from '../UserDislikes/UserDislikes';

const UserPrefs = () => {
  return (
    <div className="UserPrefs">
      <NavBar />
      <h1>Preferences</h1>
      <div>
        <UserLikes />
        <UserDislikes />
      </div>
    </div>
  );
}

export default UserPrefs;
