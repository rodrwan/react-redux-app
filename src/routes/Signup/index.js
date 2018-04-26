import { connect } from 'react-redux';

import SignupView from './View/Signup';
import { submit } from '../../reducers/auth';

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
});

export default connect(mapStateToProps, { submit })(SignupView);
