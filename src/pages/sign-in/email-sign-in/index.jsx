import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './styles.scss';
import SignInForm from './sign-in-form';

const EmailSignIn = ({ history: { push } }) => (
  <div className="email-sign-in">
    <SignInForm push={push} />
  </div>
);

EmailSignIn.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default withRouter(EmailSignIn);
