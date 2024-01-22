// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACkHems60mu_Ws9IryM_4iJD6qm7ywB8c",
  authDomain: "eryeol-portfolio.firebaseapp.com",
  projectId: "eryeol-portfolio",
  storageBucket: "eryeol-portfolio.appspot.com",
  messagingSenderId: "577468050150",
  appId: "1:577468050150:web:a3b7215bec09db87c8e927",
  measurementId: "G-5NT1GGE11Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
