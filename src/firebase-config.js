import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyB2JiiWbx2KdaabGIM6Vp9lEoZoBSDN6jg",
  authDomain: "e-commerce-1d946.firebaseapp.com",
  databaseURL: "https://e-commerce-1d946-default-rtdb.firebaseio.com",
  projectId: "e-commerce-1d946",
  storageBucket: "e-commerce-1d946.appspot.com",
  messagingSenderId: "423298125955",
  appId: "1:423298125955:web:5fcf0fd075dec995aacbb6"
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
};


firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const db = firebase.firestore();

export const auth = firebase.auth();