export const SET_NUMBERS = '@@data/SET_NUMBERS';
const initialState = {
  numbers: []
};

export function setNumbers(numbers) {
  return {
    type: SET_NUMBERS,
    payload: { numbers }
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBERS:
      return {
        ...state,
        numbers: action.payload.numbers
      };
    default:
      return state;
  }
};
