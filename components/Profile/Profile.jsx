import React, { Component, PropTypes } from 'react';

import NavBar from '../NavBar/NavBar';

export default class User extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMoutn() {
    if (this.props.onDidMount) {
      this.props.onDidMount(this.props.params.id);
    }
  }

  render() {
    return (
      <div>
        <h1>User Details</h1>
        <div>
          <label>Email</label>
        </div>
        <span>{this.props.userDetails.email}</span>
      </div>
    );
  }
}

// User.propTypes = {
//   userDetails: Proptypes.object,
//   onDidMount: PropTypes.func
// }
