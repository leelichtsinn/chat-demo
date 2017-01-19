import React, { Component } from 'react';
import UserAuthFormApp from '../../containers/UserAuthFormApp';

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <UserAuthFormApp signUp={true} />
      </div>
    );
  }
};
