// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWPvDVKt0VygEwm3eg9EUnW1km9qsbU7E",
  authDomain: "paymentapp-project.firebaseapp.com",
  projectId: "paymentapp-project",
  storageBucket: "paymentapp-project.appspot.com",
  messagingSenderId: "309555304502",
  appId: "1:309555304502:web:78ca1e8dbf8196508e2097"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };