// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBmuSXw3xDpyLcLbJXlbo4tDIgsR9Fz2U",
  authDomain: "famwebapp-abe61.firebaseapp.com",
  projectId: "famwebapp-abe61",
  storageBucket: "famwebapp-abe61.appspot.com",
  messagingSenderId: "60373682709",
  appId: "1:60373682709:web:671df64fe9e798b1e9dc1c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Prepare Database
const db = getFirestore();

// Get Storage
const storage = getStorage();

export { app, db, storage };
