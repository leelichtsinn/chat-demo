import React, { Component } from 'react';
// import styles from './styles.css';

const MessageForm = () => {
  return (
    <form className="well clearfix">
      <textarea
        className="form-control">
      </textarea>
      <input
        type="submit"
        value="Send"
        className="btn btn-primary pull-right" />
    </form>
  );
}

export default MessageForm;
