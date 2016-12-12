import { combineReducers } from 'redux';
import auth from './reducers/auth';
import httpRequests from './reducers/httpRequests'

export default combineReducers({
  auth,
  httpRequests
});
