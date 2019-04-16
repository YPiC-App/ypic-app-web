import { SET_MENU_ANCHOR_ELEMENT } from './actions';

const initialState = {
  meunAnchorElement: undefined,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MENU_ANCHOR_ELEMENT:
      return {
        ...state,
        meunAnchorElement: action.payload,
      };
    default:
      return state;
  }
};
