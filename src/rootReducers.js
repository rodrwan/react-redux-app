import { combineReducers } from 'redux';

import data from './reducers/data';
import usersReducer from './reducers/users';
import authReducer from './reducers/auth';

export default combineReducers({
  data,
  users: usersReducer,
  auth: authReducer,
});
