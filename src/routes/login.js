import { connect } from 'react-redux';

import FormView from '../components/FormView';
import { submit } from '../reducers/auth';

export default connect(null, { submit })(FormView);
