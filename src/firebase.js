// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqOfT6aVZiwXhs6LvijWT5ce5eEToTTVA",
  authDomain: "firestore-project-3a0a1.firebaseapp.com",
  projectId: "firestore-project-3a0a1",
  storageBucket: "firestore-project-3a0a1.appspot.com",
  messagingSenderId: "216596977327",
  appId: "1:216596977327:web:93d2b6b75e235c6ed8665a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default getFirestore();
