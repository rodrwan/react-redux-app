export const REQUEST_SAVE_USER = '@@auth/REQUEST_SAVE_USER';
export const RESPONSE_SAVE_USER = '@@auth/RESPONSE_SAVE_USER';

const requestSaveUser = () => ({
  type: REQUEST_SAVE_USER,
});

const responseSaveUser = (response, error) => ({
  type: RESPONSE_SAVE_USER,
  payload: {
    response,
    error,
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
      dispatch(responseSaveUser(user, null));
    })
    .catch(err => console.log(err));
};

const initialState = {
  isFetching: false,
  response: null,
  error: null,
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
        response: action.payload.error,
        error: action.payload.error,
        isFetching: false,
      };
    default:
      return state;
  }
};
