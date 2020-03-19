import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDZV38RO1Led2MAt7cl7Yi0yJQIT1pxAmA",
    authDomain: "barkeep-shop.firebaseapp.com",
    databaseURL: "https://barkeep-shop.firebaseio.com",
    projectId: "barkeep-shop",
    storageBucket: "barkeep-shop.appspot.com",
    messagingSenderId: "351259110076",
    appId: "1:351259110076:web:0102838b70d4bac549feb9",
    measurementId: "G-X5MLSJ6SJS"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
