import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAH3ZMSpBTRR4FjQfiEX7a3wsla98LB5dY",
    authDomain: "crwn-db-3f292.firebaseapp.com",
    projectId: "crwn-db-3f292",
    storageBucket: "crwn-db-3f292.appspot.com",
    messagingSenderId: "246181331880",
    appId: "1:246181331880:web:05f08c417e6951a6c5539d",
    measurementId: "G-3KG1CN5B3P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


