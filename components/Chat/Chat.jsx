import React from 'react';
import Thread from '../Thread/Thread';
import MessageForm from '../MessageForm/MessageForm';

const Chat = () => {
  return (
    <div className="Chat">
      <Thread />
      <MessageForm />
    </div>
  );
}

export default Chat;
