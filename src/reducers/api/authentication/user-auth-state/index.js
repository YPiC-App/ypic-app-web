import { reducer } from 'react-preloadr';
import {
  GET_USER_AUTH_STATE_REQUESTED,
  GET_USER_AUTH_STATE_FAILED,
  GET_USER_AUTH_STATE_SUCCEEDED,
} from './actions';

const getUserAuthState = reducer(
  GET_USER_AUTH_STATE_FAILED,
  GET_USER_AUTH_STATE_REQUESTED,
  GET_USER_AUTH_STATE_SUCCEEDED
);

export default getUserAuthState;
