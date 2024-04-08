// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-9b5e1.firebaseapp.com",
  projectId: "blog-9b5e1",
  storageBucket: "blog-9b5e1.appspot.com",
  messagingSenderId: "541956660280",
  appId: "1:541956660280:web:160090d3c68caa4a8b9acd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
