import axios from 'axios';

import { firebaseAPIURL } from 'private/firebase-config';

// eslint-disable-next-line import/prefer-default-export
export const getUserDetails = async userID => {
  try {
    const result = await axios.get(`${firebaseAPIURL}/user/${userID}`);
    return result.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};
