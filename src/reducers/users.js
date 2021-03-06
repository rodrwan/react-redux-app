export const FETCH_USERS = '@@users/FETCH_USERS';
export const RECEIVE_USERS = '@@users/RECEIVE_USERS';
export const SET_USER = '@@users/SET_USER';

export function setUser(user) {
  return {
    type: SET_USER,
    payload: {
      user,
    },
  };
}

export function fetchUsers() {
  return {
    type: FETCH_USERS,
  };
}

export function receiveUsers(us) {
  return {
    type: RECEIVE_USERS,
    payload: {
      users: us,
    },
  };
}

export function getUsers() {
  return dispatch => {
    dispatch(fetchUsers());

    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(us => dispatch(receiveUsers(us)))
      .catch(err => console.log(err));
  };
}

const initialState = {
  users: [],
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_USERS:
      return {
        ...state,
        isFetching: false,
        users: state.users.concat(action.payload.users),
      };
    case SET_USER: {
      return {
        ...state,
        users: state.users.concat(action.payload.user),
      };
    }
    default:
      return state;
  }
};
