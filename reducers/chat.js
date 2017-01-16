import {
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAILURE
} from '../actions/chat';

const initialState = {
  isLoading: false,
  isError: false,
  messages: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      }

    case LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        messages: action.messages.data
      }

    case LOAD_FAILURE:
      return {
        isLoading: false,
        isError: true,
        messages: []
      }

    default:
      return state;
  }
};
