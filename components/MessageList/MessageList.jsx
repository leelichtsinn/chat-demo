import React, { Component } from 'react';

import NavBar from '../NavBar/NavBar';
import Message from '../Message/Message';
import MessageForm from '../MessageForm/MessageForm';

const MessageList = (props) => {
  return (
    <div className="MessageList">
      <h2>Conversational Thread</h2>
      <NavBar />
      <div>
        <ul>
          <Message />
        </ul>
        <MessageForm />
      </div>
    </div>
  );
}

export default MessageList;
