import { connect } from 'react-redux';
import Login from '../components/UserAuth/Login';

const mapStateToProps = state => {
  return {
    userError: state.userError
  };
};

const LoginApp = connect(
  mapStateToProps
)(Login);

export default LoginApp;
