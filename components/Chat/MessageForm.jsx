import React, { Component, PropTypes } from 'react';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.props.messageId,
    this.props.messageForm.text);
  }

  render() {
    return (
      <form className='well clearfix'
        onSubmit={this.handleSubmit}>
        <textarea
          value={this.props.messageForm.text}
          onChange={(e) => this.props.onFormChange(e.target.value)}
          className='form-control'></textarea><br/>
        <input
          type='submit'
          value='Send'
          className='btn btn-primary pull-right' />
      </form>
    );
  }
}

MessageForm.propTypes = {
  messageId: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onFormChange: PropTypes.func.isRequired
}

export default MessageForm;
