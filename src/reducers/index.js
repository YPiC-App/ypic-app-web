import { combineReducers } from 'redux';

import api from './api';
import user from './user';
import mainReducer from './main';

export default combineReducers({
  api,
  user,
  main: mainReducer,
});
