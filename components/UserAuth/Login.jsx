import React, { Component } from 'react';
import UserAuthFormApp from '../../containers/UserAuthFormApp';

export default class Login extends Component {
  render() {
    return (
      <div>
        <UserAuthFormApp signUp={false} />
      </div>
    );
  }
};
