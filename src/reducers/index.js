import { combineReducers } from 'redux';

import api from './api';
import user from './user';
import mainReducer from './main';
import site from './site';
import pages from './pages';

export default combineReducers({
  api,
  user,
  site,
  main: mainReducer,
  pages,
});
