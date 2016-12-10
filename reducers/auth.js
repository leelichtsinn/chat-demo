import {
  USER_AUTH_FORM_UPDATE,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE
} from '../actions/auth';

const initialState = {
  userAuthForm: {
    email: '',
    password: ''
  },
  userDetails: {
    email: ''
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH_FORM_UPDATE:
      return Object.assign({}, state, {
        userAuthForm: Object.assign({}, state.userAuthForm, action.auth)
      });
    case USER_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        userDetails: action.userDetails
      });
    case USER_DETAILS_FAILURE:
      return Object.assign({}, state, {
        userError: action.error
      });
    default:
      return state;
  }
};
