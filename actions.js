export const HTTP_REQUEST_REQUEST = 'common/HTTP_REQUEST_REQUEST';
export const HTTP_REQUEST_FAILURE = 'common/HTTP_REQUEST_FAILURE';

export const POSTS_LIST_SUCCESS = 'postsList/POSTS_LIST_SUCCESS';
export const POST_DETAIL_SUCCESS = 'post/POST_SUCCESS';

export const POST_FORM_UPDATE = 'postForm/POST_FORM_UPDATE';

export const COMMENT_BOX_CHANGE = 'commentBox/COMMENT_BOX_CHANGE';
export const COMMENT_BOX_SUBMIT = 'commentBox/COMMENT_BOX_SUBMIT';

export const USER_AUTH_FORM_UPDATE = 'userAuth/USER_AUTH_FORM_UPDATE';
export const USER_DETAILS_SUCCESS = 'userAuth/USER_DETAILS_SUCCESS';
export const USER_DETAILS_FAILURE = 'userAuth/USER_DETAILS_FAILURE';


export const initiateHTTPRequest = () => {
  return {
    type: HTTP_REQUEST_REQUEST
  };
};

export const processHTTPError = error => {
  return {
    type: HTTP_REQUEST_FAILURE,
    error
  };
};

export const processPostListRequestSuccess = (response) => {
  return {
    type: POSTS_LIST_SUCCESS,
    data: response && response.posts || [],
  };
};

export const processPostDetailsRequestSuccess = data => {
  return {
    type: POST_DETAIL_SUCCESS,
    data: data && data.post || {}
  };
};

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

export const onPostFormChange = postForm => {
  return {
    type: POST_FORM_UPDATE,
    postForm
  };
};

export const onCommentBoxFormChange = text => {
  return {
    type: COMMENT_BOX_CHANGE,
    text
  };
};

export const onUserAuthFormChange = auth => {
  return {
    type: USER_AUTH_FORM_UPDATE,
    auth
  };
};
