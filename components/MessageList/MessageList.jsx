import React, { Component, PropTypes } from 'react';

import NavBar from '../NavBar/NavBar';
import Message from '../Message/Message';
import MessageForm from '../MessageForm/MessageForm';

export default class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.props.comments
      .map((message, index) => <Message key={index}
      content={message.content} />);
    return (
      <div className='MessageList'>{comments}</div>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
};
