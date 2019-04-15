import firebase from 'firebase';

export const activateAuthStateListener = handleAuthStateChange =>
  firebase.auth().onAuthStateChanged(handleAuthStateChange);

export const signOut = () => firebase.auth().signOut();

export const signInFacebook = async () => {
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    return result;
  } catch (error) {
    throw error;
  }
};

export const signInGoogle = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
