import React, { Component } from 'react';
// import styles from './styles.css';

export default class MessageForm extends Component {
  render() {
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
}
