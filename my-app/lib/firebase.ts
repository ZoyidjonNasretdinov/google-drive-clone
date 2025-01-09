// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "drive-clone-d6fac.firebaseapp.com",
  projectId: "drive-clone-d6fac",
  storageBucket: "drive-clone-d6fac.appspot.com",
  messagingSenderId: "466984999315",
  appId: "1:466984999315:web:1b7564ab1cb55b7f797066",
  measurementId: "G-QXY524YW2R"
};

// Initialize Firebase
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore
const db = getFirestore(firebaseApp);

export { db };
