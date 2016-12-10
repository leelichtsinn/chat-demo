import { combineReducers } from 'redux';
import auth from '../reducers/auth';
import http_request from '../reducers/http_request'

export default combineReducers({
  auth,
  http_request
});
