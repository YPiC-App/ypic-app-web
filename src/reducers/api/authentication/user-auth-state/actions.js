import payloadAction from 'payload-action-creator';

export const GET_USER_AUTH_STATE_REQUESTED = 'GET_USER_AUTH_STATE_REQUESTED';
export const GET_USER_AUTH_STATE_FAILED = 'GET_USER_AUTH_STATE_FAILED';
export const GET_USER_AUTH_STATE_SUCCEEDED = 'GET_USER_AUTH_STATE_SUCCEEDED';

export const getUserAuthStateRequested = payloadAction(
  GET_USER_AUTH_STATE_REQUESTED
);
export const getUserAuthStateFailed = payloadAction(GET_USER_AUTH_STATE_FAILED);
export const getUserAuthStateSucceeded = payloadAction(
  GET_USER_AUTH_STATE_SUCCEEDED
);
