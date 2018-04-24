import { connect } from 'react-redux';

import SignupView from '../components/SignupView';
import { submit } from '../reducers/auth';

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
});

export default connect(mapStateToProps, { submit })(SignupView);
