export const USER_AUTH_FORM_UPDATE = 'USER_AUTH_FORM_UPDATE';
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS';
export const USER_DETAILS_FAILURE = 'USER_DETAILS_FAILURE';

export const processUserDetailsRequestSuccess = data => {
  return {
    type: USER_DETAILS_SUCCESS,
    userDetails: data
  };
};

export const processUserDetailsRequestFailure = error => {
  return {
    type: USER_DETAILS_FAILURE,
    error
  };
};

export const onUserAuthFormChange = auth => {
  return {
    type: USER_AUTH_FORM_UPDATE,
    auth
  };
};
