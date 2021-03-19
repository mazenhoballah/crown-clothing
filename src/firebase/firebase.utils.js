import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyBkFqv39jtOHvxw9i0l5nO9FOM4DF0lmsg',
    authDomain: 'crown-db-26346.firebaseapp.com',
    projectId: 'crown-db-26346',
    storageBucket: 'crown-db-26346.appspot.com',
    messagingSenderId: '635193047872',
    appId: '1:635193047872:web:c00c067556a8e2bc19d8a5',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
