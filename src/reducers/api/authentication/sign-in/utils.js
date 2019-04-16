import { toast } from 'components/toaster';

// eslint-disable-next-line
export const handleSignInAuhtError = ({ code, message }) => {
  switch (code) {
    case 'auth/wrong-password':
      toast.error(
        'Invalid Password! Please try again or try a different method.'
      );
      break;
    case 'auth/account-exists-with-different-credential':
      toast.error(
        'Your email has been used for a different sign in method. Please try another one.'
      );
      break;
    case 'auth/popup-closed-by-user':
      toast.warn('Cancelled Sign-In.', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000,
      });
      break;
    default:
      console.error(code);
      toast.error(message);
      break;
  }
};
