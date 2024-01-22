// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApb0hapRUBzA8thbDObV6V9PQ1ZRXmLXM",
  authDomain: "new-proj-5af17.firebaseapp.com",
  projectId: "new-proj-5af17",
  storageBucket: "new-proj-5af17.appspot.com",
  messagingSenderId: "843033046754",
  appId: "1:843033046754:web:a890863b020d753b3178bb",
  measurementId: "G-HJ9EGEVV5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


