import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return (
        <li className="Message">
          <strong>USER NAME</strong>
          <div>TEXT</div>
        </li>
    )
  }
}
