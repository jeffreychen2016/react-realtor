import firebase from 'firebase';
import constants from '../constants';

const firebsaeAPP = () => {
  return firebase.initializeApp(constants.firebaseConfig);
};

export default firebsaeAPP;
