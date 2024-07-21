// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABBtl7JjFn9ZwGBzJ6wcwzPpShHX9y3to",
  authDomain: "netflixgpt-3efb0.firebaseapp.com",
  projectId: "netflixgpt-3efb0",
  storageBucket: "netflixgpt-3efb0.appspot.com",
  messagingSenderId: "306760675581",
  appId: "1:306760675581:web:f11ac1a475c44b2e044e94",
  measurementId: "G-392K90NWE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
