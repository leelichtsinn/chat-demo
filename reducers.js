import {
  HTTP_REQUEST_REQUEST,
  HTTP_REQUEST_FAILURE,
  POSTS_LIST_SUCCESS,
  POST_DETAIL_SUCCESS,
  POST_FORM_UPDATE,
  COMMENT_BOX_CHANGE,
  USER_AUTH_FORM_UPDATE,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE
} from './actions';

const initialState = {
  data: [],
  postDetails: {
    tags: [],
    comments: []
  },
  postForm: {
    title: '',
    body: ''
  },
  commentForm: {
    text: ''
  },
  userAuthForm: {
    email: '',
    password: ''
  },
  userDetails: {
    email: ''
  },
  requestPending: false,
  error: false,
  userError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HTTP_REQUEST_REQUEST:
      return Object.assign({}, state, {
        requestPending: true
      });
    case HTTP_REQUEST_FAILURE:
      return Object.assign({}, state, {
        requestPending: false,
        error: action.error
      });
    case POSTS_LIST_SUCCESS:
      return Object.assign({}, state, {
        requestPending: false,
        error: false,
        data: action.data
      });
    case POST_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        requestPending: false,
        error: false,
        postDetails: Object.assign({}, action.data),
        postForm: Object.assign({}, action.data)
      });
    case POST_FORM_UPDATE:
      return Object.assign({}, state, {
        postForm: Object.assign({}, state.postForm, action.postForm)
      });
    case COMMENT_BOX_CHANGE:
      // TODO: compose reducers
      return Object.assign({}, state, {
        commentForm: Object.assign({}, state.commentForm, {
          text: action.text
        })
      });
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
