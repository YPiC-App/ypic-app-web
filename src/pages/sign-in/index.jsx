import React from 'react';
import Button from 'components/button';
import LogoRound from 'assets/images/logo-round.png';
import {
  GooglePlusBoxIcon,
  FacebookBoxIcon,
  EmailIcon,
  TwitterBoxIcon,
} from 'components/icons';

import './styles.scss';

const SignIn = () => (
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
        <div className="sign-in__button-group">
          <Button
            raised
            className="sign-in__google-button"
            icon={<GooglePlusBoxIcon />}
          >
            Sign in with Google
          </Button>
          <Button
            raised
            className="sign-in__fb-button"
            icon={<FacebookBoxIcon />}
          >
            Sign in with Facebook
          </Button>
          <Button
            raised
            className="sign-in__twitter-button"
            icon={<TwitterBoxIcon />}
          >
            Sign in with Twitter
          </Button>
          <Button raised className="sign-in__email-button" icon={<EmailIcon />}>
            Register with Email
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default SignIn;
