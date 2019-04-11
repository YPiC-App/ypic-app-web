import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import api from './api';
import user from './user';
import mainReducer from './main';

export default history =>
  combineReducers({
    router: connectRouter(history),
    api,
    user,
    main: mainReducer,
  });
