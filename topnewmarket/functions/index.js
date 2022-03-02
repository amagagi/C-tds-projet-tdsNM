const functions = require("firebase-functions");

// Import the functions you need from the SDKs you need
import { initializeApp } from "src/firebase/app";
import { getAnalytics } from "src/firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF2r7uyHohHnb2CoFTnUM2otbL_CVLAOw",
  authDomain: "topnewmarket-d0b24.firebaseapp.com",
  projectId: "topnewmarket-d0b24",
  storageBucket: "topnewmarket-d0b24.appspot.com",
  messagingSenderId: "990245098926",
  appId: "1:990245098926:web:e97abc600d874142e9243f",
  measurementId: "G-GP2DWJ13T4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);