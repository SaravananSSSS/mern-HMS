// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-hms.firebaseapp.com",
  projectId: "mern-hms",
  storageBucket: "mern-hms.appspot.com",
  messagingSenderId: "218244408131",
  appId: "1:218244408131:web:8d06d8eba39d9778bd85f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);