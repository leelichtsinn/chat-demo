const LOAD_REQUEST = 'messages/LOAD_REQUEST';
const LOAD_SUCCESS = 'messages/LOAD_SUCCESS';
const LOAD_FAILURE = 'messages/LOAD_FAILURE';
const ADD_MESSAGE = 'messages/ADD_MESSAGE';

import fetch from 'isomorphic-fetch';

export const newMessage = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const loadMessages = (searchParam, dispatch) => {
  // indicate we are loading messages
  dispatch(requestMessages());
  fetch(`api/messages/?s=${param}&r=json`)
  .then((response) => response.json())
  .then((responseJson) => {
    dispatch(messageSuccess(responseJson))
  })
  .catch((error) => dispatch(messageFailure()));
} ;

export const requestMessages = () => {
  return {
    type: LOAD_REQUEST
  }
}

export const messageSuccess = (jsonData) => {
  return {
    type: LOAD_SUCCESS,
    data: jsonData.search
  }
}

export const messageFailure = () => {
  return {
    type: LOAD_FAILURE
  }
}
