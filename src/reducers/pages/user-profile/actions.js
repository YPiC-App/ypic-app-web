import payloadAction from 'payload-action-creator';

export const SET_TITLES = '@USER_PROFILE/SET_TITLES';
export const SET_CONGREGATIONS = '@USER_PROFILE/SET_CONGREGATIONS';

export const setTitles = payloadAction(SET_TITLES);
export const setCongregations = payloadAction(SET_CONGREGATIONS);
