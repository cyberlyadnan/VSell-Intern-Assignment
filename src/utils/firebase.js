// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "grocerystore-9fa87.firebaseapp.com",
  projectId: "grocerystore-9fa87",
  storageBucket: "grocerystore-9fa87.appspot.com",
  messagingSenderId: "680266357903",
  appId: "1:680266357903:web:f3409691233b4eadd7e4fa",
  measurementId: "G-0XBNGPJ2PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);