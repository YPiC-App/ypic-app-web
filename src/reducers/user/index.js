import { SET_USER_DATA } from './actions';

const initialState = {
  data: undefined,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
