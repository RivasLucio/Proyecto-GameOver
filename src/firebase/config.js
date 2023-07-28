// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "proyecto-gameover.firebaseapp.com",
  projectId: "proyecto-gameover",
  storageBucket: "proyecto-gameover.appspot.com",
  messagingSenderId: "799575123556",
  appId: "1:799575123556:web:52d472a843c57c442ea171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

