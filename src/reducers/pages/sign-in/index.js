import { SHOW_PASSWORD, RESET_SIGN_IN } from './actions';

const initialState = {
  showPassword: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_PASSWORD:
      return {
        ...state,
        showPassword: action.payload,
      };
    case RESET_SIGN_IN:
      return initialState;
    default:
      return state;
  }
};
