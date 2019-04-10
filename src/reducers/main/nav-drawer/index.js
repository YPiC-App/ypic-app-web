import { OPEN_NAV_DRAWER } from './actions';

const initialState = {
  open: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_NAV_DRAWER:
      return {
        ...state,
        open: action.payload,
      };
    default:
      return state;
  }
};
