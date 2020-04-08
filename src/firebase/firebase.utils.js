import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyClXJ2zjbi3z1O1UeIo5ZbYAcmvlZQEa7Y",
  authDomain: "react-crwn-cloth-db.firebaseapp.com",
  databaseURL: "https://react-crwn-cloth-db.firebaseio.com",
  projectId: "react-crwn-cloth-db",
  storageBucket: "react-crwn-cloth-db.appspot.com",
  messagingSenderId: "970983213284",
  appId: "1:970983213284:web:a5978450992ad01e5504f1",
  measurementId: "G-0SVSSFS440",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
