import { connect } from 'react-redux';

import { getUsers } from '../../reducers/users';
import HomeView from './View/Home';

const mapStateToProps = state => ({
  // numbers: state.data.numbers
  users: state.users.users,
  isFetching: state.users.isFetching,
});

export default connect(mapStateToProps, {
  getUsers,
})(HomeView);
