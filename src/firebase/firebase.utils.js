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


export const createUserProfileDocument = async (userAuth, additionalData) => {
   if(!userAuth) return;

   const userRef = await firestore.doc(`users/${userAuth.uid}`); 

   const snapShot = await userRef.get()

   if(!snapShot.exists){
     const { displayName, email } = userAuth;
     const createAt = new Date();

     try{
        await userRef.set({
            displayName,
            email,
            createAt,
            ...additionalData
        })
     }catch(error){
        console.log('error creating user', error.message);
     }
   }

   return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


