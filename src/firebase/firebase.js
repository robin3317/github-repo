import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import Alert from '../tools/Alert/Alert';

/* 
Eventually this project will be deleted, so for simplicity I expose 
all the credentials here. 
*/
const firebaseConfig = {
  apiKey: 'AIzaSyDWOLT5Ufzcb06sWPvjWgFE4es9gPIyxsk',
  authDomain: 'github-repo-553fd.firebaseapp.com',
  databaseURL: 'https://github-repo-553fd.firebaseio.com',
  projectId: 'github-repo-553fd',
  storageBucket: 'github-repo-553fd.appspot.com',
  messagingSenderId: '924525116982',
  appId: '1:924525116982:web:003eea72f062b68463a297',
  measurementId: 'G-0RKF6BSHNS',
};

// initializing firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// named export auth & firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// configure google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// create new user if already not exists
export const createUserProfileDocument = async (userAuth, additionalData) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { username, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({ username, email, createAt, ...additionalData });
    } catch (error) {
      Alert({ type: 'error', message: error.message });
    }
  }

  return userRef;
};

export default firebase;
