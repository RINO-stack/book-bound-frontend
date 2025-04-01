// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyADHFizDPqae6nR1YJ2tZIevHdegZ-CoRU",
  authDomain: "book-store-cf1a3.firebaseapp.com",
  projectId: "book-store-cf1a3",
  storageBucket: "book-store-cf1a3.firebasestorage.app",
  messagingSenderId: "604366400181",
  appId: "1:604366400181:web:72c562dd7625d2ef7facfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app


