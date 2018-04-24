import { setUser } from './users';
export const REQUEST_SAVE_USER = '@@auth/REQUEST_SAVE_USER';
export const RESPONSE_SAVE_USER = '@@auth/RESPONSE_SAVE_USER';

const requestSaveUser = () => ({
  type: REQUEST_SAVE_USER,
});

const responseSaveUser = (response, errors) => ({
  type: RESPONSE_SAVE_USER,
  payload: {
    response,
    errors,
  },
});

export const submit = data => dispatch => {
  dispatch(requestSaveUser());

  return fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(res => res.json())
    .then(user => {
      console.log(user);
      dispatch(setUser(user));
      dispatch(responseSaveUser(user, user.errors));
    })
    .catch(err => console.log(err));
};

const initialState = {
  isFetching: false,
  response: null,
  errors: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SAVE_USER:
      return {
        ...state,
        isFetching: true,
      };
    case RESPONSE_SAVE_USER:
      return {
        ...state,
        response: action.payload.response,
        errors: action.payload.errors,
        isFetching: false,
      };
    default:
      return state;
  }
};
