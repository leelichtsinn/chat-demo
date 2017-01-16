import React, { Component, PropTypes } from 'react';

import NavBar from '../NavBar/NavBar';
import Message from './Message';
import MessageForm from './MessageForm';

export default class ChatThread extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.props.messages
      .map((message, index) => <Message key={index}
    content={message.content} />);
    render (
      <div className='ChatThread'>{messages}</div>
    );
  }
}

ChatThread.propTypes = {
  messages: PropTypes.array.isRequired
};
