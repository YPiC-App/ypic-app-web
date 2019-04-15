import { SHOW_SITE_OVERLAY } from './actions';

const initialState = {
  showOverlay: false,
  overlayText: 'Loading...',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_SITE_OVERLAY:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
