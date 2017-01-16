import { connect } from 'react-redux';
import {
  initiateHTTPRequest,
  processHTTPError
} from '../actions/httpRequest';

import MessageForm from '../components/Chat/MessageForm';

import fetch from 'isomorphic-fetch';

const mapStatToProps = state => {
  return {
    messageForm: state.messageForm || {},
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFormChange: (text) => {
      dispatch(onMessageFormChange(text))
    },
    onFormSubmit: (messageId, text) => {
      dispatch(initiateHTTPRequest());
      fetch('/api/messages' + messageId, {
        method: 'POST',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: text})
      })
      .then((response) => {
        return fetch('/api/messages/' + messageId)
      })
      .then(response => response.json())
      .then((response) => {
        dispatch(onMessageFormChange(''))
        dispatch(messageRequestSuccess(response))
      })
      .catch((err) => dispatch(processHTTPError(err)));
    }
  }
};

const MessageFormApp = connect(
  mapStatToProps,
  mapDispatchToProps
)(MessageForm);

export default MessageFormApp;
