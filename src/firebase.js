// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHNnJlUzYrU74fetXLZgOY9q7Sms_ALL8",
  authDomain: "netflix-clone-c2adf.firebaseapp.com",
  projectId: "netflix-clone-c2adf",
  storageBucket: "netflix-clone-c2adf.appspot.com",
  messagingSenderId: "54333077967",
  appId: "1:54333077967:web:ffe449dcb26c9c3217baba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {auth,app};

