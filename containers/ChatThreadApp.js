import { connect } from 'react-redux';
import { initiateHTTPRequest,
  processHTTPError
} from '../action/httpRequest';
// processMessageThreadSuccess,

import ChatThread from '../components/Chat/ChatThread';

const mapStateToProps = state => {
  return {
    data: state.data || [],
    requestPending: state.requestPending || false
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDidMount: () => {
      dispatch(initiateHTTPRequest());
      fetch('/api/messages')
        .then(response => response.json())
        .then((response) => dispatch(processMessageThreadSuccess(response)))
        .catch((err) => dispatch(processHTTPError(err)));
    }
  };
};

const ChatThreadApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatThread);
