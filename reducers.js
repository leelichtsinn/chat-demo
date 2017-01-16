import { combineReducers } from 'redux';
import chat from './reducers/chat';
import httpRequest from './reducers/httpRequest';

export default combineReducers({
  chat,
  httpRequest
});
