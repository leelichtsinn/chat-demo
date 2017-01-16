import React, { Component, PropTypes } from 'react';

export default class Profile extends Component {
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

Profile.propTypes = {
  userDetails: PropTypes.object,
  onDidMount: PropTypes.func
}
