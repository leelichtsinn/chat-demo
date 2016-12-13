import { connect } from 'react-redux';
import {
  initiateHTTPRequest,
  processUserDetailsRequestSuccess,
  processUserDetailsRequestFailure,
  processHTTPError
} from '../actions/httpRequest';
import User from '../../User/User';
import fetch from 'isomorphic-fetch';
import auth from '../servies/auth';
import { browserHistory } from 'react-router';

const mapStateToProps = state => {
  return {
    userDetails: state.userDetails,
    userError: state.userError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDidMount: (userId) => {
      dispatch(initiateHTTPRequest());
    }
  }
}
