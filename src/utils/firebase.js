// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfIYnBnpJRkJx6-APlAtDJV2rjAr-rLQE",
  authDomain: "netflixgpt-48aff.firebaseapp.com",
  projectId: "netflixgpt-48aff",
  storageBucket: "netflixgpt-48aff.appspot.com",
  messagingSenderId: "188519385085",
  appId: "1:188519385085:web:53e882ce6ed0aaeccebb94",
  measurementId: "G-E1HTYTYHVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()