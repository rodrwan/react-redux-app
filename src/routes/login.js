import { connect } from 'react-redux';

import FormView from '../components/FormView';
import { submit } from '../reducers/auth';

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
});

export default connect(mapStateToProps, { submit })(FormView);
