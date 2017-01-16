import React from 'react';
import ChatThread from './ChatThread';
import MessageForm from './MessageForm';

const Chat = () => {
  return (
    <div className="Chat">
      <ChatThread />
      <MessageForm />
    </div>
  );
}

export default Chat;
