import { getCongregations } from 'services/congregation-info';
import { getUserDetails } from 'services/user';
import { setUserData } from 'reducers/user/actions';
import { setCongregations } from './actions';

// eslint-disable-next-line import/prefer-default-export
export const setupUserProfile = userId => async dispatch => {
  const result = await Promise.all([
    getCongregations(),
    getUserDetails(userId),
  ]);

  dispatch(setCongregations(result[0]));
  dispatch(setUserData(result[1]));
};
