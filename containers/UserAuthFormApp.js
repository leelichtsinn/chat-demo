import { connect } from 'react-redux';
import {
  initiateHTTPRequest,
  onUserAuthFormChange,
  processUserDetailsRequestFailure,
  processHTTPError
} from '../actions';

import { browserHistory } from 'react-router';

import auth from '../services/auth';

import UserAuthForm from '../components/UserAuth/UserAuthForm';

import fetch from 'isomorphic-fetch';


const mapStateToProps = (state) => {
  return {
    userAuthForm: state.userAuthForm,
    requestPending: state.requestPending,
    userError: state.userError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEmailChange: (email) => {
      dispatch(onUserAuthFormChange({email}));
    },

    onPasswordChange: (password) => {
      dispatch(onUserAuthFormChange({password}));
    },

    onFormSubmit: (isSignUp, userAuthForm) => {
      dispatch(initiateHTTPRequest());

      const url = isSignUp ? '/api/user/signup' : '/api/user/login';
      fetch(url, {
        method: 'POST',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userAuthForm)
      })
      .then((response) => {

        if (response.error) {
          auth.logout();
          dispatch(processUserDetailsRequestFailure(response.error));
          return;
        }
        return response.json()
        .then(json => {
          if (json.error) {
            auth.logout();
            dispatch(processUserDetailsRequestFailure(json.error.message));
            return;
          }
          auth.login(json.token);
          browserHistory.push('/profile/' + json.id);
        });
      })
      .catch((err) => dispatch(processHTTPError(err)));
    }
  };
};

const UserAuthFormApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAuthForm);

export default UserAuthFormApp;
