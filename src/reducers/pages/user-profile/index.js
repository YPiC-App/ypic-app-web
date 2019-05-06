import { SET_TITLES, SET_CONGREGATIONS } from './actions';

const initialState = {
  titles: [],
  congregations: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TITLES:
      return {
        ...state,
        titles: action.payload,
      };
    case SET_CONGREGATIONS:
      return {
        ...state,
        congregations: action.payload,
      };
    default:
      return state;
  }
};
