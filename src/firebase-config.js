// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore, collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjIHQ2XAP10FCaZrzIJ2N1UHFbx_8NPPQ",
  authDomain: "one-to-one-2f017.firebaseapp.com",
  projectId: "one-to-one-2f017",
  storageBucket: "one-to-one-2f017.appspot.com",
  messagingSenderId: "667449925622",
  appId: "1:667449925622:web:cdac2f468cd5cae384b1d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const oneToOneCollection = collection (db, 'One-to-one')