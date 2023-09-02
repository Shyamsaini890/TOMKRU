// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCceocZg_0q0IY2IEPTk1HNXags7yVeq8M",
  authDomain: "casinoclone-693b3.firebaseapp.com",
  projectId: "casinoclone-693b3",
  storageBucket: "casinoclone-693b3.appspot.com",
  messagingSenderId: "1000866402089",
  appId: "1:1000866402089:web:7551eed665fb7cc8be7138",
  measurementId: "G-8N1JM36797",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
