import { combineReducers } from 'redux';
import auth from './reducers/auth';
import http_requests from './reducers/http_requests'

export default combineReducers({
  auth,
  http_requests
});
