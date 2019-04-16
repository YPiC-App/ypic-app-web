import payloadAction from 'payload-action-creator';

export const SHOW_PASSWORD = '@SIGN_IN/SHOW_PASSWORD';
export const RESET_SIGN_IN = '@SIGN_IN/RESET_SIGN_IN';

export const setShowPassword = payloadAction(SHOW_PASSWORD);
