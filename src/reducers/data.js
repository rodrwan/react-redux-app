export const SET_NUMBERS = '@@numbers/SET_NUMBERS';
export const REQUEST_NUMBERS = '@@numbers/REQUEST_NUMBERS';

const initialState = {
  numbers: [],
  isFetching: false,
};

export const setNumbers = numbers => ({
  type: SET_NUMBERS,
  payload: { numbers },
});

export const requestNumbers = () => ({
  type: REQUEST_NUMBERS,
});

export const setNumberTimeout = numbers => dispatch => {
  setTimeout(() => dispatch(setNumbers(numbers)), 3 * 1000);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_NUMBERS:
      return {
        ...state,
        isFetching: true,
      };
    case SET_NUMBERS:
      return {
        ...state,
        numbers: action.payload.numbers,
        isFetching: false,
      };
    default:
      return state;
  }
};
