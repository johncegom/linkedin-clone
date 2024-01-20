import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlkhQvh447bbBQuU6VK1nZvTzOcq-ksiE",
  authDomain: "linkedin-clone-86041.firebaseapp.com",
  projectId: "linkedin-clone-86041",
  storageBucket: "linkedin-clone-86041.appspot.com",
  messagingSenderId: "686206318715",
  appId: "1:686206318715:web:2bdd81ea45369e3eb34ade",
  measurementId: "G-GW9YV78X9Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
