import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import LogoRound from 'assets/images/logo-round.png';
import {
  GooglePlusBoxIcon,
  FacebookBoxIcon,
  TwitterBoxIcon,
} from 'components/icons';
import EmailSignIn from './email-sign-in';

import './styles.scss';

const SignIn = ({ onFacebookClick, onGoogleClick }) => (
  <div className="sign-in">
    <div className="sign-in__content-wrapper">
      <div className="center-h">
        <img
          src={LogoRound}
          className="sign-in__logo"
          alt="Young People in Christ"
        />
      </div>
      <div className="center-h">
        <div className="sign-in__interactive-area">
          <EmailSignIn />
          <div className="center-h">OR</div>
          <div className="sign-in__button-group">
            <Button
              raised
              className="sign-in__google-button"
              icon={<GooglePlusBoxIcon />}
              onClick={onGoogleClick}
            >
              Sign in with Google
            </Button>
            <Button
              raised
              className="sign-in__fb-button"
              icon={<FacebookBoxIcon />}
              onClick={onFacebookClick}
            >
              Sign in with Facebook
            </Button>
            <Button
              raised
              className="sign-in__twitter-button"
              icon={<TwitterBoxIcon />}
              disabled
            >
              Sign in with Twitter
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SignIn.propTypes = {
  onFacebookClick: PropTypes.func.isRequired,
  onGoogleClick: PropTypes.func.isRequired,
};

export default SignIn;
