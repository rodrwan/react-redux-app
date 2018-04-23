import { combineReducers } from 'redux';

import data from './reducers/data';
import usersReducer from './reducers/users';

export default combineReducers({
  data,
  users: usersReducer,
});
